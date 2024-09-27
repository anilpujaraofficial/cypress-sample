import MethodXpathAssertion from "pages/main/investigation/labSetup/method";

import { CommonPageObj } from "@pageObject/commonPageObj/commonPageObj";

import Form from "@helpers/utils/form";
import Button from "@helpers/utils/button";
import AlertMessage from "@helpers/utils/alertMessage";
import TablePage from "@helpers/utils/table";
import { Investigation } from "@helpers/faker/lab";
import { investigation } from "@helpers/filePath/lab";
import { getEnvVariables } from "@support/commands";
import { APIObj } from "@pageObject/apiObj/apiObj";
let commonPageObj = new CommonPageObj();

let apiObj = new APIObj();
let form = new Form();
let button = new Button();
let alert = new AlertMessage();
let tableP = new TablePage();
let methodData = new Investigation();
let xpathAssertion = new MethodXpathAssertion();

let formXpath = xpathAssertion.form();

export class MethodObj {
  addDependency(filePath) {
    apiObj.createAPI(
      getEnvVariables("apiUrl") + "/labs/analyzers",
      Object.keys(methodData.analyzer()).reduce((acc, value) => {
        acc[value] = methodData.analyzer()[value].value;
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

  createMethod(filePath: string) {
    let data = methodData.method();
    cy.task("checkFileExists", filePath).then((bool) => {
      if (!bool) {
        button.clickButton(xpathAssertion.button().add);
        for (const key in data) {
          switch (data[key].type) {
            case "switch":
              button.clickSwitch(formXpath[key], data[key].value);
              break;
            case "dropdown":
              cy.readFile(investigation.labSetup.method.analyzer).then(
                (res) => {
                  form.getDropdown(formXpath[key], res.name);
                }
              );
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

  searchMethod(filePath: string) {
    cy.readFile(filePath).then((data) => {
      let dat = [data.name.value];
      form.inputField(xpathAssertion.list().search, data.name.value);
      dat.forEach((item) => {
        tableP.tableBody(xpathAssertion.list().table_td, item);
      });
    });
  }

  viewMethod(filePath: string) {
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
          case "textarea":
            commonPageObj.verifyInputFieldValue(
              formXpath[key],
              data[key].value
            );
            break;
        }
      }
    });
  }

  updateMethod(filePath: string) {
    let data = methodData.method();
    cy.readFile(filePath).then((data) => {
      form.inputField(xpathAssertion.list().search, data.name.value);
      button.actions(xpathAssertion.list().update);
    });
    for (const key in data) {
      switch (data[key].type) {
        case "switch":
          button.clickSwitch(formXpath[key], data[key].value);
          break;
        case "textarea":
          form.inputField(formXpath[key], data[key].value);
          break;
        case "input":
          form.inputField(formXpath[key], data[key].value);
          break;
      }
    }
    button.clickButton(xpathAssertion.button().save);
    alert.alertMessage(xpathAssertion.alert().update);
    cy.writeFile(filePath, data);
  }

  archiveMethod(filePath: string) {
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
