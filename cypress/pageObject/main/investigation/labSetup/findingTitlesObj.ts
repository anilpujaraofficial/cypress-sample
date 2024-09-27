import FindingTitleXpathAssertion from "pages/main/investigation/labSetup/findingTitles";

import Form from "@helpers/utils/form";
import Button from "@helpers/utils/button";
import AlertMessage from "@helpers/utils/alertMessage";
import TablePage from "@helpers/utils/table";
import { Investigation } from "@helpers/faker/lab";
import { CommonPageObj } from "@pageObject/commonPageObj/commonPageObj";

let form = new Form();
let button = new Button();
let alert = new AlertMessage();
let tableP = new TablePage();
let findingTitleData = new Investigation();
let xpathAssertion = new FindingTitleXpathAssertion();

let commonPageObj = new CommonPageObj();

export class FindingTitleObj {
  createFindingTitle(filePath: string) {
    cy.task("checkFileExists", filePath).then((bool) => {
      if (!bool) {
        let data = findingTitleData.findingTitles();
        button.clickButton(xpathAssertion.button().add);
        data.name.value = Date.now() + " Finding Title";

        form.CKeditorInput(data.name.value);
        for (const key in data) {
          switch (data[key].type) {
            case "switch":
              button.clickSwitch(xpathAssertion.form()[key], data[key].value);
              break;
            case "input":
              form.inputField(xpathAssertion.form()[key], data[key].value);
              break;
            case "dropdown":
              data[key].value.forEach((item) => {
                form.getDropdown(xpathAssertion.form()[key], item);
              });

              break;
          }
        }
        button.clickButton(xpathAssertion.button().save);
        alert.alertMessage(xpathAssertion.alert().create);
        cy.writeFile(filePath, data);
      }
    });
  }

  searchFindingTitle(filePath: string) {
    cy.readFile(filePath).then((data) => {
      let dat = [data.name.value, data.display_order.value];
      form.inputField(xpathAssertion.list().search, data.name.value);
      dat.forEach((item) => {
        tableP.tableBody(xpathAssertion.list().table_td, item);
      });
    });
  }

  viewFindingTitle(filePath: string) {
    cy.readFile(filePath).then((data) => {
      form.inputField(xpathAssertion.list().search, data.name.value);
      button.actions(xpathAssertion.list().view);

      for (const key in data) {
        switch (data[key].type) {
          case "input":
            commonPageObj.verifyInputFieldValue(
              xpathAssertion.form()[key],
              data[key].value
            );
            break;
          case "dropdown":
            data[key].value.forEach((item) => {
              commonPageObj.verifySelectDropDown(item);
            });
            break;
        }
      }
    });
  }

  updateFindingTitle(filePath: string) {
    let data = findingTitleData.findingTitles();

    cy.readFile(filePath).then((data) => {
      form.inputField(xpathAssertion.list().search, data.name.value);
      button.actions(xpathAssertion.list().update);
    });
    data.name.value = Date.now() + " Orgnism";
    form.CKeditorInput(data.name.value);
    for (const key in data) {
      switch (data[key].type) {
        case "switch":
          button.clickSwitch(xpathAssertion.form()[key], data[key].value);
          break;
        case "input":
          form.inputField(xpathAssertion.form()[key], data[key].value);
          break;
      }
    }

    button.clickButton(xpathAssertion.button().save);
    alert.alertMessage(xpathAssertion.alert().update);
    cy.writeFile(filePath, data);
  }

  archiveFindingTitle(filePath: string) {
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
