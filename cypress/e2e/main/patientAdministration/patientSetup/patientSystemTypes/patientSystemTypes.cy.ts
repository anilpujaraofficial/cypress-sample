// import { getEnvVariables } from "../../../../../../helpers/environment/environment";
// import { patientAdministration } from "@helpers/filePath/lab";
// import * as APIObj from "../../../../../../pageObject/apiObj/apiObj";
// import * as patientSystemTypesObj from "../../../../../../pageObject/main/patientAdministration/patientSystemTypesObj";
// import * as APIFakerObj from "../../../../../../helpers/faker/apiFakerObj";
// const filePath = patientAdministration.patientSetup.patientSystemTypes;
// describe("Patient System Type", { tags: ["@labSetup", "@pa"] }, () => {
//    before(() => {
Cypress.session.clearAllSavedSessions();
//     cy.rmDir(filePath.patientSystemTypes_dir);

//     APIObj.createAPI(
//       getEnvVariables("apiUrl") + "/pa/patienttypes",
//       APIFakerObj.patientTypeAPIFakerObj().data,
//       filePath.patientType
//     );
//   });

//   beforeEach(() => {
//     cy.adminLogin();
//     patientSystemTypesObj.gotoPatientSystemTypesPage();
//   });
//   after(() => {
//     APIObj.deleteAPI(
//       getEnvVariables("apiUrl") + "/pa/patienttypes/",
//       filePath.patientType
//     );
//   });
//   it("To validate that a user is able to create patient system types", () => {
//     patientSystemTypesObj.create_patientSystemTypes(
//       filePath.patientSystemTypes
//     );
//   });

//   it("To validate that a user able to search patient system types", () => {
//     patientSystemTypesObj.search_patientSystemTypes(
//       filePath.patientSystemTypes
//     );
//   });
//   it("To validate that a user able to view patient system types", () => {
//     patientSystemTypesObj.search_patientSystemTypes(
//       filePath.patientSystemTypes
//     );
//     patientSystemTypesObj.view_patientSystemTypes(filePath.patientSystemTypes);
//   });

//   it("To validate that a user able to edit patient system types", () => {
//     patientSystemTypesObj.search_patientSystemTypes(
//       filePath.patientSystemTypes
//     );
//     patientSystemTypesObj.edit_patientSystemTypes(filePath.patientSystemTypes);
//   });

//   it("To verify validation message in system type code field", () => {
//     patientSystemTypesObj.verify_validation_message_system_type_code_field();
//   });
//   it("To verify validation message in patient type code field", () => {
//     patientSystemTypesObj.verify_validation_message_patient_type_code_field();
//   });

//   it("To validate that a user able to  archive patient system type", () => {
//     patientSystemTypesObj.search_patientSystemTypes(
//       filePath.patientSystemTypes
//     );
//     patientSystemTypesObj.delete_patientSystemTypes();
//   });
// });
