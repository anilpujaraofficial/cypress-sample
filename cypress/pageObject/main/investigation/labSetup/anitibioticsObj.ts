import { Investigation } from "@helpers/faker/lab";
import AntibioticXpathAssertion from "pages/main/investigation/labSetup/anitibiotics";
import { CommonPageObj } from "@pageObject/commonPageObj/commonPageObj";
let commonPageObj = new CommonPageObj();

import Form from "@helpers/utils/form";
import Button from "@helpers/utils/button";
import AlertMessage from "@helpers/utils/alertMessage";
import TablePage from "@helpers/utils/table";
import { investigation } from "@helpers/filePath/lab";
import { getEnvVariables } from "@support/commands";
import { APIObj } from "@pageObject/apiObj/apiObj";

let form = new Form();
let button = new Button();
let alert = new AlertMessage();
let tableP = new TablePage();
let anitibioticData = new Investigation();
let xpathAssertion = new AntibioticXpathAssertion();

let formXpath = xpathAssertion.form();
let apiObj = new APIObj();
export class AnitibioticsObj {
  addDependency(filePath) {
    apiObj.createAPI(
      getEnvVariables("apiUrl") + "/labs/organisms",
      Object.keys(anitibioticData.organism()).reduce((acc, value) => {
        acc[value] = anitibioticData.organism()[value].value;
        return acc;
      }, {}),
      filePath.organism
    );

    apiObj.createAPI(
      getEnvVariables("apiUrl") + "/labs/antibioticGroups",
      Object.keys(anitibioticData.antibioticGroup()).reduce((acc, value) => {
        acc[value] = anitibioticData.antibioticGroup()[value].value;
        return acc;
      }, {}),
      filePath.antibiotic_group
    );
  }
  archiveDependency(filePath) {
    apiObj.deleteAPI(
      getEnvVariables("apiUrl") + "/labs/organisms/",
      filePath.organism
    );
    apiObj.deleteAPI(
      getEnvVariables("apiUrl") + "/labs/antibioticGroups/",
      filePath.antibiotic_group
    );
  }

  createAntibiotic(filePath: string) {
    let data = anitibioticData.anitibiotic();
    cy.task("checkFileExists", filePath).then((bool) => {
      if (!bool) {
        button.clickButton(xpathAssertion.button().add);
        for (const key in data) {
          cy;
          switch (data[key].type) {
            case "switch":
              button.clickSwitch(formXpath[key], data[key].value);
              break;
            case "dropdown":
              if (key == "organism") {
                cy.readFile(investigation.labSetup.antibiotic.organism).then(
                  (res) => {
                    form.getDropdown(formXpath[key], res.name);
                  }
                );
              } else {
                cy.readFile(
                  investigation.labSetup.antibiotic.antibiotic_group
                ).then((res) => {
                  form.getDropdown(formXpath[key], res.name);
                });
              }
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

  searchAntibiotic(filePath: string) {
    cy.readFile(filePath).then((data) => {
      let dat = [
        data.name.value,
        data.abbreviation.value,
        data.abbreviation.value,
      ];
      form.inputField(xpathAssertion.list().search, data.name.value);
      dat.forEach((item) => {
        tableP.tableBody(xpathAssertion.list().table_td, item);
      });
    });
  }

  viewAntibiotic(filePath: string) {
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
          case "switch":
            commonPageObj.verifyCheckUncheck(formXpath[key], data[key].value);
            break;
        }
      }
    });
  }

  updateAntibiotic(filePath: string) {
    let data = anitibioticData.anitibiotic();
    cy.readFile(filePath).then((data) => {
      form.inputField(xpathAssertion.list().search, data.name.value);
      button.actions(xpathAssertion.list().update);
    });

    for (const key in data) {
      switch (data[key].type) {
        case "switch":
          button.clickSwitch(xpathAssertion.form().active, data[key].value);
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

  archiveAntibiotic(filePath: string) {
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
