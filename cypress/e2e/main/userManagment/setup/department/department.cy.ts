import DepartmentObj from "@pageObject/main/userManagment/setup/departmentObj";
import { gotoMenuSubMenuFeatureSubFeature as sidebarNavigation } from "@support/commands";
import { userManagment } from "@helpers/filePath/um";

describe(
  "User Management > Setup > Department",
  { tags: ["@umSetup", "@um"] },
  () => {
    const department = new DepartmentObj();
    const filePath = userManagment.setup.department;
    before(() => {
      Cypress.session.clearAllSavedSessions();
      cy.rmDir(filePath.department_dir);
    });

    beforeEach(() => {
      cy.adminLogin();
      sidebarNavigation(["User Management", "Setup", "Department"]);
    });

    it("Validate that a user is able to create department", () => {
      department.createDepartment(filePath.department);
    });
    it("Validate that a user is able to search department", () => {
      department.searchDepartment(filePath.department);
    });
    it("Validate that a user is able to view department", () => {
      department.viewDepartment(filePath.department);
    });
    it("Validate that a user is able to update department", () => {
      department.updateDepartment(filePath.department);
    });
    it("Validate that a user is able to archive department", () => {
      department.archiveDepartment(filePath.department);
    });
  }
);
