import { patientAdministration } from "@helpers/filePath/pa";
import { SystemTypeObj } from "@pageObject/main/patientAdministration/patientSetup/systemTypesObj";
import { gotoMenuSubMenuFeatureSubFeature as navigation } from "@support/commands";
const filePath = patientAdministration.patientSetup;

const systemtypeObj = new SystemTypeObj();
describe(
  "Patient Administration > Patient Setup > System Types",
  { tags: ["@labSetup", "@pa"] },
  () => {
    before(() => {
      Cypress.session.clearAllSavedSessions();
      cy.rmDir(filePath.systemTypes_dir);
    });

    beforeEach(() => {
      cy.adminLogin();
      navigation(["Patient Administration", "Patient Setup", "System Type"]);
    });

    it("To validate that a user is able to create systemTypes", () => {
      systemtypeObj.create_system_type(filePath.systemTypes);
    });

    it("To validate that a user is able to search systemTypes", () => {
      systemtypeObj.searchSytemTypes(filePath.systemTypes);
    });
    it("To validate that a user able  to view", () => {
      systemtypeObj.viewSytemTypes(filePath.systemTypes);
    });

    it("To validate that a user is able to edit systemTypes", () => {
      systemtypeObj.updateSytemTypes(filePath.systemTypes);
    });

    it("To validate that a user is able to  archive systemTypes", () => {
      systemtypeObj.archiveSystemTypes(filePath.systemTypes);
    });
  }
);
