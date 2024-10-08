import { UserManagement } from "@helpers/faker/um";
import DepartmentSelectors from "pages/main/userManagment/setup/department";
import AlertMessage from "@helpers/utils/alertMessage";
import Button from "@helpers/utils/button";
import Form from "@helpers/utils/form";
import TablePage from "@helpers/utils/table";
import { CommonPageObj } from "@pageObject/commonPageObj/commonPageObj";

// initialization
let form = new Form();
let commonPage = new CommonPageObj();
let button = new Button();
let alert = new AlertMessage();
let table = new TablePage();
let departmentSelector = new DepartmentSelectors();
let data = new UserManagement().department("PATHO");

class DepartmentObj {
  // Method to create department
  createDepartment(filePath: string) {
    cy.task("checkFileExists", filePath).then((bool) => {
      if (!bool) {
        button.clickButton(departmentSelector.button().add);
        const promises = [];
        let generatedCode: any;
        for (let key in data) {
          switch (data[key].type) {
            case "switch":
              button.clickSwitch(departmentSelector.form(key), data[key].value);
              break;
            case "autogenerated":
              const promise = form
                .getData(departmentSelector.form(key))
                .then((data) => {
                  generatedCode = data;
                });
              promises.push(promise);
              break;
            case "dropdown":
              form.getDropdown(departmentSelector.form(key), data[key].value);
              break;
            default:
              form.inputField(departmentSelector.form(key), data[key].value);
              break;
          }
        }
        button.clickButton(departmentSelector.button().save);
        cy.wrap(Promise.all(promises)).then(() => {
          cy.writeFile(filePath, {
            ...data,
            code: {
              type: "input",
              value: generatedCode,
            },
          });
        });
        alert.alertMessage(departmentSelector.alert().create);
      }
    });
  }

  // Method to search created department
  searchDepartment(filePath: string) {
    cy.readFile(filePath).then((data) => {
      let departmentData = [data.name.value];
      form.inputField(departmentSelector.list().search, departmentData[0]);
      departmentData.forEach((item) => {
        table.tableBody(departmentSelector.list().table_td, item);
      });
    });
  }

  // Method to view created department
  viewDepartment(filePath: string) {
    cy.readFile(filePath).then((data) => {
      let departmentData = [data.name.value];
      form.inputField(departmentSelector.list().search, departmentData[0]);
      button.actions(departmentSelector.list().view);

      for (let key in data) {
        switch (data[key].type) {
          case "switch":
            commonPage.verifyCheckUncheck(
              departmentSelector.form(key),
              data[key].value
            );
            break;
          case "autogenerated":
            commonPage.verifyInputFieldValue(
              departmentSelector.form(key),
              data[key].value
            );
            break;
          case "dropdown":
            commonPage.verifySelectDropDown(data[key].value);
            break;
          default:
            commonPage.verifyInputFieldValue(
              departmentSelector.form(key),
              data[key].value.toString()
            );
            break;
        }
      }
    });
  }

  // Method to update created department
  updateDepartment(filePath: string) {
    cy.readFile(filePath).then((data) => {
      let departmentData = [data.name.value];
      form.inputField(departmentSelector.list().search, departmentData[0]);
      button.actions(departmentSelector.list().update);

      for (let key in data) {
        switch (data[key].type) {
          case "switch":
            button.clickSwitch(departmentSelector.form(key), data[key].value);
            break;
          case "autogenerated":
            break;
          case "dropdown":
            form.getDropdown(departmentSelector.form(key), data[key].value);
            break;
          default:
            form.inputField(departmentSelector.form(key), data[key].value);
            break;
        }
      }
      button.clickButton(departmentSelector.button().save);
      alert.alertMessage(departmentSelector.alert().update);
      cy.writeFile(filePath, data);
    });
  }
  // Method to archive created department
  archiveDepartment(filePath: string) {
    cy.readFile(filePath).then((data) => {
      let departmentData = [data.name.value];
      form.inputField(departmentSelector.list().search, departmentData[0]);
      button.archive(
        departmentSelector.delete_confirm().xpath.ok,
        departmentSelector.delete_confirm().value.ok
      );
      alert.alertMessage(departmentSelector.alert().archive);
    });
  }
}

export default DepartmentObj;
