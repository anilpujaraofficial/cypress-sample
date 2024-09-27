import { investigation } from "@helpers/filePath/lab";
import { PathologyObj } from "@pageObject/main/investigation/pathoHistoRadio/pathoHIstoRadioObj";
import {
  getEnvVariables,
  gotoMenuSubMenuFeatureSubFeature as navigation,
} from "@support/commands";
const filePath = investigation.patho_histo_radio;
const pathoObj = new PathologyObj();
context("Investigation > Pathology", () => {
  before(() => {
    Cypress.session.clearAllSavedSessions();
    pathoObj.addDependency(filePath);
  });

  beforeEach(() => {
    cy.adminLogin();
    cy.intercept(getEnvVariables("apiUrl") + "/labs/patient-list/PATHO").as(
      "data"
    );
    navigation(["Investigation", "Pathology"]);
    cy.wait("@data").then((res) => {
      cy.writeFile(filePath.rule, res.response.body.rules);
    });
  });

  describe("Patient List || Sample Collection || Lab Receive || Department Receive", () => {
    it("To validate that a user able to verify search function", () => {
      pathoObj.searchPatient(filePath.bill);
    });
    it("To validate that a user is able to verify table data", () => {
      pathoObj.verifyPatientInfo(filePath.bill, filePath.patient);
    });
    it("Sample Collection", () => {
      pathoObj.collectSample(filePath.bill, filePath.patient, "PATHO");
    });
    it("Lab Receive", () => {
      pathoObj.labReceive(filePath.bill, filePath.rule);
    });
    it("Department Receive", () => {
      pathoObj.departmentReceive(filePath.bill, filePath.rule);
    });
  });

  describe("Result Entry || Verification || Dispatch", () => {
    it("Result Entry", () => {
      pathoObj.resultEntry(filePath.bill);
    });
    it("Verification", () => {
      pathoObj.verification(filePath.bill, filePath.rule);
    });
    it("Dispatch", () => {
      pathoObj.dispatch(filePath.bill, filePath.patient);
    });
  });

  // describe("Reject Test || Cancel Test", () => {
  //   it("Reject Test", () => {
  //     pathoObj.testReject(filePath.bill);
  //   });
  //   it("Cancel Test", () => {
  //     pathoObj.testCancel(filePath.bill, filePath.patient,"PATHO");
  //   });
  // });
});
