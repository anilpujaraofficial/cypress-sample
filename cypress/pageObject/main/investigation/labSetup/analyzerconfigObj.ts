import { investigation } from "@helpers/filePath/lab";
import AnalyzerConfigXpathAssertion from "pages/main/investigation/labSetup/analyzerconfig";
import { Investigation } from "@helpers/faker/lab";
import { CommonPageObj } from "@pageObject/commonPageObj/commonPageObj";
let commonPageObj = new CommonPageObj();

import Form from "@helpers/utils/form";
import Button from "@helpers/utils/button";
import AlertMessage from "@helpers/utils/alertMessage";
import TablePage from "@helpers/utils/table";
import { getEnvVariables } from "@support/commands";
import { APIObj } from "@pageObject/apiObj/apiObj";
let apiObj = new APIObj();
let form = new Form();
let button = new Button();
let alert = new AlertMessage();
let tableP = new TablePage();
let analyzerConfigData = new Investigation();
let xpathAssertion = new AnalyzerConfigXpathAssertion();

let formXpath = xpathAssertion.form();

export class AnalyzerConfigObj {
  addDependency(filePath) {
    apiObj.createAPI(
      getEnvVariables("apiUrl") + "/labs/analyzers",
      Object.keys(analyzerConfigData.analyzer()).reduce((acc, value) => {
        acc[value] = analyzerConfigData.analyzer()[value].value;
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

  createAnalyzerConfig(filePath: string) {
    let data = analyzerConfigData.analyzerConfig();

    cy.task("checkFileExists", filePath).then((bool) => {
      if (!bool) {
        button.clickButton(xpathAssertion.button().add);

        for (const key in data) {
          switch (data[key].type) {
            case "textarea":
              form.inputField(
                xpathAssertion.form().description,
                data[key].value
              );
              break;
            case "dropdown":
              cy.readFile(
                investigation.labSetup.analyzerConfiguration.analyzer
              ).then((res) => {
                form.getDropdown(xpathAssertion.form().analyzer, res.name);
                data.analyzer.value = res.name;
              });
              form.getDropdown(xpathAssertion.form().protocol, "Filebased");
              break;
            default:
              button.clickSwitch(xpathAssertion.form().active, data[key].value);
              break;
          }
        }
        button.clickButton(xpathAssertion.button().save);
        alert.alertMessage(xpathAssertion.alert().create);
        cy.writeFile(filePath, data);
      }
    });
  }

  searchAnalyzerConfig(filePath: string) {
    cy.readFile(filePath).then((data) => {
      let dat = [data.analyzer.value];
      form.inputField(xpathAssertion.list().search, data.analyzer.value);
      dat.forEach((item) => {
        tableP.tableBody(xpathAssertion.list().table_td, item);
      });
    });
  }

  viewAnalyzerConfig(filePath: string) {
    cy.readFile(filePath).then((data) => {
      form.inputField(xpathAssertion.list().search, data.analyzer.value);
      button.actions(xpathAssertion.list().view);

      for (const key in data) {
        switch (data[key].type) {
          case "textarea":
            commonPageObj.verifyInputFieldValue(
              formXpath[key],
              data[key].value
            );
            break;
          case "switch":
            commonPageObj.verifyCheckUncheck(formXpath[key], data[key].value);
            break;
        }
      }
    });
  }

  archiveAnalyzerConfig(filePath: string) {
    cy.readFile(filePath).then((data) => {
      form.inputField(xpathAssertion.list().search, data.analyzer.value);
      button.archive(
        xpathAssertion.delete_confirm().xpath.ok,
        xpathAssertion.delete_confirm().value.ok
      );
      alert.alertMessage(xpathAssertion.alert().archive);
    });
  }

  updateAnalyzerConfig(filePath: string) {
    let data = analyzerConfigData.analyzerConfig();
    cy.readFile(filePath).then((data) => {
      form.inputField(xpathAssertion.list().search, data.analyzer.value);
      button.actions(xpathAssertion.list().update);
    });

    for (const key in data) {
      switch (data[key].type) {
        case "switch":
          button.clickSwitch(xpathAssertion.form().active, data[key].value);
          break;
        case "textarea":
          form.inputField(formXpath[key], data[key].value);
          break;
      }
    }
    button.clickButton(xpathAssertion.button().save);
    alert.alertMessage(xpathAssertion.alert().update);
    cy.writeFile(filePath, data);
  }
}
