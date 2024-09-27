import AlertMessage from "@helpers/utils/alertMessage";
import Button from "@helpers/utils/button";
import Form from "@helpers/utils/form";
import TablePage from "@helpers/utils/table";
import { CommonPageObj } from "@pageObject/commonPageObj/commonPageObj";
import { AgentPortal } from "@helpers/faker/ap";
import AgentDoctorSelectors from "pages/main/agentPortal/setup/agentDoctor";

// initialization
let form = new Form();
let commonPage = new CommonPageObj();
let button = new Button();
let alert = new AlertMessage();
let table = new TablePage();
let agentDoctorSelector = new AgentDoctorSelectors();
let data = new AgentPortal().agentDoctor();

class AgentDoctorObj {
  // Method to create agentDoctor
  createAgentDoctor(filePath: string) {
    cy.task("checkFileExists", filePath).then((bool) => {
      if (!bool) {
        button.clickButton(agentDoctorSelector.button().add);
        for (let key in data) {
          form.inputField(agentDoctorSelector.form(key), data[key].value);
        }
        button.clickButton(agentDoctorSelector.button().save);
        cy.writeFile(filePath, data);
        alert.alertMessage(agentDoctorSelector.alert().create);
      }
    });
  }

  // Method to search created agentDoctor
  searchAgentDoctor(filePath: string) {
    cy.readFile(filePath).then((data) => {
      let agentDoctorData = [data.name.value];
      form.inputField(agentDoctorSelector.list().search, agentDoctorData[0]);
      agentDoctorData.forEach((item) => {
        table.tableBody(agentDoctorSelector.list().table_td, item);
      });
    });
  }

  // Method to view created agentDoctor
  viewAgentDoctor(filePath: string) {
    cy.readFile(filePath).then((data) => {
      let agentDoctorData = [data.name.value];
      form.inputField(
        agentDoctorSelector.list().search,
        commonPage.titleCase(agentDoctorData[0])
      );
      button.actions(agentDoctorSelector.list().view);

      for (let key in data) {
        commonPage.verifyInputFieldValue(
          agentDoctorSelector.form(key),
          commonPage.titleCase(data[key].value)
        );
      }
    });
  }

  // Method to update created agentDoctor
  updateAgentDoctor(filePath: string) {
    cy.readFile(filePath).then((data) => {
      let agentDoctorData = [data.name.value];
      form.inputField(agentDoctorSelector.list().search, agentDoctorData[0]);
      button.actions(agentDoctorSelector.list().update);

      for (let key in data) {
        form.inputField(agentDoctorSelector.form(key), data[key].value);
      }
      button.clickButton(agentDoctorSelector.button().save);
      cy.writeFile(filePath, data);
      alert.alertMessage(agentDoctorSelector.alert().update);
    });
  }
  // Method to archive created agentDoctor
  archiveAgentDoctor(filePath: string) {
    cy.readFile(filePath).then((data) => {
      let agentDoctorData = [data.name.value];
      form.inputField(agentDoctorSelector.list().search, agentDoctorData[0]);
      button.archive(
        agentDoctorSelector.delete_confirm().xpath.ok,
        agentDoctorSelector.delete_confirm().value.ok
      );
      alert.alertMessage(agentDoctorSelector.alert().archive);
    });
  }
}

export default AgentDoctorObj;
