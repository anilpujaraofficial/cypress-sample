import { UserManagement } from "@helpers/faker/um";
import { investigation } from "@helpers/filePath/lab";

import { getEnvVariables } from "@support/commands";
import { gotoMenuSubMenuFeatureSubFeature as navigation } from "@support/commands";
import { APIObj } from "@pageObject/apiObj/apiObj";
import { DepartmentObj } from "@pageObject/main/investigation/labSetup/departmentObj";

const filePath = investigation.labSetup.dept;
const apiData = new UserManagement();
const apiObj = new APIObj();
const deptObj = new DepartmentObj();
describe(
  "Investigation > Lab Setup > Department",
  { tags: ["@labSetup", "@lab"] },
  () => {
    before(() => {
      Cypress.session.clearAllSavedSessions();
      cy.rmDir(filePath.dept_dir);
      deptObj.addDependency(filePath);
    });
    beforeEach(() => {
      cy.adminLogin();
      navigation(["Investigation", "Lab Setup", "Department"]);
    });
    after(() => {
      deptObj.archiveDependency(filePath);
    });
    it("To validate that a user is able to search department", () => {
      deptObj.searchDepartment(filePath.um_dept);
    });

    it("To validate that a user is able to edit  department", () => {
      deptObj.updateDepartment(filePath.um_dept, filePath.lab_dept);
    });
    it("To validate that a user is able to view department", () => {
      deptObj.viewDepartment(filePath.um_dept, filePath.lab_dept);
    });
  }
);
