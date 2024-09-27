import { investigation } from "@helpers/filePath/lab";
import { gotoMenuSubMenuFeatureSubFeature as navigation } from "@support/commands";
import { SequenceDefinitionnObj } from "@pageObject/main/investigation/labSetup/sequenceDefinitionObj";

const filePath = investigation.labSetup;
const specimenObj = new SequenceDefinitionnObj();

describe(
  "Investigation > Lab Setup > Sequence Definition",
  { tags: ["@labSetup", "@lab"] },
  () => {
    before(() => {
      Cypress.session.clearAllSavedSessions();
      cy.rmDir(filePath.sequenceDefinition_dir);
    });
    beforeEach(() => {
      cy.adminLogin();
      navigation(["Investigation", "Lab Setup", "Sequence Definition"]);
    });

    it("To validate that a user is able to create specimen", () => {
      specimenObj.createSequenceDefinitionn(filePath.sequenceDefinition);
    });
    it("To validate that a user is able to search specimen", () => {
      specimenObj.searchSequenceDefinitionn(filePath.sequenceDefinition);
    });
    it("To validate that a user able  to view specimen", () => {
      specimenObj.viewSequenceDefinitionn(filePath.sequenceDefinition);
    });

    it("To validate that a user is able to  archive specimen", () => {
      specimenObj.archiveSequenceDefinitionn(filePath.sequenceDefinition);
    });
  }
);
