import { UserManagement } from "@helpers/faker/um";
import AlertMessage from "@helpers/utils/alertMessage";
import Button from "@helpers/utils/button";
import Form from "@helpers/utils/form";
import TablePage from "@helpers/utils/table";
import { APIObj } from "@pageObject/apiObj/apiObj";
import { CommonPageObj } from "@pageObject/commonPageObj/commonPageObj";
import UserSelectors from "@pages/main/userManagment/userSetup/user";
import { getEnvVariables } from "@support/commands";

// initialization
let form = new Form();
let commonPage = new CommonPageObj();
let button = new Button();
let alert = new AlertMessage();
let table = new TablePage();
let userSelector = new UserSelectors();
let data = new UserManagement().user();
let apiData = new UserManagement();
let apiObj = new APIObj();

class UserObj {
  addDependency(filePath) {
    // create department with API
    apiObj.createAPI(
      getEnvVariables("apiUrl") + "/departments",
      Object.keys(apiData.department("PATHO")).reduce((acc, value) => {
        acc[value] = apiData.department("PATHO")[value].value;
        return acc;
      }, {}),
      filePath.department
    );

    // create role with API
    apiObj.createAPI(
      getEnvVariables("apiUrl") + "/roles",
      Object.keys(apiData.role()).reduce((acc, value) => {
        acc[value] = apiData.role()[value].value;
        return acc;
      }, {}),
      filePath.role
    );
  }

  archiveDependency(filePath) {
    // delete created department
    apiObj.deleteAPI(
      getEnvVariables("apiUrl") + "/departments/",
      filePath.department
    );

    // delete created role
    apiObj.deleteAPI(getEnvVariables("apiUrl") + "/roles/", filePath.role);
  }
  // Method to create user
  createUser(filePath: any) {
    // update data
    cy.readFile(filePath.role).then((role) => {
      data.role.value = role.name;
    });
    cy.readFile(filePath.department).then((dep) => {
      data.department.value = dep.name;
    });

    cy.task("checkFileExists", filePath.user).then((bool) => {
      if (!bool) {
        button.clickButton(userSelector.button().add);

        for (let key in data) {
          switch (data[key].type) {
            case "input":
              form.inputField(userSelector.form(key), data[key].value);
              break;
            default:
              button.clickCheckboxIfUnchecked(data[key].value);
              break;
          }
        }

        button.clickButton(userSelector.button().save);
        cy.writeFile(filePath.user, data);
        alert.alertMessage(userSelector.alert().create);
      }
    });
  }

  // Method to search created user
  searchUser(filePath: string) {
    cy.readFile(filePath).then((data) => {
      let userData = [data.name.value];
      form.inputField(userSelector.list().search, userData[0]);
      userData.forEach((item) => {
        table.tableBody(userSelector.list().table_td, item);
      });
    });
  }

  // Method to view created user
  viewUser(filePath: string) {
    cy.readFile(filePath).then((data) => {
      let userData = [data.name.value];

      // use another object to store required keys only
      let dat = {
        name: data.name,
        email: data.email,
        department: data.department,
        role: data.role,
      };

      form.inputField(userSelector.list().search, userData[0]);
      button.actions(userSelector.list().view);

      for (let key in dat) {
        switch (dat[key].type) {
          case "input":
            commonPage.verifyInputFieldValue(
              userSelector.form(key),
              dat[key].value
            );
            break;
          default:
            commonPage.validateCheckboxStatus(data[key].value, true);
            break;
        }
      }
    });
  }

  // Method to update created user
  updateUser(filePath: string) {
    cy.readFile(filePath).then((data) => {
      let userData = [data.name.value];

      // use another object to store required keys only
      let dat = {
        name: data.name,
        email: data.email,
        department: data.department,
      };

      form.inputField(userSelector.list().search, userData[0]);
      button.actions(userSelector.list().update);

      for (let key in dat) {
        switch (dat[key].type) {
          case "input":
            form.inputField(userSelector.form(key), dat[key].value);
            break;
          default:
            button.clickCheckboxIfUnchecked(dat[key].value);
            break;
        }
      }

      button.clickButton(userSelector.button().save);
      alert.alertMessage(userSelector.alert().update);
      cy.writeFile(filePath, data);
    });
  }

  // Method to archive created user
  archiveUser(filePath: string) {
    cy.readFile(filePath).then((data) => {
      let userData = [data.name.value];
      form.inputField(userSelector.list().search, userData[0]);
      button.archive(
        userSelector.delete_confirm().xpath.ok,
        userSelector.delete_confirm().value.ok
      );
      alert.alertMessage(userSelector.alert().archive);
    });
  }
}

export default UserObj;
