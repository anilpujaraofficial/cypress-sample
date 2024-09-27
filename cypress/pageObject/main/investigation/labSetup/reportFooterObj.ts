import { CommonPageObj } from "@pageObject/commonPageObj/commonPageObj";
let commonPageObj = new CommonPageObj();

import Form from "@helpers/utils/form";
import Button from "@helpers/utils/button";
import AlertMessage from "@helpers/utils/alertMessage";
import TablePage from "@helpers/utils/table";
import { Investigation } from "@helpers/faker/lab";
import ReportFooterXpathAssertion from "pages/main/investigation/labSetup/reportFooter";

import { investigation } from "@helpers/filePath/lab";
import { getEnvVariables } from "@support/commands";
import { PatientAdministration, testNameWithPrice } from "@helpers/faker/pa";
import { APIObj } from "@pageObject/apiObj/apiObj";
import { UserManagement } from "@helpers/faker/um";

let form = new Form();
let button = new Button();
let alert = new AlertMessage();
let tableP = new TablePage();
let reportFooterData = new Investigation();
let xpathAssertion = new ReportFooterXpathAssertion();
let umData = new UserManagement();
let paData = new PatientAdministration();
let formXpath = xpathAssertion.form();
let apiObj = new APIObj();
export class ReportFooterObj {
  addDependency(filePath) {
    // create department with API
    apiObj.createAPI(
      getEnvVariables("apiUrl") + "/departments",
      Object.keys(umData.department("PATHO")).reduce((acc, value) => {
        acc[value] = umData.department("PATHO")[value].value;
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

    apiObj.createAPI(
      getEnvVariables("apiUrl") + "/pa/testnames/",
      testNameWithPrice(filePath.dept, filePath.testnameCat).data,
      filePath.testname
    );
    apiObj.departmentWisePrivilege(filePath.dept_id, filePath.dept);
  }
  archiveDependency(filePath) {
    // *delete  test name category with API

    apiObj.deleteAPI(
      getEnvVariables("apiUrl") + "/pa/testnamecategories/",
      filePath.testnameCat
    );
    apiObj.deleteAPI(
      getEnvVariables("apiUrl") + "/pa/testnames/",
      filePath.testname
    );
    apiObj.deleteAPI(
      getEnvVariables("apiUrl") + "/departments/",
      filePath.dept
    );
  }

  createReportFooter(filePath: string) {
    let data = reportFooterData.reportFooter();

    cy.task("checkFileExists", filePath).then((bool) => {
      if (!bool) {
        button.clickButton(xpathAssertion.button().add);

        cy.readFile(investigation.labSetup.reportFooter.dept).then((res) => {
          form.getDropdown(xpathAssertion.form().department_id, res.name);
          data.department.value = res.name;
        });

        cy.readFile(investigation.labSetup.reportFooter.testname).then(
          (res) => {
            form.getDropdown(xpathAssertion.form().test_name_id, res.name);
            data.testname.value = res.name;
          }
        );

        form.getDropdown(
          xpathAssertion.form().footertype_5,
          data.footertype_5.value
        );

        form.getDropdown(
          xpathAssertion.form().userState_5,
          data.userState_5.value
        );

        button.clickButton(xpathAssertion.button().save);
        alert.alertMessage(xpathAssertion.alert().create);
        cy.writeFile(filePath, data);
      }
    });
  }

  searchReportFooter(filePath: string) {
    cy.readFile(filePath).then((data) => {
      let dat = [data.department.value, data.footertype_5.value];
      form.inputField(xpathAssertion.list().search, data.department.value);
      dat.forEach((item) => {
        tableP.tableBody(xpathAssertion.list().table_td, item);
      });
    });
  }

  viewReportFooter(filePath: string) {
    cy.readFile(filePath).then((data) => {
      form.inputField(xpathAssertion.list().search, data.department.value);
      button.actions(xpathAssertion.list().view);
      commonPageObj.verifySelectDropDown(data.department.value);
      commonPageObj.verifySelectDropDown(data.footertype_5.value);
    });
  }

  updateReportFooter(filePath: string) {
    let data = reportFooterData.reportFooter();
    cy.readFile(filePath).then((data) => {
      form.inputField(xpathAssertion.list().search, data.department.value);
      button.actions(xpathAssertion.list().update);
    });

    form.getDropdown(
      xpathAssertion.form().footertype_5,
      data.footertype_5.value
    );

    form.getDropdown(xpathAssertion.form().userState_5, data.userState_5.value);

    button.clickButton(xpathAssertion.button().save);
    alert.alertMessage(xpathAssertion.alert().update);
    cy.writeFile(filePath, data);
  }

  archiveReportFooter(filePath: string) {
    cy.readFile(filePath).then((data) => {
      form.inputField(xpathAssertion.list().search, data.department.value);
      button.archive(
        xpathAssertion.delete_confirm().xpath.ok,
        xpathAssertion.delete_confirm().value.ok
      );
      alert.alertMessage(xpathAssertion.alert().archive);
    });
  }
}
