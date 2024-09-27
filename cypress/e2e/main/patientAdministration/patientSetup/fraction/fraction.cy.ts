// import { patientAdministration } from "@helpers/filePath/lab";
// import * as fractionSetupObj from "../../../../../../pageObject/main/patientAdministration/fractionObj";
// import * as APIObj from "../../../../../../pageObject/apiObj/apiObj";
// import * as APIFakerObj from "../../../../../../helpers/faker/apiFakerObj";
// import { getEnvVariables } from "../../../../../../helpers/environment/environment";

// const filePath = patientAdministration.patientSetup.fractionSetup;

// describe("Fraction Setup", { tags: ["@labSetup", "@pa"] }, () => {
//    before(() => {
Cypress.session.clearAllSavedSessions();
//     cy.rmDir(filePath.fractionSetup_dir);

//     APIObj.createAPI(
//       getEnvVariables("apiUrl") + "/pa/patienttypes",
//       APIFakerObj.patientTypeAPIFakerObj().data,
//       filePath.patient_type
//     );
//   });
//   beforeEach(() => {
//     cy.adminLogin();
//     fractionSetupObj.gotoFractionSetupPage();
//   });
//   after(() => {
//     APIObj.deleteAPI(
//       getEnvVariables("apiUrl") + "/pa/patienttypes/",
//       filePath.patient_type
//     );
//   });
//   it("To validate that a user is able to create fraction setup", () => {
//     fractionSetupObj.create_fractionSetup(filePath.fractionSetup);
//   });

//   it("To validate that a user able to search fraction setup", () => {
//     fractionSetupObj.search_fractionSetup(filePath.fractionSetup);
//   });
//   it("To validate that a user able to view fraction setup", () => {
//     fractionSetupObj.search_fractionSetup(filePath.fractionSetup);
//     fractionSetupObj.view_fractionSetup(filePath.fractionSetup);
//   });
//   it("To validate that a user able to edit fraction setup", () => {
//     fractionSetupObj.search_fractionSetup(filePath.fractionSetup);
//     fractionSetupObj.edit_fractionSetup(filePath.fractionSetup);
//   });

//   it("To verify validation message in name field", () => {
//     fractionSetupObj.verify_validation_message_name_field();
//   });
//   it("To verify validation message in code field", () => {
//     fractionSetupObj.verify_validation_message_code_field();
//   });
//   it("To validate that a user able to  archive fraction setup", () => {
//     fractionSetupObj.search_fractionSetup(filePath.fractionSetup);
//     fractionSetupObj.delete_fractionSetup();
//   });
// });
