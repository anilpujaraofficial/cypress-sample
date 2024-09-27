import { patientAdministration } from "@helpers/filePath/pa";
import { gotoMenuSubMenuFeatureSubFeature as navigation } from "@support/commands";
import { PatientTypeObj } from "@pageObject/main/patientAdministration/patientSetup/patientTypeObj";
const filePath = patientAdministration.patientSetup;

const patientypeObj = new PatientTypeObj();
describe(
  "Patient Administration > Patient Setup > Patient type",
  { tags: ["@patientSetup", "@pa"] },
  () => {
    before(() => {
      Cypress.session.clearAllSavedSessions();
      cy.rmDir(filePath.patientType_dir);
    });

    beforeEach(() => {
      cy.adminLogin();
      navigation(["Patient Administration", "Patient Setup", "Patient Type"]);
    });

    it("To validate that a user is able to create bank", () => {
      patientypeObj.create_patienttype(filePath.patientType);
    });

    it("To validate that a user is able to search bank", () => {
      patientypeObj.searchPatientType(filePath.patientType);
    });

    it("To validate that a user able  to view data", () => {
      patientypeObj.viewPatientType(filePath.patientType);
    });
    it("To validate that a user able  to view", () => {
      patientypeObj.viewPatientType(filePath.patientType);
    });

    it("To validate that a user is able to edit patientType", () => {
      patientypeObj.updatePatientType(filePath.patientType);
    });

    it("To validate that a user is able to  archive patientType", () => {
      patientypeObj.archivePatiet(filePath.patientType);
    });
  }
);
