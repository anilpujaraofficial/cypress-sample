import { UserManagement } from "@helpers/faker/um";
import DesignationSelectors from "pages/main/userManagment/setup/designation";
import AlertMessage from "@helpers/utils/alertMessage";
import Button from "@helpers/utils/button";
import Form from "@helpers/utils/form";
import TablePage from "@helpers/utils/table";
import { CommonPageObj } from "@pageObject/commonPageObj/commonPageObj";

// initialization
let form = new Form();
let commonPage = new CommonPageObj();
let button = new Button();
let alert = new AlertMessage();
let table = new TablePage();
let designationSelector = new DesignationSelectors();
let data = new UserManagement().designation();

class DesignationObj {
  // Method to create designation
  createDesignation(filePath: string) {
    cy.task("checkFileExists", filePath).then((bool) => {
      if (!bool) {
        button.clickButton(designationSelector.button().add);
        form.inputField(designationSelector.form("name"), data.name.value);
        button.clickButton(designationSelector.button().save);
        cy.writeFile(filePath, data);
        alert.alertMessage(designationSelector.alert().create);
      }
    });
  }

  // Method to search created designation
  searchDesignation(filePath: string) {
    cy.readFile(filePath).then((data) => {
      let designationData = [data.name.value];
      form.inputField(designationSelector.list().search, designationData[0]);
      designationData.forEach((item) => {
        table.tableBody(designationSelector.list().table_td, item);
      });
    });
  }

  // Method to view created designation
  viewDesignation(filePath: string) {
    cy.readFile(filePath).then((data) => {
      let designationData = [data.name.value];
      form.inputField(designationSelector.list().search, designationData[0]);
      button.actions(designationSelector.list().view);

      commonPage.verifyInputFieldValue(
        designationSelector.form("name"),
        commonPage.capitalizeFirstLetter(data.name.value)
      );
    });
  }

  // Method to update created designation
  updateDesignation(filePath: string) {
    cy.readFile(filePath).then((data) => {
      let designationData = [data.name.value];
      form.inputField(designationSelector.list().search, designationData[0]);
      button.actions(designationSelector.list().update);

      form.inputField(designationSelector.form("name"), data.name.value);
      button.clickButton(designationSelector.button().save);
      cy.writeFile(filePath, data);
      alert.alertMessage(designationSelector.alert().update);
    });
  }
  // Method to archive created designation
  archiveDesignation(filePath: string) {
    cy.readFile(filePath).then((data) => {
      let designationData = [data.name.value];
      form.inputField(designationSelector.list().search, designationData[0]);
      button.archive(
        designationSelector.delete_confirm().xpath.ok,
        designationSelector.delete_confirm().value.ok
      );
      alert.alertMessage(designationSelector.alert().archive);
    });
  }
}

export default DesignationObj;
