import { CommonPageObj } from "@pageObject/commonPageObj/commonPageObj";

import Form from "@helpers/utils/form";
import Button from "@helpers/utils/button";
import AlertMessage from "@helpers/utils/alertMessage";
import TablePage from "@helpers/utils/table";
import { Investigation } from "@helpers/faker/lab";
import ReportFormatXpathAssertion from "pages/main/investigation/labSetup/reportFormat";

import { investigation } from "@helpers/filePath/lab";
import { getEnvVariables } from "@support/commands";
import { PatientAdministration, testNameWithPrice } from "@helpers/faker/pa";
import { APIObj } from "@pageObject/apiObj/apiObj";
import { UserManagement } from "@helpers/faker/um";
let commonPageObj = new CommonPageObj();

let form = new Form();
let button = new Button();
let alert = new AlertMessage();
let tableP = new TablePage();
let reportFormatData = new Investigation();
let xpathAssertion = new ReportFormatXpathAssertion();
let umData = new UserManagement();
let paData = new PatientAdministration();
let apiObj = new APIObj();
let formXpath = xpathAssertion.form();

export class ReportFormatObj {
  addDependency(filePath) {
    // create department with API
    apiObj.createAPI(
      getEnvVariables("apiUrl") + "/departments",
      Object.keys(umData.department("HISTO")).reduce((acc, value) => {
        acc[value] = umData.department("HISTO")[value].value;
        return acc;
      }, {}),
      filePath.dept
    );

    // create test name category with API
    apiObj.createAPI(
      getEnvVariables("apiUrl") + "/pa/testnamecategories/",
      Object.keys(paData.testNameCategories()).reduce((acc, value) => {
        acc[value] = paData.testNameCategories()[value].value;
        return acc;
      }, {}),
      filePath.testnameCat
    );

    // create test name with API
    apiObj.createAPI(
      getEnvVariables("apiUrl") + "/pa/testnames/",
      testNameWithPrice(filePath.dept, filePath.testnameCat).data,
      filePath.testname
    );
    // departemtn wise privilege
    apiObj.departmentWisePrivilege(filePath.dept_id, filePath.dept);
  }
  archiveDependency(filePath) {
    apiObj.deleteAPI(
      getEnvVariables("apiUrl") + "/pa/testnames/",
      filePath.testname
    );
    apiObj.deleteAPI(
      getEnvVariables("apiUrl") + "/departments/",
      filePath.dept
    );

    // *delete  test name category with API

    apiObj.deleteAPI(
      getEnvVariables("apiUrl") + "/pa/testnamecategories/",
      filePath.testnameCat
    );
  }

  createReportFormat(filePath: string) {
    let data = reportFormatData.reportFormat();

    cy.task("checkFileExists", filePath).then((bool) => {
      if (!bool) {
        button.clickButton(xpathAssertion.button().add);

        cy.readFile(investigation.labSetup.reportFormat.dept).then((res) => {
          form.getDropdown(xpathAssertion.form().department_id, res.name);
          data.department_id.value = res.name;
        });

        cy.readFile(investigation.labSetup.reportFormat.testname).then(
          (res) => {
            form.getDropdown(xpathAssertion.form().test_name_id, res.name);
            data.test_name_id.value = res.name;
          }
        );

        form.inputField(xpathAssertion.form().name, data.name.value);
        form.getDropdown(xpathAssertion.form().gender, data.gender.value);
        button.clickSwitch(xpathAssertion.form().active, data.active.value);
        button.clickButton(xpathAssertion.button().save);
        alert.alertMessage(xpathAssertion.alert().create);
        cy.writeFile(filePath, data);
      }
    });
  }

  searchReportFormat(filePath: string) {
    cy.readFile(filePath).then((data) => {
      let dat = [
        data.name.value,
        data.department_id.value,
        data.test_name_id.value,
      ];
      form.inputField(xpathAssertion.list().search, data.name.value);
      dat.forEach((item) => {
        tableP.tableBody(xpathAssertion.list().table_td, item);
      });
    });
  }

  viewReportFormat(filePath: string) {
    cy.readFile(filePath).then((data) => {
      form.inputField(xpathAssertion.list().search, data.name.value);
      button.actions(xpathAssertion.list().view);
      commonPageObj.verifySelectDropDown(data.department_id.value);
      commonPageObj.verifySelectDropDown(data.test_name_id.value);
      commonPageObj.verifyInputFieldValue(
        xpathAssertion.form().name,
        data.name.value
      );
    });
  }

  updateReportFormat(filePath: string) {
    let data = reportFormatData.reportFormat();
    cy.readFile(filePath).then((data) => {
      form.inputField(xpathAssertion.list().search, data.name.value);
      button.actions(xpathAssertion.list().update);
    });

    form.inputField(xpathAssertion.form().name, data.name.value);

    button.clickButton(xpathAssertion.button().save);
    alert.alertMessage(xpathAssertion.alert().update);
    cy.writeFile(filePath, data);
  }

  archiveReportFormat(filePath: string) {
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
