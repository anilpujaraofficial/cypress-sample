import { CommonPageObj } from "@pageObject/commonPageObj/commonPageObj";
let commonPageObj = new CommonPageObj();

import Form from "@helpers/utils/form";
import Button from "@helpers/utils/button";
import AlertMessage from "@helpers/utils/alertMessage";
import TablePage from "@helpers/utils/table";
import { Investigation } from "@helpers/faker/lab";
import SequenceDefinitionXpathAssertion from "pages/main/investigation/labSetup/sequenceDefinition";

let form = new Form();
let button = new Button();
let alert = new AlertMessage();
let tableP = new TablePage();
let sequenceDefinitionData = new Investigation();
let xpathAssertion = new SequenceDefinitionXpathAssertion();

export class SequenceDefinitionnObj {
  createSequenceDefinitionn(filePath: string) {
    let data = sequenceDefinitionData.sequenceDefinition();
    cy.task("checkFileExists", filePath).then((bool) => {
      if (!bool) {
        button.clickButton(xpathAssertion.button().add);
        form.getDropdown(
          xpathAssertion.form().department_type,
          data.department_type.value
        );
        form.inputField(xpathAssertion.form().length, data.length.value);
        form.inputField(xpathAssertion.form().length, data.length.value);
        form.inputField(xpathAssertion.form().prefix, data.prefix.value);
        form.inputField(xpathAssertion.form().suffix, data.suffix.value);
        form.getDropdown(
          xpathAssertion.form().date_format,
          data.date_format.value
        );

        button.clickButton(xpathAssertion.button().save);
        alert.alertMessage(xpathAssertion.alert().create);
        cy.writeFile(filePath, data);
      }
    });
  }

  searchSequenceDefinitionn(filePath: string) {
    cy.readFile(filePath).then((data) => {
      let dat = [
        data.department_type.value,
        data.suffix.value,
        data.length.value,
      ];
      form.inputField(xpathAssertion.list().search, data.suffix.value);
      dat.forEach((item) => {
        tableP.tableBody(xpathAssertion.list().table_td, item);
      });
    });
  }

  viewSequenceDefinitionn(filePath: string) {
    cy.readFile(filePath).then((data) => {
      form.inputField(xpathAssertion.list().search, data.suffix.value);
      button.actions(xpathAssertion.list().view);
      commonPageObj.verifySelectDropDown(data.department_type.value);
      commonPageObj.verifyInputFieldValue(
        xpathAssertion.form().suffix,
        data.suffix.value
      );
      commonPageObj.verifyInputFieldValue(
        xpathAssertion.form().length,
        data.length.value
      );
    });
  }

  archiveSequenceDefinitionn(filePath: string) {
    cy.readFile(filePath).then((data) => {
      form.inputField(xpathAssertion.list().search, data.suffix.value);
      button.archive(
        xpathAssertion.delete_confirm().xpath.ok,
        xpathAssertion.delete_confirm().value.ok
      );
      alert.alertMessage(xpathAssertion.alert().archive);
    });
  }
}
