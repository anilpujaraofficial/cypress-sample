import designationObj from "@pageObject/main/userManagment/setup/designationObj";
import { gotoMenuSubMenuFeatureSubFeature as sidebarNavigation } from "@support/commands";
import { userManagment } from "@helpers/filePath/um";

describe(
  "User Management > Setup > Designation",
  { tags: ["@umSetup", "@um"] },
  () => {
    const designation = new designationObj();
    const filePath = userManagment.setup.designation;
    before(() => {
      Cypress.session.clearAllSavedSessions();
      cy.rmDir(filePath.designation_dir);
    });

    beforeEach(() => {
      cy.adminLogin();
      sidebarNavigation(["User Management", "Setup", "Designation"]);
    });

    it("Validate that a user is able to create designation", () => {
      designation.createDesignation(filePath.designation);
    });
    it("Validate that a user is able to search designation", () => {
      designation.searchDesignation(filePath.designation);
    });
    it("Validate that a user is able to view designation", () => {
      designation.viewDesignation(filePath.designation);
    });
    it("Validate that a user is able to update designation", () => {
      designation.updateDesignation(filePath.designation);
    });
    it("Validate that a user is able to archive designation", () => {
      designation.archiveDesignation(filePath.designation);
    });
  }
);
