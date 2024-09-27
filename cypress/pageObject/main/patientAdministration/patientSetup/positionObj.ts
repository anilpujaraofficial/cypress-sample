import { CommonPageObj } from "@pageObject/commonPageObj/commonPageObj";
let commonPageObj = new CommonPageObj();
import { PatientAdministration } from "@helpers/faker/pa";

import Form from "@helpers/utils/form";
import Button from "@helpers/utils/button";
import AlertMessage from "@helpers/utils/alertMessage";
import TablePage from "@helpers/utils/table";
import PositionModule from "pages/main/patientAdministration/patientSetup/position";

let form = new Form();
let button = new Button();
let alert = new AlertMessage();
let tableP = new TablePage();
let positionData = new PatientAdministration();
let xpathAssertion = new PositionModule();

let formXpath = xpathAssertion.form();

export class PositionObj {
  create_position(filePath: string) {
    let data = positionData.position();
    cy.task("checkFileExists", filePath).then((bool) => {
      if (!bool) {
        button.clickButton(xpathAssertion.button().add);
        form.inputField(formXpath.name, data.name.value);
        form.inputField(formXpath.code, data.code.value);
        button.clickButton(xpathAssertion.button().save);
        alert.alertMessage(xpathAssertion.alert().create);
        cy.writeFile(filePath, data);
      }
    });
  }

  searchPosition(filePath: string) {
    cy.readFile(filePath).then((data) => {
      let dat = [data.name.value];
      form.inputField(xpathAssertion.list().search, data.name.value);
      dat.forEach((item) => {
        tableP.tableBody(xpathAssertion.list().table_td, item);
      });
    });
  }

  updatePosition(filePath: string) {
    let data = positionData.position();
    cy.readFile(filePath).then((data) => {
      form.inputField(xpathAssertion.list().search, data.name.value);
      button.actions(xpathAssertion.list().update);
    });

    form.inputField(formXpath.name, data.name.value);
    form.inputField(formXpath.code, data.code.value);

    button.clickButton(xpathAssertion.button().save);
    alert.alertMessage(xpathAssertion.alert().update);
    cy.writeFile(filePath, data);
  }

  viewPosition(filePath: string) {
    cy.readFile(filePath).then((data) => {
      form.inputField(xpathAssertion.list().search, data.name.value);
      button.actions(xpathAssertion.list().view);

      for (const key in data) {
        switch (data[key].type) {
          case "input":
            commonPageObj.verifyInputFieldValue(
              formXpath[key],
              data[key].value
            );
            break;
        }
      }
    });
  }

  archivePosition(filePath: string) {
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
