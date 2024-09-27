import { patientAdministration } from "@helpers/filePath/pa";
import { PositionObj } from "@pageObject/main/patientAdministration/patientSetup/positionObj";
import { gotoMenuSubMenuFeatureSubFeature as navigation } from "@support/commands";
const filePath = patientAdministration.patientSetup;

const positionObj = new PositionObj();
describe(
  "Patient Administration > Patient Setup > Position",
  { tags: ["@patientSetup", "@pa"] },
  () => {
    before(() => {
      Cypress.session.clearAllSavedSessions();
      cy.rmDir(filePath.position_dir);
    });

    beforeEach(() => {
      cy.adminLogin();
      navigation(["Patient Administration", "Patient Setup", "Position"]);
    });

    it("To validate that a user is able to create position", () => {
      positionObj.create_position(filePath.position);
    });

    it("To validate that a user is able to search position", () => {
      positionObj.searchPosition(filePath.position);
    });

    it("To validate that a user able  to view data", () => {
      positionObj.viewPosition(filePath.position);
    });

    it("To validate that a user is able to edit position", () => {
      positionObj.updatePosition(filePath.position);
    });

    it("To validate that a user is able to  archive position", () => {
      positionObj.archivePosition(filePath.position);
    });
  }
);
