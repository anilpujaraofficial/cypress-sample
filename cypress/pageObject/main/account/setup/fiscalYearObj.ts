import Account from "@helpers/faker/account";
import FiscalYearSelectors from "pages/main/account/setup/fiscalYear";
import AlertMessage from "@helpers/utils/alertMessage";
import Button from "@helpers/utils/button";
import Form from "@helpers/utils/form";
import TablePage from "@helpers/utils/table";
import { CommonPageObj } from "@pageObject/commonPageObj/commonPageObj";

let commonPage = new CommonPageObj();
let form = new Form();
let button = new Button();
let alert = new AlertMessage();
let table = new TablePage();
let fiscalYearSelector = new FiscalYearSelectors();
let data = new Account().fiscalYear();

class FiscalYearObj {
  // Method to create fiscal year
  createFiscalYear(filePath: string) {
    cy.task("checkFileExists", filePath).then((bool) => {
      if (!bool) {
        button.clickButton(fiscalYearSelector.button().add);

        for (let key in data) {
          switch (data[key].type) {
            case "input":
              form.inputField(fiscalYearSelector.form(key), data[key].value);
              break;
            default:
              button.clickSwitch(fiscalYearSelector.form(key), data[key].value);
              break;
          }
        }
        button.clickButton(fiscalYearSelector.button().save);
        alert.alertMessage(fiscalYearSelector.alert().create);
        cy.writeFile(filePath, data);
      }
    });
  }

  // Method to search created fiscal year
  searchFiscalYear(filePath: string) {
    cy.readFile(filePath).then((data) => {
      let fiscalYearData = [data.year.value];
      form.inputField(fiscalYearSelector.list().search, fiscalYearData[0]);
      fiscalYearData.forEach((item) => {
        table.tableBody(fiscalYearSelector.list().table_td, item);
      });
    });
  }

  // Method to view created fiscal year
  viewFiscalYear(filePath: string) {
    cy.readFile(filePath).then((data) => {
      let fiscalYearData = [data.year.value];
      form.inputField(fiscalYearSelector.list().search, fiscalYearData[0]);
      button.actions(fiscalYearSelector.list().view);

      for (let key in data) {
        console.log(data);
        switch (data[key].type) {
          case "input":
            commonPage.verifyInputFieldValue(
              fiscalYearSelector.form(key),
              data[key].value
            );
            break;
          case "textarea":
            commonPage.verifyInputFieldValue(
              fiscalYearSelector.form(key),
              data[key].value
            );
            break;
          default:
            commonPage.verifyCheckUncheck(
              fiscalYearSelector.form(key),
              data[key].value
            );
            break;
        }
      }
    });
  }

  // Method to update created fiscal year
  updateFiscalYear(filePath: string) {
    cy.readFile(filePath).then((data) => {
      let fiscalYearData = [data.year.value];
      form.inputField(fiscalYearSelector.list().search, fiscalYearData[0]);
      button.actions(fiscalYearSelector.list().update);

      for (let key in data) {
        switch (data[key].type) {
          case "input":
            form.inputField(fiscalYearSelector.form(key), data[key].value);
            break;
          default:
            button.clickSwitch(fiscalYearSelector.form(key), data[key].value);
            break;
        }
      }
      button.clickButton(fiscalYearSelector.button().save);
      alert.alertMessage(fiscalYearSelector.alert().update);
      cy.writeFile(filePath, data);
    });
  }
  // Method to archive created fiscal year
  archiveFiscalYear(filePath: string) {
    cy.readFile(filePath).then((data) => {
      let fiscalYearData = [data.year.value];
      form.inputField(fiscalYearSelector.list().search, fiscalYearData[0]);
      button.archive(
        fiscalYearSelector.delete_confirm().xpath.ok,
        fiscalYearSelector.delete_confirm().value.ok
      );
      alert.alertMessage(fiscalYearSelector.alert().archive);
    });
  }
}

export default FiscalYearObj;
