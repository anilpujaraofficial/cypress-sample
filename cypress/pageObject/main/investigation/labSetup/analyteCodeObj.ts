import { CommonPageObj } from "@pageObject/commonPageObj/commonPageObj";
let commonPageObj = new CommonPageObj();

import { Investigation } from "@helpers/faker/lab";
import AnalyteCodeXpathAssertion from "pages/main/investigation/labSetup/analyteCode";

import Form from "@helpers/utils/form";
import Button from "@helpers/utils/button";
import AlertMessage from "@helpers/utils/alertMessage";
import TablePage from "@helpers/utils/table";

let form = new Form();
let button = new Button();
let alert = new AlertMessage();
let tableP = new TablePage();
let analyteCodeData = new Investigation();
let xpathAssertion = new AnalyteCodeXpathAssertion();

let formXpath = xpathAssertion.form();

export class AnalyteCodeObj {
  createAnalyteCode(filePath: string) {
    let data = analyteCodeData.analyteCode();
    cy.task("checkFileExists", filePath).then((bool) => {
      if (!bool) {
        button.clickButton(xpathAssertion.button().add);
        for (const key in data) {
          switch (data[key].type) {
            case "input":
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

  searchAnalyteCode(filePath: string) {
    cy.readFile(filePath).then((data) => {
      let dat = [data.analyte_code.value, data.alias_name.value];
      form.inputField(xpathAssertion.list().search, data.analyte_code.value);
      dat.forEach((item) => {
        tableP.tableBody(xpathAssertion.list().table_td, item);
      });
    });
  }

  analyteCodeView(filePath: string) {
    cy.readFile(filePath).then((data) => {
      form.inputField(xpathAssertion.list().search, data.analyte_code.value);
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

  deleteAnalyteCode(filePath: string) {
    cy.readFile(filePath).then((data) => {
      form.inputField(xpathAssertion.list().search, data.analyte_code.value);
      button.archive(
        xpathAssertion.delete_confirm().xpath.ok,
        xpathAssertion.delete_confirm().value.ok
      );
      alert.alertMessage(xpathAssertion.alert().archive);
    });
  }

  updateanAlyteCode(filePath: string) {
    let data = analyteCodeData.analyteCode();
    cy.readFile(filePath).then((data) => {
      form.inputField(xpathAssertion.list().search, data.analyte_code.value);
      button.actions(xpathAssertion.list().update);
    });

    for (const key in data) {
      switch (data[key].type) {
        case "input":
          form.inputField(formXpath[key], data[key].value);
          break;
      }
    }
    button.clickButton(xpathAssertion.button().save);
    alert.alertMessage(xpathAssertion.alert().update);
    cy.writeFile(filePath, data);
  }
}
