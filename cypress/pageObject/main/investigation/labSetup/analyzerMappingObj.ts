import { CommonPageObj } from "@pageObject/commonPageObj/commonPageObj";
import Form from "@helpers/utils/form";
import Button from "@helpers/utils/button";
import AlertMessage from "@helpers/utils/alertMessage";
import TablePage from "@helpers/utils/table";
import { Investigation, test } from "@helpers/faker/lab";
import { investigation } from "@helpers/filePath/lab";
import AnalyzerMappingXpathAssertion from "@pages/main/investigation/labSetup/analyzerMapping";
import { UserManagement } from "@helpers/faker/um";
import { APIObj } from "@pageObject/apiObj/apiObj";
import { getEnvVariables } from "@support/commands";
import { PatientAdministration, testNameWithPrice } from "@helpers/faker/pa";
let commonPageObj = new CommonPageObj();

let form = new Form();
let button = new Button();
let alert = new AlertMessage();
let tableP = new TablePage();
let analyzerMappingData = new Investigation();
let xpathAssertion = new AnalyzerMappingXpathAssertion();
let apiObj = new APIObj();
let umData = new UserManagement();
let paData = new PatientAdministration();

export class AnalyzerMappingObj {
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
    
    // create 	Analyzer with API
    apiObj.createAPI(
      getEnvVariables("apiUrl") + "/labs/analyzers",
      Object.keys(analyzerMappingData.analyzer()).reduce((acc, value) => {
        acc[value] = analyzerMappingData.analyzer()[value].value;
        return acc;
      }, {}),
      filePath.analyzer
    );
    // create 	Analyte Code with API
    apiObj.createAPI(
      getEnvVariables("apiUrl") + "/labs/setup/analyte-code",
      Object.keys(analyzerMappingData.analyteCode()).reduce((acc, value) => {
        acc[value] = analyzerMappingData.analyteCode()[value].value;
        return acc;
      }, {}),
      filePath.analyteCode
    );
  }
  archiveDependency(filePath) {
    // *delete  department with API
    apiObj.deleteAPI(
      getEnvVariables("apiUrl") + "/departments/",
      filePath.dept
    );
    // *delete  test name category with API

    apiObj.deleteAPI(
      getEnvVariables("apiUrl") + "/pa/testnamecategories/",
      filePath.testnameCat
    );
    // *delete  test name with API
    apiObj.deleteAPI(
      getEnvVariables("apiUrl") + "/pa/testnames/",
      filePath.testname
    );
    // *delete  analyzer with API
    apiObj.deleteAPI(
      getEnvVariables("apiUrl") + "/labs/analyzers/",
      filePath.analyzer
    );
    // *delete Analyte Code with API
    apiObj.deleteAPI(
      getEnvVariables("apiUrl") + "/labs/setup/analyte-code/",
      filePath.analyteCode
    );
  }

  /**
   *
   * @param filePath
   */
  createAnalyzerMapping(filePath: string) {
    let data = analyzerMappingData.analyzerMapping();

    cy.task("checkFileExists", filePath).then((bool) => {
      if (!bool) {
        button.clickButton(xpathAssertion.button().add);

        cy.readFile(investigation.labSetup.analyzerMapping.dept).then((res) => {
          form.getDropdown(xpathAssertion.form().department, res.name);
          data.department.value = res.name;
        });

        cy.readFile(investigation.labSetup.analyzerMapping.testname).then(
          (res) => {
            form.getDropdown(xpathAssertion.form().test_name, res.name);
            data.testname.value = res.name;
          }
        );
        cy.readFile(investigation.labSetup.analyzerMapping.test).then((res) => {
          form.getDropdown(xpathAssertion.form().test, res.name);
          data.test.value = res.name;
        });

        button.clickButton(xpathAssertion.button().add_child);

        cy.readFile(investigation.labSetup.analyzerMapping.analyteCode).then(
          (res) => {
            form.getDropdown(xpathAssertion.form().analyte, res.analyte_code);
            data.analyteCode.value = res.analyte_code;
          }
        );
        cy.readFile(investigation.labSetup.analyzerMapping.analyzer).then(
          (res) => {
            form.getDropdown(xpathAssertion.form().azer1, res.name);
            data.analyzer.value = res.name;
          }
        );
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
  searchAnalyzerMapping(filePath: string) {
    cy.readFile(filePath).then((data) => {
      let dat = [
        data.department.value,
        data.testname.value,
        data.test.value,
        data.analyzer.value,
        data.analyteCode.value,
      ];

      form.inputField(xpathAssertion.list().search, data.analyteCode.value);
      dat.forEach((item) => {
        tableP.tableBody(xpathAssertion.list().table_td, item);
      });
    });
  }
  /**
   *
   * @param filePath
   */
  viewAnalyzerMapping(filePath: string) {
    cy.readFile(filePath).then((data) => {
      form.inputField(xpathAssertion.list().search, data.analyteCode.value);
      button.actions(xpathAssertion.list().view);
      for (const key in data) {
        commonPageObj.verifySelectDropDown(data[key].value);
      }
    });
  }
  /**
   *
   * @param filePath
   */
  updateAnalyzerMapping(filePath: string) {
    cy.readFile(filePath).then((data) => {
      form.inputField(xpathAssertion.list().search, data.analyteCode.value);
      button.actions(xpathAssertion.list().update);
    });

    button.clickButton(xpathAssertion.button().save);
    alert.alertMessage(xpathAssertion.alert().update);
  }
  /**
   *
   * @param filePath
   */
  archiveAnalyzerMapping(filePath: string) {
    cy.readFile(filePath).then((data) => {
      form.inputField(xpathAssertion.list().search, data.analyteCode.value);
      button.archive(
        xpathAssertion.delete_confirm().xpath.ok,
        xpathAssertion.delete_confirm().value.ok
      );
      alert.alertMessage(xpathAssertion.alert().archive);
    });
  }
}
