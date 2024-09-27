import { agentBill, patient } from "@helpers/faker/pa";
import { agentPortal } from "@helpers/filePath/ap";
import { APIObj } from "@pageObject/apiObj/apiObj";
import { AgentPatientListObj } from "@pageObject/main/agentPortal/patientList/patientListObj";
import {
  getEnvVariables,
  gotoMenuSubMenuFeatureSubFeature as navigation,
} from "@support/commands";
const patientListObj = new AgentPatientListObj();
const filePath = agentPortal.patient_list;

const apiObj = new APIObj();
describe("Agent Portal > Patient List ", () => {
  before(() => {
    Cypress.session.clearAllSavedSessions();

    cy.agentLogin();
    cy.get(`span.whitespace-nowrap`).click().wait(500);
    navigation(["Patient List"]);
    apiObj.createAPI(
      getEnvVariables("apiUrl") + "/pa/register",
      patient().data,
      filePath.patient
    );
    apiObj.createAPI(
      getEnvVariables("apiUrl") + "/pa/billing",
      agentBill(filePath.patient).data,
      filePath.bill
    );
  });

  it("To validate that a user able to verify patient list || To validate that a user is able to verify search functionality", () => {
    patientListObj.searchPatient(filePath.bill);
    patientListObj.verifyPatientInfo(filePath.bill, filePath.patient);
  });
});
