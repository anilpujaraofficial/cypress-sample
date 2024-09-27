import { CommonPageObj } from "@pageObject/commonPageObj/commonPageObj";
import Form from "@helpers/utils/form";
import Button from "@helpers/utils/button";
import AlertMessage from "@helpers/utils/alertMessage";
import TablePage from "@helpers/utils/table";
import { Investigation } from "@helpers/faker/lab";
import { LabTemplateXpathAssertion } from "@pages/main/investigation/labSetup/labTemplate";
import { getEnvVariables } from "@support/commands";
import { PatientAdministration, testNameWithPrice } from "@helpers/faker/pa";
import { APIObj } from "@pageObject/apiObj/apiObj";
import { UserManagement } from "@helpers/faker/um";

let form = new Form();
let button = new Button();
let alert = new AlertMessage();
let tableP = new TablePage();
let labData = new Investigation();
let xpathAssertion = new LabTemplateXpathAssertion();
let commonPageObj = new CommonPageObj();
let apiObj = new APIObj();
let umData = new UserManagement();
let paData = new PatientAdministration();
export class LabTemplateObj {
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
   * @param testname filepath
   * @param dept
   */
  searchLabTemplate(testname, dept) {
    cy.readFile(testname).then((testname) => {
      cy.readFile(dept).then((dept) => {
        let dat = [testname.name, dept.name];
        form.inputField(xpathAssertion.list().search, testname.name);
        dat.forEach((item) => {
          tableP.tableBody(xpathAssertion.list().table_td, item);
        });
      });
    });
  }
  /**
   *
   * @param testname
   * @param dept
   */
  addParameter(testname, dept, test) {
    let data = labData.test();
    cy.readFile(testname).then((testname) => {
      cy.readFile(dept).then((dept) => {
        form.inputField(xpathAssertion.list().search, testname.name);

        button.clickWithContain(xpathAssertion.list().testname, testname.name);

        commonPageObj.verifySelectDropDown(dept.name);
        commonPageObj.verifySelectDropDown(testname.name);
        button.clickButton(xpathAssertion.button().add);
        commonPageObj.verifyInputFieldValue(
          xpathAssertion.form("result_type").name,
          testname.name
        );

        for (const key in data) {
          switch (data[key].type) {
            case "input":
              form.inputField(
                xpathAssertion.form("numeric")[key],
                data[key].value
              );
              break;
            case "dropdown":
              cy.get(xpathAssertion.form("numeric").gender).click();
              cy.get(`div[title='Both']`).click();
              data.gender.value = "Both";
              break;
            case "textarea":
              form.inputField(
                xpathAssertion.form("numeric")[key],
                data[key].value
              );
              break;
          }
        }

        button.clickButton(xpathAssertion.button().save);
        alert.alertMessage(xpathAssertion.alert().update);
        cy.writeFile(test, data);
      });
    });
  }
  addOpions(testname, dept, option) {
    let data = labData.option();
    cy.readFile(testname).then((testname) => {
      cy.readFile(dept).then((dept) => {
        form.inputField(xpathAssertion.list().search, testname.name);
        button.clickWithContain(xpathAssertion.list().testname, testname.name);
        button.clickWithContain(
          xpathAssertion.tab().tab,
          xpathAssertion.tab().option
        );
        for (const key in data) {
          switch (data[key].type) {
            case "input":
              form.inputField(xpathAssertion.option()[key], data[key].value);
              break;
            case "textarea":
              form.inputField(xpathAssertion.option()[key], data[key].value);
              break;
          }
        }

        button.clickButton(xpathAssertion.button().option_save);
        cy.writeFile(option, data);
      });
    });
  }
  endnote(testname, dept, endnote) {
    let data = labData.endnote();
    cy.readFile(testname).then((testname) => {
      cy.readFile(dept).then((dept) => {
        form.inputField(xpathAssertion.list().search, testname.name);
        button.clickWithContain(xpathAssertion.list().testname, testname.name);
        button.clickButton(xpathAssertion.button().endnote);
        button.clickWithContain(
          xpathAssertion.tab().tab,
          xpathAssertion.tab().EndNote
        );
        button.clickButton(xpathAssertion.button().endnote_add);
        form.inputField(
          xpathAssertion.endnote().abbreviation,
          data.abbreviation.value
        );
        data.endnote.value = data.endnote.value;
        form.CKeditorInput(data.endnote.value);
        button.clickButton(xpathAssertion.button().endnote_save);
        alert.alertMessage(xpathAssertion.alert().endnote_add);
        cy.writeFile(endnote, data);
      });
    });
  }
}
