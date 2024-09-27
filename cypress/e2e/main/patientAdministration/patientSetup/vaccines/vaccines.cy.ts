import { patientAdministration } from "@helpers/filePath/pa";
import { gotoMenuSubMenuFeatureSubFeature as navigation } from "@support/commands";
import { VaccineObj } from "@pageObject/main/patientAdministration/patientSetup/vaccinesObj";
const filePath = patientAdministration.patientSetup;

const vaccineObj = new VaccineObj();
describe(
  "Patient Administration > Patient Setup> Vaccines",
  { tags: ["@labSetup", "@pa"] },
  () => {
    before(() => {
      Cypress.session.clearAllSavedSessions();
      cy.rmDir(filePath.vaccines_dir);
    });

    beforeEach(() => {
      cy.adminLogin();
      navigation(["Patient Administration", "Patient Setup", "Vaccine"]);
    });

    it("To validate that a user is able to create vaccines", () => {
      vaccineObj.create_vaccines(filePath.vaccines);
    });

    it("To validate that a user is able to search vaccines", () => {
      vaccineObj.searchVaccines(filePath.vaccines);
    });

    it("To validate that a user able  to view data", () => {
      vaccineObj.viewVaccines(filePath.vaccines);
    });
    it("To validate that a user able  to view", () => {
      vaccineObj.viewVaccines(filePath.vaccines);
    });

    it("To validate that a user is able to edit vaccines", () => {
      vaccineObj.updateVaccines(filePath.vaccines);
    });

    it("To validate that a user is able to  archive vaccines", () => {
      vaccineObj.archiveVaccines(filePath.vaccines);
    });
  }
);
