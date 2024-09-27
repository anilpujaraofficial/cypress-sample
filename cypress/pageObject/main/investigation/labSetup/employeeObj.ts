import { CommonPageObj } from "@pageObject/commonPageObj/commonPageObj";

import Form from "@helpers/utils/form";
import Button from "@helpers/utils/button";
import AlertMessage from "@helpers/utils/alertMessage";
import TablePage from "@helpers/utils/table";
import { Investigation } from "@helpers/faker/lab";

import EmployeeXpathAssertion from "pages/main/investigation/labSetup/employee";
import { getEnvVariables } from "@support/commands";
import { employee } from "@helpers/faker/um";
import { APIObj } from "@pageObject/apiObj/apiObj";
let commonPageObj = new CommonPageObj();

let form = new Form();
let button = new Button();
let alert = new AlertMessage();
let tableP = new TablePage();
let empData = new Investigation();
let xpathAssertion = new EmployeeXpathAssertion();
let apiObj = new APIObj();
export class EmployeeObj {
  addDependency(filePath) {
    apiObj.createAPI(
      getEnvVariables("apiUrl") + "/employees",
      employee().data,
      filePath.um_emp
    );
  }
  archiveDependency(filePath) {
    apiObj.deleteAPI(
      getEnvVariables("apiUrl") + "/employees/",
      filePath.um_emp
    );
  }

  searchEmployee(filePath: string) {
    cy.readFile(filePath).then((data) => {
      let dat = [
        data.name,
        data.nmc,
        data.nhpc,
        data.qualification,
        data.specilization,
      ];
      form.inputField(xpathAssertion.list().search, data.name);
      dat.forEach((item) => {
        tableP.tableBody(xpathAssertion.list().table_td, item);
      });
    });
  }

  updateEmployee(umfilePath: string, labfilePath: string) {
    let data = empData.emp();
    cy.readFile(umfilePath).then((dat) => {
      form.inputField(xpathAssertion.list().search, dat.name);
      button.actions(xpathAssertion.list().update);

      for (const key in data) {
        form.inputField(xpathAssertion.form(key), data[key].value);
      }
      button.clickButton(xpathAssertion.button().save);
      alert.alertMessage(xpathAssertion.alert().update);
      cy.writeFile(labfilePath, data);
    });
  }

  viewEmployee(umfilePath: string, labfilePath: string) {
    cy.readFile(umfilePath).then((data) => {
      form.inputField(xpathAssertion.list().search, data.name);
      button.actions(xpathAssertion.list().view);

      cy.readFile(labfilePath).then((res) => {
        let resData = {
          header_caption: res.header_caption,
          nhpc: res.nhpc,
          nmc: res.nmc,
          qualification: res.qualification,
          specilization: res.specilization,
        };

        for (const key in resData) {
          commonPageObj.verifyInputFieldValue(
            xpathAssertion.form(key),
            resData[key].value
          );
        }
      });
    });
  }
}
