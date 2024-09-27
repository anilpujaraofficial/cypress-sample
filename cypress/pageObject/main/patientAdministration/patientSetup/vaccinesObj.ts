import { CommonPageObj } from "@pageObject/commonPageObj/commonPageObj";
let commonPageObj = new CommonPageObj();
import { PatientAdministration } from "@helpers/faker/pa";

import Form from "@helpers/utils/form";
import Button from "@helpers/utils/button";
import AlertMessage from "@helpers/utils/alertMessage";
import TablePage from "@helpers/utils/table";
import VaccineModule from "pages/main/patientAdministration/patientSetup/vaccines";

let form = new Form();
let button = new Button();
let alert = new AlertMessage();
let tableP = new TablePage();
let vaccineData = new PatientAdministration();
let xpathAssertion = new VaccineModule();

let formXpath = xpathAssertion.form();

export class VaccineObj {
  create_vaccines(filePath: string) {
    let data = vaccineData.vaccines();
    cy.task("checkFileExists", filePath).then((bool) => {
      if (!bool) {
        button.clickButton(xpathAssertion.button().add);
        form.inputField(formXpath.name, data.name.value);
        button.clickButton(xpathAssertion.button().save);
        alert.alertMessage(xpathAssertion.alert().create);
        cy.writeFile(filePath, data);
      }
    });
  }
  searchVaccines(filePath: string) {
    cy.readFile(filePath).then((data) => {
      const dat = [data.name.value];
      form.inputField(xpathAssertion.list().search, data.name.value);
      dat.forEach((item) => {
        tableP.tableBody(xpathAssertion.list().table_td, item);
      });
    });
  }

  updateVaccines(filePath: string) {
    let data = vaccineData.relation();
    cy.readFile(filePath).then((data) => {
      form.inputField(xpathAssertion.list().search, data.name.value);
      button.actions(xpathAssertion.list().update);
    });

    form.inputField(formXpath.name, data.name.value);

    button.clickButton(xpathAssertion.button().save);
    alert.alertMessage(xpathAssertion.alert().update);
    cy.writeFile(filePath, data);
  }

  viewVaccines(filePath: string) {
    cy.readFile(filePath).then((data) => {
      form.inputField(xpathAssertion.list().search, data.name.value);
      button.actions(xpathAssertion.list().view);

      for (const key in data) {
        commonPageObj.verifyInputFieldValue(formXpath[key], data[key].value);
      }
    });
  }

  archiveVaccines(filePath: string) {
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
