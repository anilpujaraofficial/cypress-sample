import { CommonPageObj } from "@pageObject/commonPageObj/commonPageObj";

import Form from "@helpers/utils/form";
import Button from "@helpers/utils/button";
import AlertMessage from "@helpers/utils/alertMessage";
import TablePage from "@helpers/utils/table";
import { Investigation } from "@helpers/faker/lab";
import EndnoteXpathAssertion from "pages/main/investigation/labSetup/endnote";

import { investigation } from "@helpers/filePath/lab";
import { getEnvVariables } from "@support/commands";
import { APIObj } from "@pageObject/apiObj/apiObj";
import { UserManagement } from "@helpers/faker/um";
import { PatientAdministration, testNameWithPrice } from "@helpers/faker/pa";
let commonPageObj = new CommonPageObj();

let form = new Form();
let button = new Button();
let alert = new AlertMessage();
let tableP = new TablePage();
let endnoteData = new Investigation();
let xpathAssertion = new EndnoteXpathAssertion();
let umData = new UserManagement();
let paData = new PatientAdministration();

let apiObj = new APIObj();
export class EndnoteObj {
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

    // create test name with API
    apiObj.createAPI(
      getEnvVariables("apiUrl") + "/pa/testnames",
      testNameWithPrice(filePath.dept, filePath.testnameCat).data,
      filePath.testname
    );
    // departemtn wise privilege
    apiObj.departmentWisePrivilege(filePath.dept_id, filePath.dept);
  }
  archiveDependency(filePath) {
    // *delete  test name category with API

    apiObj.deleteAPI(
      getEnvVariables("apiUrl") + "/pa/testnamecategories/",
      filePath.testnameCat
    );
    // *delete  test name  with API

    apiObj.deleteAPI(
      getEnvVariables("apiUrl") + "/pa/testnames/",
      filePath.testname
    );
    // *delete  department with API

    apiObj.deleteAPI(
      getEnvVariables("apiUrl") + "/departments/",
      filePath.dept
    );
  }

  createEndnote(filePath: string) {
    let data = endnoteData.endnote();

    cy.task("checkFileExists", filePath).then((bool) => {
      if (!bool) {
        button.clickButton(xpathAssertion.button().add);

        cy.readFile(investigation.labSetup.endnote.dept).then((res) => {
          form.getDropdown(xpathAssertion.form().department_id, res.name);
          data.department.value = res.name;
        });

        cy.readFile(investigation.labSetup.endnote.testname).then((res) => {
          form.getDropdown(xpathAssertion.form().test_name_id, res.name);
          data.testname.value = res.name;
        });
        form.inputField(
          xpathAssertion.form().abbreviation,
          data.abbreviation.value
        );
        data.endnote.value = data.endnote.value;
        form.CKeditorInput(data.endnote.value);

        button.clickButton(xpathAssertion.button().save);
        alert.alertMessage(xpathAssertion.alert().create);
        cy.writeFile(filePath, data);
      }
    });
  }

  searchEndnote(filePath: string) {
    cy.readFile(filePath).then((data) => {
      let dat = [data.abbreviation.value];
      form.inputField(xpathAssertion.list().search, data.abbreviation.value);
      dat.forEach((item) => {
        tableP.tableBody(xpathAssertion.list().table_td, item);
      });
    });
  }

  viewEndnote(filePath: string) {
    cy.readFile(filePath).then((data) => {
      form.inputField(xpathAssertion.list().search, data.abbreviation.value);
      button.actions(xpathAssertion.list().view);
      commonPageObj.verifyInputFieldValue(
        xpathAssertion.form().abbreviation,
        data.abbreviation.value
      );
      commonPageObj.verifySelectDropDown(data.department.value);
      commonPageObj.verifySelectDropDown(data.testname.value);
      commonPageObj.verifyCKeditorValue(data.endnote.value);
    });
  }

  updateEndnote(filePath: string) {
    let data = endnoteData.endnote();
    cy.readFile(filePath).then((data) => {
      form.inputField(xpathAssertion.list().search, data.abbreviation.value);
      button.actions(xpathAssertion.list().update);
    });
    form.inputField(
      xpathAssertion.form().abbreviation,
      data.abbreviation.value
    );
    data.endnote.value = data.endnote.value;
    form.CKeditorInput(data.endnote.value);
    button.clickButton(xpathAssertion.button().save);
    alert.alertMessage(xpathAssertion.alert().update);
    cy.writeFile(filePath, data);
  }

  archiveEndnote(filePath: string) {
    cy.readFile(filePath).then((data) => {
      form.inputField(xpathAssertion.list().search, data.abbreviation.value);
      button.archive(
        xpathAssertion.delete_confirm().xpath.ok,
        xpathAssertion.delete_confirm().value.ok
      );
      alert.alertMessage(xpathAssertion.alert().archive);
    });
  }
}
