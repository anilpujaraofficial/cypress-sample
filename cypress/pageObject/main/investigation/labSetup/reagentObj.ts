import { investigation } from "@helpers/filePath/lab";
import ReagentXpathAssertion from "pages/main/investigation/labSetup/reagent";
import { Investigation } from "@helpers/faker/lab";
import { CommonPageObj } from "@pageObject/commonPageObj/commonPageObj";
let commonPageObj = new CommonPageObj();

import Form from "@helpers/utils/form";
import Button from "@helpers/utils/button";
import AlertMessage from "@helpers/utils/alertMessage";
import TablePage from "@helpers/utils/table";
import { getEnvVariables } from "@support/commands";
import { APIObj } from "@pageObject/apiObj/apiObj";

let form = new Form();
let button = new Button();
let alert = new AlertMessage();
let tableP = new TablePage();
let reagentData = new Investigation();
let xpathAssertion = new ReagentXpathAssertion();
let apiObj = new APIObj();
export class ReagentObj {
  addDependency(filePath) {
    apiObj.createAPI(
      getEnvVariables("apiUrl") + "/labs/analyzers",
      Object.keys(reagentData.analyzer()).reduce((acc, value) => {
        acc[value] = reagentData.analyzer()[value].value;
        return acc;
      }, {}),
      filePath.analyzer
    );
  }
  archiveDependency(filePath) {
    apiObj.deleteAPI(
      getEnvVariables("apiUrl") + "/labs/analyzers/",
      filePath.analyzer
    );
  }

  createReagent(filePath, analyzer) {
    let data = reagentData.reagent();

    cy.task("checkFileExists", filePath).then((bool) => {
      if (!bool) {
        button.clickButton(xpathAssertion.button().add);

        cy.readFile(analyzer).then((res) => {
          form.getDropdown(xpathAssertion.form().analyzer, res.name);
          data.analyzer.value = res.name;
        });
        form.inputField(xpathAssertion.form().name, data.name.value);
        form.inputField(
          xpathAssertion.form().alias_name,
          data.alias_name.value
        );
        form.getDropdown(
          xpathAssertion.form().reagent_type,
          data.reagent_type.value
        );
        form.getDropdown(xpathAssertion.form().unit, data.unit.value);

        button.clickButton(xpathAssertion.button().save);
        alert.alertMessage(
          `${data.name.value} reagent is created with liquidBasis type`
        );
        cy.writeFile(filePath, data);
      }
    });
  }

  searchReagent(filePath: string) {
    cy.readFile(filePath).then((data) => {
      let dat = [
        data.name.value,
        data.alias_name.value,
        data.analyzer.value,
        data.reagent_type.value,
      ];
      form.inputField(xpathAssertion.list().search, data.name.value);
      dat.forEach((item) => {
        tableP.tableBody(xpathAssertion.list().table_td, item);
      });
    });
  }

  viewReagent(filePath: string) {
    cy.readFile(filePath).then((data) => {
      form.inputField(xpathAssertion.list().search, data.name.value);
      button.actions(xpathAssertion.list().view);

      commonPageObj.verifySelectDropDown(data.analyzer.value);
      commonPageObj.verifyInputFieldValue(
        xpathAssertion.form().name,
        data.name.value
      );
      commonPageObj.verifyInputFieldValue(
        xpathAssertion.form().alias_name,
        data.alias_name.value
      );
      commonPageObj.verifySelectDropDown(data.reagent_type.value);
      commonPageObj.verifySelectDropDown(data.unit.value);
    });
  }

  updateReagent(filePath: string) {
    let data = reagentData.reagent();
    cy.readFile(filePath).then((data) => {
      form.inputField(xpathAssertion.list().search, data.name.value);
      button.actions(xpathAssertion.list().update);
    });
    form.inputField(xpathAssertion.form().name, data.name.value);
    form.inputField(xpathAssertion.form().alias_name, data.alias_name.value);

    button.clickButton(xpathAssertion.button().save);
    alert.alertMessage(xpathAssertion.alert().update);
    cy.writeFile(filePath, data);
  }
  archiveReagent(filePath: string) {
    cy.readFile(filePath).then((data) => {
      form.inputField(xpathAssertion.list().search, data.name.value);
      button.archive(
        xpathAssertion.delete_confirm().xpath.ok,
        xpathAssertion.delete_confirm().value.ok
      );
      alert.alertMessage(xpathAssertion.alert().archive);
    });
  }
}
