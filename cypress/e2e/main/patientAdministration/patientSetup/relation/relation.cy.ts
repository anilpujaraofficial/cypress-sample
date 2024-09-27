import { patientAdministration } from "@helpers/filePath/pa";
import { RelationObj } from "@pageObject/main/patientAdministration/patientSetup/relationObj";
import { gotoMenuSubMenuFeatureSubFeature as navigation } from "@support/commands";
const filePath = patientAdministration.patientSetup;

const relationObj = new RelationObj();
describe(
  "Patient Administration>Patient Setup>Relation",
  { tags: ["@labSetup", "@pa"] },
  () => {
    before(() => {
      Cypress.session.clearAllSavedSessions();
      cy.rmDir(filePath.relation_dir);
    });

    beforeEach(() => {
      cy.adminLogin();
      navigation(["Patient Administration", "Patient Setup", "Relation"]);
    });

    it("To validate that a user is able to create relation", () => {
      relationObj.create_relation(filePath.relation);
    });

    it("To validate that a user is able to search relation", () => {
      relationObj.searchRelation(filePath.relation);
    });
    it("To validate that a user able  to view", () => {
      relationObj.viewRelation(filePath.relation);
    });

    it("To validate that a user able  to view data", () => {
      relationObj.viewRelation(filePath.relation);
    });

    it("To validate that a user is able to edit relation", () => {
      relationObj.updateRelation(filePath.relation);
    });

    it("To validate that a user is able to  archive relation", () => {
      relationObj.archiveRelation(filePath.relation);
    });
  }
);
