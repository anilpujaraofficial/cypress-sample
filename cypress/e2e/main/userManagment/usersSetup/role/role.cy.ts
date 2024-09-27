import { gotoMenuSubMenuFeatureSubFeature as sidebarNavigation } from "@support/commands";
import { userManagment } from "@helpers/filePath/um";
import RoleObj from "@pageObject/main/userManagment/userSetup/roleObj";
const role = new RoleObj();
const filePath = userManagment.userSetup.role;
describe(
  "User Management > User Setup > Role",
  { tags: ["@umSetup", "@um"] },
  () => {
    before(() => {
      Cypress.session.clearAllSavedSessions();
      cy.rmDir(filePath.role_dir);
    });

    beforeEach(() => {
      cy.adminLogin();
      sidebarNavigation(["User Management", "User Setup", "Role"]);
    });

    it("Validate that a user is able to create Role", () => {
      role.createRole(filePath.role);
    });
    it("Validate that a user is able to search Role", () => {
      role.searchRole(filePath.role);
    });
    it("Validate that a user is able to view Role", () => {
      role.viewRole(filePath.role);
    });
    it("Validate that a user is able to update Role", () => {
      role.updateRole(filePath.role);
    });
    it("Validate that a user is able to archive Role", () => {
      role.archiveRole(filePath.role);
    });
  }
);
