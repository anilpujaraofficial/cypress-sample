import DepartmentXpathAssertion, * as deptModule from "pages/main/investigation/labSetup/department";
import { CommonPageObj } from "@pageObject/commonPageObj/commonPageObj";
import Form from "@helpers/utils/form";
import Button from "@helpers/utils/button";
import TablePage from "@helpers/utils/table";
import { Investigation } from "@helpers/faker/lab";
import { APIObj } from "@pageObject/apiObj/apiObj";
import { getEnvVariables } from "@support/commands";
import { UserManagement } from "@helpers/faker/um";
let commonPageObj = new CommonPageObj();
let form = new Form();
let button = new Button();
let tableP = new TablePage();
let deptData = new Investigation();
let xpathAssertion = new DepartmentXpathAssertion();
let apiObj = new APIObj();

let umData = new UserManagement();
export class DepartmentObj {
  addDependency(filePath) {
    // create department with API
    apiObj.createAPI(
      getEnvVariables("apiUrl") + "/departments",
      Object.keys(umData.department("PATHO")).reduce((acc, value) => {
        acc[value] = umData.department("PATHO")[value].value;
        return acc;
      }, {}),
      filePath.um_dept
    );
  }
  archiveDependency(filePath) {
    apiObj.deleteAPI(
      getEnvVariables("apiUrl") + "/departments/",
      filePath.um_dept
    );
  }

  searchDepartment(filePath: string) {
    cy.readFile(filePath).then((data) => {
      let dat = [data.name, data.type, data.code];
      form.inputField(xpathAssertion.list().search, data.name);
      dat.forEach((item) => {
        tableP.tableBody(xpathAssertion.list().table_td, item);
      });
    });
  }

  updateDepartment(umfilePath: string, labfilePath: string) {
    let data = deptData.dept();
    cy.readFile(umfilePath).then((dat) => {
      form.inputField(xpathAssertion.list().search, dat.name);

      button.actions(xpathAssertion.list().update);
      form.inputField(xpathAssertion.form().prefix, data.prefix.value);
      form.inputField(
        xpathAssertion.form().display_order,
        data.display_order.value
      );
      button.clickButton(xpathAssertion.button().save);

      cy.writeFile(labfilePath, data);
    });
  }

  viewDepartment(umfilePath: string, labfilePath: string) {
    cy.readFile(umfilePath).then((data) => {
      form.inputField(xpathAssertion.list().search, data.name);
      button.actions(xpathAssertion.list().view);

      cy.readFile(labfilePath).then((res) => {
        commonPageObj.verifyInputFieldValue(
          xpathAssertion.form().prefix,
          res.prefix.value
        );
        commonPageObj.verifyInputFieldValue(
          xpathAssertion.form().display_order,
          res.display_order.value
        );
      });
    });
  }
}
