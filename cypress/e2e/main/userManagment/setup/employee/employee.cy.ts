import { gotoMenuSubMenuFeatureSubFeature as sidebarNavigation } from "@support/commands";
import { userManagment } from "@helpers/filePath/um";
import employeeObj from "@pageObject/main/userManagment/setup/employeeObj";

const employee = new employeeObj();
const filePath = userManagment.setup.employee;

describe(
  "User Management > Setup > Designation",
  { tags: ["@umSetup", "@um"] },
  () => {
    before(() => {
      Cypress.session.clearAllSavedSessions();
      cy.rmDir(filePath.employee_dir);
      employee.addDependency(filePath);
    });

    beforeEach(() => {
      cy.adminLogin();
      sidebarNavigation(["User Management", "Setup", "Employee"]);
    });

    after(() => {
      employee.archiveDependency(filePath);
    });

    it("Validate that a user is able to create Employee", () => {
      employee.createEmployee(filePath);
    });

    it("Validate that a user is able to search Employee", () => {
      employee.searchEmployee(filePath.employee);
    });

    it("Validate that a user is able to view Employee", () => {
      employee.viewEmployee(filePath.employee);
    });

    it("Validate that a user is able to update Employee", () => {
      employee.updateEmployee(filePath.employee);
    });

    it("Validate that a user is able to archive Employee", () => {
      employee.archiveEmployee(filePath.employee);
    });
  }
);
