import { patientAdministration } from "@helpers/filePath/pa";
import { CampObj } from "@pageObject/main/patientAdministration/patientSetup/campsObj";
import { gotoMenuSubMenuFeatureSubFeature as navigation } from "@support/commands";
const filePath = patientAdministration.patientSetup;

const campObj = new CampObj();
describe(
  "Patient Administration|Patient Setup|Camps",
  { tags: ["@labSetup", "@pa"] },
  () => {
    before(() => {
      Cypress.session.clearAllSavedSessions();
      cy.rmDir(filePath.camps_dir);
    });

    beforeEach(() => {
      cy.adminLogin();
      navigation(["Patient Administration", "Patient Setup", "Camp"]);
    });

    it("To validate that a user is able to create camps", () => {
      campObj.create_camps(filePath.camps);
    });

    it("To validate that a user is able to search camps", () => {
      campObj.searchCamps(filePath.camps);
    });
    it("To validate that a user able  to view", () => {
      campObj.viewCamps(filePath.camps);
    });

    it("To validate that a user able  to view data", () => {
      campObj.viewCamps(filePath.camps);
    });

    it("To validate that a user is able to edit camps", () => {
      campObj.updateCamps(filePath.camps);
    });

    it("To validate that a user is able to  archive camps", () => {
      campObj.archiveCamps(filePath.camps);
    });
  }
);
