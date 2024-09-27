import { investigation } from "@helpers/filePath/lab";
import { gotoMenuSubMenuFeatureSubFeature as navigation } from "@support/commands";
import { SpecimenObj } from "@pageObject/main/investigation/labSetup/specimenObj";

const filePath = investigation.labSetup;
const specimenObj = new SpecimenObj();

describe(
  "Investigation > Lab Setup > Specimen",
  { tags: ["@labSetup", "@lab"] },
  () => {
    before(() => {
      Cypress.session.clearAllSavedSessions();
      cy.rmDir(filePath.specimen_dir);
    });
    beforeEach(() => {
      cy.adminLogin();
      navigation(["Investigation", "Lab Setup", "Specimen"]);
      cy.verifyApiStatus("/investigation/lab-setup/specimen", 200, "success");
    });

    it("To validate that a user is able to create specimen", () => {
      specimenObj.createSpecimen(filePath.specimen);
    });
    it("To validate that a user is able to search specimen", () => {
      specimenObj.searchSpecimen(filePath.specimen);
    });
    it("To validate that a user able  to view specimen", () => {
      specimenObj.viewSpecimen(filePath.specimen);
    });
    it("To validate that a user is able to edit specimen", () => {
      specimenObj.updateSpecimen(filePath.specimen);
    });

    it("To validate that a user is able to  archive specimen", () => {
      specimenObj.archiveSpecimen(filePath.specimen);
    });
  }
);
