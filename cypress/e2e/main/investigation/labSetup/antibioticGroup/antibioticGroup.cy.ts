import { investigation } from "@helpers/filePath/lab";
import { gotoMenuSubMenuFeatureSubFeature as navigation } from "@support/commands";
import { AntibioticGroupObj } from "@pageObject/main/investigation/labSetup/antibioticGroupObj";
const filePath = investigation.labSetup;
const antibioticGroupObj = new AntibioticGroupObj();
describe(
  "Investigation > Lab Setup > Antibiotic Group",
  { tags: ["@labSetup", "@lab"] },
  () => {
    before(() => {
      Cypress.session.clearAllSavedSessions();
      cy.rmDir(filePath.antibioticGroup_dir);
    });
    beforeEach(() => {
      cy.adminLogin();
      navigation(["Investigation", "Lab Setup", "Antibiotic Group"]);
    });
    it("To validate that a user is able to create antibiotic group", () => {
      antibioticGroupObj.createAntibioticGroup(filePath.antibioticGroup);
    });
    it("To validate that a user is able to search antibiotic group", () => {
      antibioticGroupObj.searchAntibioticGroup(filePath.antibioticGroup);
    });
    it("To validate that a user able to view antibiotic group", () => {
      antibioticGroupObj.viewAntibioticGroup(filePath.antibioticGroup);
    });
    it("To validate that a user is able to edit antibiotic group", () => {
      antibioticGroupObj.updateAntibioticGroup(filePath.antibioticGroup);
    });

    it("To validate that a user is able to  archive antibiotic group", () => {
      antibioticGroupObj.archiveAntibioticGroup(filePath.antibioticGroup);
    });
  }
);
