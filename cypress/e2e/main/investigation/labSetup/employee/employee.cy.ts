import { investigation } from "@helpers/filePath/lab";
import { gotoMenuSubMenuFeatureSubFeature as navigation } from "@support/commands";
import { EmployeeObj } from "@pageObject/main/investigation/labSetup/employeeObj";
const filePath = investigation.labSetup.emp;
const empObj = new EmployeeObj();
describe(
  "Investigation > Lab Setup > Employee",
  { tags: ["@labSetup", "@lab"] },
  () => {
    before(() => {
      Cypress.session.clearAllSavedSessions();
      cy.rmDir(filePath.emp_dir);
      empObj.addDependency(filePath);
    });
    beforeEach(() => {
      cy.adminLogin();
      navigation(["Investigation", "Lab Setup", "Employee"]);
    });
    after(() => {
      empObj.archiveDependency(filePath);
    });
    it("To validate that a user is able to search department", () => {
      empObj.searchEmployee(filePath.um_emp);
    });

    it("To validate that a user is able to edit  department", () => {
      empObj.updateEmployee(filePath.um_emp, filePath.lab_emp);
    });
    it("To validate that a user is able to view department", () => {
      empObj.viewEmployee(filePath.um_emp, filePath.lab_emp);
    });
  }
);
