import { investigation } from "@helpers/filePath/lab";
import {
  HistoRadioObj,
  PathologyObj,
} from "@pageObject/main/investigation/pathoHistoRadio/pathoHIstoRadioObj";
import {
  getEnvVariables,
  gotoMenuSubMenuFeatureSubFeature as navigation,
} from "@support/commands";
const filePath = investigation.patho_histo_radio;
const histoObj = new PathologyObj();
const histoRadioObj = new HistoRadioObj();

context("Investigation > Radiology", () => {
  before(() => {
    Cypress.session.clearAllSavedSessions();
    histoObj.addDependency(filePath);
  });

  beforeEach(() => {
    cy.adminLogin();
    cy.intercept(getEnvVariables("apiUrl") + "/labs/patient-list/RADIO").as(
      "data"
    );
    navigation(["Investigation", "Radiology"]);
    cy.wait("@data").then((res) => {
      cy.writeFile(filePath.rule, res.response.body.rules);
    });
  });

  describe("Patient List || Sample Collection || Lab Receive || Department Receive", () => {
    it("To validate that a user able to verify search function", () => {
      histoObj.searchPatient(filePath.bill);
    });
    it("To validate that a user is able to verify table data", () => {
      histoObj.verifyPatientInfo(filePath.bill, filePath.patient);
    });
    it("Sample Collection", () => {
      histoObj.collectSample(filePath.bill, filePath.patient, "RADIO");
    });
    it("Lab Receive", () => {
      histoObj.labReceive(filePath.bill, filePath.rule);
    });
    it("Department Receive", () => {
      histoObj.departmentReceive(filePath.bill, filePath.rule);
    });
  });

  describe("Result Entry || Verification || Dispatch", () => {
    it("Result Entry", () => {
      histoRadioObj.resultEntry(filePath.bill);
    });
    it("Verification", () => {
      histoRadioObj.verification(filePath.bill, filePath.rule);
    });
    it("Dispatch", () => {
      histoObj.dispatch(filePath.bill, filePath.patient);
    });
  });

  // describe("Reject Test || Cancel Test", () => {
  //   it("Reject Test", () => {
  //     histoObj.testReject(filePath.bill);
  //   });
  //   it("Cancel Test", () => {
  //     histoObj.testCancel(filePath.bill, filePath.patient, "RADIO");
  //   });
  // });
});
