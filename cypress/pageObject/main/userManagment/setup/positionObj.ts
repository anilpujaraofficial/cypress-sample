import { UserManagement } from "@helpers/faker/um";
import PositionSelectors from "pages/main/userManagment/setup/position";
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
let positionSelector = new PositionSelectors();
let data = new UserManagement().positions();

class positionObj {
  // Method to create position
  createPosition(filePath: string) {
    cy.task("checkFileExists", filePath).then((bool) => {
      if (!bool) {
        button.clickButton(positionSelector.button().add);
        form.inputField(positionSelector.form("name"), data.name);
        button.clickButton(positionSelector.button().save);
        cy.writeFile(filePath, data);
        alert.alertMessage(positionSelector.alert().create);
      }
    });
  }

  // Method to search created position
  searchPosition(filePath: string) {
    cy.readFile(filePath).then((data) => {
      let positionData = [data.name];
      form.inputField(positionSelector.list().search, positionData[0]);
      positionData.forEach((item) => {
        table.tableBody(positionSelector.list().table_td, item);
      });
    });
  }

  // Method to view created position
  viewPosition(filePath: string) {
    cy.readFile(filePath).then((data) => {
      let positionData = [data.name];
      form.inputField(positionSelector.list().search, positionData[0]);
      button.actions(positionSelector.list().view);

      commonPage.verifyInputFieldValue(
        positionSelector.form("name"),
        commonPage.capitalizeFirstLetter(data.name)
      );
    });
  }

  // Method to update created position
  updatePosition(filePath: string) {
    cy.readFile(filePath).then((data) => {
      let positionData = [data.name];
      form.inputField(positionSelector.list().search, positionData[0]);
      button.actions(positionSelector.list().update);

      form.inputField(positionSelector.form("name"), data.name);
      button.clickButton(positionSelector.button().save);
      cy.writeFile(filePath, data);
      alert.alertMessage(positionSelector.alert().update);
    });
  }
  // Method to archive created position
  archivePosition(filePath: string) {
    cy.readFile(filePath).then((data) => {
      let positionData = [data.name];
      form.inputField(positionSelector.list().search, positionData[0]);
      button.archive(
        positionSelector.delete_confirm().xpath.ok,
        positionSelector.delete_confirm().value.ok
      );
      alert.alertMessage(positionSelector.alert().archive);
    });
  }
}

export default positionObj;
