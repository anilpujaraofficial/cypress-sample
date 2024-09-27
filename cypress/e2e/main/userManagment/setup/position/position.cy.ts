import { gotoMenuSubMenuFeatureSubFeature as sidebarNavigation } from "@support/commands";
import { userManagment } from "@helpers/filePath/um";
import positionObj from "@pageObject/main/userManagment/setup/positionObj";

describe(
  "User Management > Setup > Designation",
  { tags: ["@umSetup", "@um"] },
  () => {
    const position = new positionObj();
    const filePath = userManagment.setup.position;

    //  before(() => {
    Cypress.session.clearAllSavedSessions();
    //   cy.rmDir(filePath.position_dir);
    // });

    beforeEach(() => {
      cy.adminLogin();
      sidebarNavigation(["User Management", "Setup", "Position"]);
    });

    it("Validate that a user is able to create Position", () => {
      position.createPosition(filePath.position);
    });
    it("Validate that a user is able to search Position", () => {
      position.searchPosition(filePath.position);
    });
    it("Validate that a user is able to view Position", () => {
      position.viewPosition(filePath.position);
    });
    it("Validate that a user is able to update Position", () => {
      position.updatePosition(filePath.position);
    });
    it("Validate that a user is able to archive Position", () => {
      position.archivePosition(filePath.position);
    });
  }
);
