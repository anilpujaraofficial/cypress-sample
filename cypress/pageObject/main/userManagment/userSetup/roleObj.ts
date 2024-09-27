import { UserManagement } from "@helpers/faker/um";
import AlertMessage from "@helpers/utils/alertMessage";
import Button from "@helpers/utils/button";
import Form from "@helpers/utils/form";
import TablePage from "@helpers/utils/table";
import { CommonPageObj } from "@pageObject/commonPageObj/commonPageObj";
import RoleSelectors from "pages/main/userManagment/userSetup/role";

// initialization
let form = new Form();
let commonPage = new CommonPageObj();
let button = new Button();
let alert = new AlertMessage();
let table = new TablePage();
let roleSelector = new RoleSelectors();
let data = new UserManagement().role();

class RoleObj {
  // Method to create role
  createRole(filePath: string) {
    cy.task("checkFileExists", filePath).then((bool) => {
      if (!bool) {
        button.clickButton(roleSelector.button().add);
        form.inputField(roleSelector.form(), data.name.value);
        button.clickButton(roleSelector.button().save);
        cy.writeFile(filePath, data);
        alert.alertMessage(roleSelector.alert().create);
      }
    });
  }

  // Method to search created role
  searchRole(filePath: string) {
    cy.readFile(filePath).then((data) => {
      let roleData = [data.name.value];
      form.inputField(roleSelector.list().search, roleData[0]);
      roleData.forEach((item) => {
        table.tableBody(roleSelector.list().table_td, item);
      });
    });
  }

  // Method to view created role
  viewRole(filePath: string) {
    cy.readFile(filePath).then((data) => {
      let roleData = [data.name.value];
      form.inputField(roleSelector.list().search, roleData[0]);
      button.actions(roleSelector.list().view);

      commonPage.verifyInputFieldValue(
        roleSelector.form(),
        commonPage.capitalizeFirstLetter(data.name.value)
      );
    });
  }

  // Method to update created role
  updateRole(filePath: string) {
    cy.readFile(filePath).then((data) => {
      let roleData = [data.name.value];
      form.inputField(roleSelector.list().search, roleData[0]);
      button.actions(roleSelector.list().update);

      form.inputField(roleSelector.form(), data.name.value);
      button.clickButton(roleSelector.button().save);
      cy.writeFile(filePath, data);
      alert.alertMessage(roleSelector.alert().update);
    });
  }

  // Method to archive created role
  archiveRole(filePath: string) {
    cy.readFile(filePath).then((data) => {
      let roleData = [data.name.value];
      form.inputField(roleSelector.list().search, roleData[0]);
      button.archive(
        roleSelector.delete_confirm().xpath.ok,
        roleSelector.delete_confirm().value.ok
      );
      alert.alertMessage(roleSelector.alert().archive);
    });
  }
}

export default RoleObj;
