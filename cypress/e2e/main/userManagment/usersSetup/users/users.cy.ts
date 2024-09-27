import {
  getEnvVariables,
  gotoMenuSubMenuFeatureSubFeature as sidebarNavigation,
} from "@support/commands";
import { userManagment } from "@helpers/filePath/um";
import { APIObj } from "@pageObject/apiObj/apiObj";
import { UserManagement } from "@helpers/faker/um";
import UserObj from "@pageObject/main/userManagment/userSetup/userObj";
const user = new UserObj();
const filePath = userManagment.userSetup.user;
const apiObj = new APIObj();

describe(
  "User Management > User Setup > User",
  { tags: ["@umSetup", "@um"] },
  () => {
    before(() => {
      Cypress.session.clearAllSavedSessions();
      cy.rmDir(filePath.user_dir);
      user.addDependency(filePath);
    });

    beforeEach(() => {
      cy.adminLogin();
      sidebarNavigation(["User Management", "User Setup", "User"]);
    });

    after(() => {
      user.archiveDependency(filePath);
    });

    it("Validate that a user is able to create User", () => {
      user.createUser(filePath);
    });

    it("Validate that a user is able to search User", () => {
      user.searchUser(filePath.user);
    });

    it("Validate that a user is able to view User", () => {
      user.viewUser(filePath.user);
    });

    it("Validate that a user is able to update User", () => {
      user.updateUser(filePath.user);
    });

    it("Validate that a user is able to archive User", () => {
      user.archiveUser(filePath.user);
    });
  }
);
