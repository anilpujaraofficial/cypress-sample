import { CommonPageObj } from "@pageObject/commonPageObj/commonPageObj";
let commonPageObj = new CommonPageObj();
import { Investigation } from "@helpers/faker/lab";
import UnitOfMeasureXpathAssertion from "pages/main/investigation/labSetup/unitOfMeasure";

import Form from "@helpers/utils/form";
import Button from "@helpers/utils/button";
import AlertMessage from "@helpers/utils/alertMessage";
import TablePage from "@helpers/utils/table";

let form = new Form();
let button = new Button();
let alert = new AlertMessage();
let tableP = new TablePage();
let uomData = new Investigation();
let xpathAssertion = new UnitOfMeasureXpathAssertion();

export class UnitOfMeasureObj {
  createUnitOfMeasure(filePath: string) {
    let data = uomData.unit_of_measure();
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

  searchUnitOfMeasure(filePath: string) {
    cy.readFile(filePath).then((data) => {
      let dat = [data.name.value, data.abbreviation.value];
      form.inputField(xpathAssertion.list().search, data.name.value);
      dat.forEach((item) => {
        tableP.tableBody(xpathAssertion.list().table_td, item);
      });
    });
  }

  viewUnitOfMeasure(filePath: string) {
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

  archiveUnitOfMeasure(filePath: string) {
    cy.readFile(filePath).then((data) => {
      form.inputField(xpathAssertion.list().search, data.name.value);
      button.archive(
        xpathAssertion.delete_confirm().xpath.ok,
        xpathAssertion.delete_confirm().value.ok
      );
      alert.alertMessage(xpathAssertion.alert().archive);
    });
  }

  updateUnitOfMeasure(filePath: string) {
    let data = uomData.unit_of_measure();
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
