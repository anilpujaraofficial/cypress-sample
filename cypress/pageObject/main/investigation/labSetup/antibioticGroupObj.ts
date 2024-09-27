import AntibioticGroupXpathAssertion from "pages/main/investigation/labSetup/antibioticGroup";

import { Investigation } from "@helpers/faker/lab";

import { CommonPageObj } from "@pageObject/commonPageObj/commonPageObj";
let commonPageObj = new CommonPageObj();

import Form from "@helpers/utils/form";
import Button from "@helpers/utils/button";
import AlertMessage from "@helpers/utils/alertMessage";
import TablePage from "@helpers/utils/table";

let form = new Form();
let button = new Button();
let alert = new AlertMessage();
let tableP = new TablePage();
let antibioticGroupData = new Investigation();
let xpathAssertion = new AntibioticGroupXpathAssertion();

export class AntibioticGroupObj {
  createAntibioticGroup(filePath: string) {
    let data = antibioticGroupData.antibioticGroup();
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

  searchAntibioticGroup(filePath: string) {
    cy.readFile(filePath).then((data) => {
      let dat = [
        data.name.value,
        data.abbreviation.value,
        data.display_order.value,
      ];
      form.inputField(xpathAssertion.list().search, data.name.value);
      dat.forEach((item) => {
        tableP.tableBody(xpathAssertion.list().table_td, item);
      });
    });
  }

  viewAntibioticGroup(filePath: string) {
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
        }
      }
    });
  }

  archiveAntibioticGroup(filePath: string) {
    cy.readFile(filePath).then((data) => {
      form.inputField(xpathAssertion.list().search, data.name.value);
      button.archive(
        xpathAssertion.delete_confirm().xpath.ok,
        xpathAssertion.delete_confirm().value.ok
      );
      alert.alertMessage(xpathAssertion.alert().archive);
    });
  }

  updateAntibioticGroup(filePath: string) {
    let data = antibioticGroupData.antibioticGroup();
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
