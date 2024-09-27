import { CommonPageObj } from "@pageObject/commonPageObj/commonPageObj";
import Form from "@helpers/utils/form";
import Button from "@helpers/utils/button";
import AlertMessage from "@helpers/utils/alertMessage";
import TablePage from "@helpers/utils/table";
import { Investigation, test } from "@helpers/faker/lab";
import { investigation } from "@helpers/filePath/lab";
import PickListResultXpathAssertion from "@pages/main/investigation/labSetup/pickListResult";
import { getEnvVariables } from "@support/commands";
import { PatientAdministration, testNameWithPrice } from "@helpers/faker/pa";
import { UserManagement } from "@helpers/faker/um";
import { APIObj } from "@pageObject/apiObj/apiObj";
let commonPageObj = new CommonPageObj();

let form = new Form();
let button = new Button();
let alert = new AlertMessage();
let tableP = new TablePage();
let pickListResultData = new Investigation();
let xpathAssertion = new PickListResultXpathAssertion();
let umData = new UserManagement();
let paData = new PatientAdministration();
let apiObj = new APIObj();

export class PickListResultObj {
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
      getEnvVariables("apiUrl") + "/pa/testnames/",
      testNameWithPrice(filePath.dept, filePath.testnameCat).data,
      filePath.testname
    );
    // departemtn wise privilege
    apiObj.departmentWisePrivilege(filePath.dept_id, filePath.dept);
    // create test  with API
    apiObj.createAPI(
      getEnvVariables("apiUrl") + "/labs/tests",
      test(filePath.dept, filePath.testname, "numeric").data,
      filePath.test
    );
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

  /**
   *
   * @param filePath
   */
  createPickListResult(filePath: string) {
    let data = pickListResultData.pickListResult();

    cy.task("checkFileExists", filePath).then((bool) => {
      if (!bool) {
        button.clickButton(xpathAssertion.button().add);

        cy.readFile(investigation.labSetup.pickListResult.dept).then((res) => {
          form.getDropdown(xpathAssertion.form().department, res.name);
          data.department.value = res.name;
        });

        cy.readFile(investigation.labSetup.pickListResult.testname).then(
          (res) => {
            form.getDropdown(xpathAssertion.form().test_name, res.name);
            data.test_name.value = res.name;
          }
        );
        cy.readFile(investigation.labSetup.pickListResult.test).then((res) => {
          form.getDropdown(xpathAssertion.form().test, res.name);
          data.test.value = res.name;
        });

        form.inputField(xpathAssertion.form().name, data.name.value);
        button.clickSwitch(xpathAssertion.form().active, data.active.value);

        button.clickButton(xpathAssertion.button().save);
        alert.alertMessage(xpathAssertion.alert().create);
        cy.writeFile(filePath, data);
      }
    });
  }
  /**
   *
   * @param filePath
   */
  searchPickListResult(filePath: string) {
    cy.readFile(filePath).then((data) => {
      let dat = [data.name.value, data.department.value, data.test_name.value];
      form.inputField(xpathAssertion.list().search, data.name.value);
      dat.forEach((item) => {
        tableP.tableBody(xpathAssertion.list().table_td, item);
      });
    });
  }
  /**
   *
   * @param filePath
   */
  viewPickListResult(filePath: string) {
    cy.readFile(filePath).then((data) => {
      form.inputField(xpathAssertion.list().search, data.name.value);
      button.actions(xpathAssertion.list().view);
      commonPageObj.verifySelectDropDown(data.department.value);
      commonPageObj.verifySelectDropDown(data.test_name.value);
      commonPageObj.verifySelectDropDown(data.test.value);
      commonPageObj.verifyInputFieldValue(
        xpathAssertion.form().name,
        data.name.value
      );
    });
  }
  /**
   *
   * @param filePath
   */
  updatePickListResult(filePath: string) {
    let data = pickListResultData.pickListResult();
    cy.readFile(filePath).then((data) => {
      form.inputField(xpathAssertion.list().search, data.name.value);
      button.actions(xpathAssertion.list().update);
    });

    form.inputField(xpathAssertion.form().name, data.name.value);

    button.clickButton(xpathAssertion.button().save);
    alert.alertMessage(xpathAssertion.alert().update);
    cy.writeFile(filePath, data);
  }
  /**
   *
   * @param filePath
   */
  archivePickListResult(filePath: string) {
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
