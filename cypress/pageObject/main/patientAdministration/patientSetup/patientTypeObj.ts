import { CommonPageObj } from "@pageObject/commonPageObj/commonPageObj";
let commonPageObj = new CommonPageObj();
import { PatientAdministration } from "@helpers/faker/pa";

import Form from "@helpers/utils/form";
import Button from "@helpers/utils/button";
import AlertMessage from "@helpers/utils/alertMessage";
import TablePage from "@helpers/utils/table";
import PatientTypeModule from "pages/main/patientAdministration/patientSetup/patientType";

let form = new Form();
let button = new Button();
let alert = new AlertMessage();
let tableP = new TablePage();
let patientTypeData = new PatientAdministration();
let xpathAssertion = new PatientTypeModule();

let formXpath = xpathAssertion.form();

export class PatientTypeObj {
  create_patienttype(filePath: string) {
    let data = patientTypeData.patientType();
    cy.task("checkFileExists", filePath).then((bool) => {
      if (!bool) {
        button.clickButton(xpathAssertion.button().add);

        for (const key in data) {
          switch (data[key].type) {
            case "switch":
              button.clickSwitch(formXpath[key], data[key].value);
              break;
            default:
              form.inputField(formXpath[key], data[key].value);
              break;
          }
        }
        button.clickButton(xpathAssertion.button().save);
        alert.alertMessage(xpathAssertion.alert().create);
        cy.writeFile(filePath, data);
      }
    });
  }

  searchPatientType(filePath: string) {
    cy.readFile(filePath).then((data) => {
      let dat = [data.name.value];
      form.inputField(xpathAssertion.list().search, data.name.value);
      dat.forEach((item) => {
        tableP.tableBody(xpathAssertion.list().table_td, item);
      });
    });
  }

  updatePatientType(filePath: string) {
    let data = patientTypeData.patientType();
    cy.readFile(filePath).then((data) => {
      form.inputField(xpathAssertion.list().search, data.name.value);
      button.actions(xpathAssertion.list().update);
    });

    for (const key in data) {
      switch (data[key].type) {
        case "input":
          form.inputField(formXpath[key], data[key].value);
          break;

        default:
          button.clickSwitch(formXpath[key], data[key].value);
          break;
      }
    }
    button.clickButton(xpathAssertion.button().save);
    alert.alertMessage(xpathAssertion.alert().update);
    cy.writeFile(filePath, data);
  }

  viewPatientType(filePath: string) {
    cy.readFile(filePath).then((data) => {
      form.inputField(xpathAssertion.list().search, data.name.value);
      button.actions(xpathAssertion.list().view);

      for (const key in data) {
        switch (data[key].type) {
          case "input":
            form.inputField(formXpath[key], data[key].value);
            break;

          default:
            button.clickSwitch(formXpath[key], data[key].value);
            break;
        }
      }
    });
  }

  archivePatiet(filePath: string) {
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
