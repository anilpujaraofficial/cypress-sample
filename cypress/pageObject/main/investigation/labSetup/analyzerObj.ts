import { Investigation } from "@helpers/faker/lab";
import analyzerXpathAssertion from "pages/main/investigation/labSetup/analyzer";

import Form from "@helpers/utils/form";
import Button from "@helpers/utils/button";
import AlertMessage from "@helpers/utils/alertMessage";
import TablePage from "@helpers/utils/table";
import { CommonPageObj } from "@pageObject/commonPageObj/commonPageObj";

let commonPageObj = new CommonPageObj();
let form = new Form();
let button = new Button();
let alert = new AlertMessage();
let tableP = new TablePage();
let analyzerData = new Investigation();
let xpathAssertion = new analyzerXpathAssertion();

export class AnalyzerObj {
  createAnalyzer(filePath: string) {
    let data = analyzerData.analyzer();
    cy.task("checkFileExists", filePath).then((bool) => {
      if (!bool) {
        button.clickButton(xpathAssertion.button().add);
        for (const key in data) {
          switch (data[key].type) {
            case "switch":
              button.clickSwitch(xpathAssertion.form(key), data[key].value);
              break;
            default:
              form.inputField(xpathAssertion.form(key), data[key].value);
              break;
          }
        }
        button.clickButton(xpathAssertion.button().save);
        alert.alertMessage(xpathAssertion.alert().create);
        cy.writeFile(filePath, data);
      }
    });
  }

  searchAnalyzer(filePath: string) {
    cy.readFile(filePath).then((data) => {
      let dat = [
        data.name.value,
        data.abbreviation.value,
        data.manufacturer.value,
        data.model_number.value,
        data.description.value,
      ];
      form.inputField(xpathAssertion.list().search, data.name.value);
      dat.forEach((item) => {
        tableP.tableBody(xpathAssertion.list().table_td, item);
      });
    });
  }

  viewAnalyzer(filePath: string) {
    cy.readFile(filePath).then((data) => {
      form.inputField(xpathAssertion.list().search, data.name.value);
      button.actions(xpathAssertion.list().view);

      for (const key in data) {
        switch (data[key].type) {
          case "input":
            commonPageObj.verifyInputFieldValue(
              xpathAssertion.form(key),
              data[key].value
            );
            break;
          case "textarea":
            commonPageObj.verifyInputFieldValue(
              xpathAssertion.form(key),
              data[key].value
            );
            break;
          default:
            commonPageObj.verifyCheckUncheck(
              xpathAssertion.form(key),
              data[key].value
            );
            break;
        }
      }
    });
  }

  archiveAnalyzer(filePath: string) {
    cy.readFile(filePath).then((data) => {
      form.inputField(xpathAssertion.list().search, data.name.value);
      button.archive(
        xpathAssertion.delete_confirm().xpath.ok,
        xpathAssertion.delete_confirm().value.ok
      );
      alert.alertMessage(xpathAssertion.alert().archive);
    });
  }

  updateAnalyzer(filePath: string) {
    let data = analyzerData.analyzer();
    cy.readFile(filePath).then((data) => {
      form.inputField(xpathAssertion.list().search, data.name.value);
      button.actions(xpathAssertion.list().update);
    });

    for (const key in data) {
      switch (data[key].type) {
        case "switch":
          button.clickSwitch(xpathAssertion.form(key), data[key].value);
          break;
        default:
          form.inputField(xpathAssertion.form(key), data[key].value);
          break;
      }
    }
    button.clickButton(xpathAssertion.button().save);
    alert.alertMessage(xpathAssertion.alert().update);
    cy.writeFile(filePath, data);
  }
}
