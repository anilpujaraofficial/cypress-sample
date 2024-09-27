import { patientAdministration } from "@helpers/filePath/pa";
import { SalutationObj } from "@pageObject/main/patientAdministration/patientSetup/salutationObj";
import { gotoMenuSubMenuFeatureSubFeature as navigation } from "@support/commands";
const filePath = patientAdministration.patientSetup;

const salutationObj = new SalutationObj();
describe(
  "Patient Administration > Patient Setup > Position",
  { tags: ["@patientSetup", "@pa"] },
  () => {
    before(() => {
      Cypress.session.clearAllSavedSessions();
      cy.rmDir(filePath.salutation_dir);
    });

    beforeEach(() => {
      cy.adminLogin();
      navigation(["Patient Administration", "Patient Setup", "Salutation"]);
    });

    it("To validate that a user is able to create salutation", () => {
      salutationObj.create_salutation(filePath.salutation);
    });

    it("To validate that a user is able to search salutation", () => {
      salutationObj.searchSalutation(filePath.salutation);
    });

    it("To validate that a user able  to view data", () => {
      salutationObj.viewSalutation(filePath.salutation);
    });

    it("To validate that a user is able to edit salution", () => {
      salutationObj.updateSalutation(filePath.salutation);
    });

    it("To validate that a user is able to  archive salution", () => {
      salutationObj.archiveSalutation(filePath.salutation);
    });
  }
);
