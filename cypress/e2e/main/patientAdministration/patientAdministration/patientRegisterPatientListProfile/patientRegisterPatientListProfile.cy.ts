// import { patientAdministration } from "@helpers/filePath/lab";
// import * as patientRegisterObj from "../../../../../../pageObject/main/patientAdministration/patientRegisterObj";
// import * as patientListObj from "../../../../../../pageObject/main/patientAdministration/patientListObj";

// // import * as APIObj from "../../../../../pageObject/apiObj/apiObj";
// // import { getEnvVariables } from "../../../../../helpers/environment/environment";
// // import * as APIFakerObj from "../../../../../helpers/faker/apiFakerObj";
// const filePath = patientAdministration.pa;

// describe("Registration || Patient List", { tags: "@patientRegister" }, () => {
//    before(() => {
Cypress.session.clearAllSavedSessions();
//     cy.rmDir(filePath.patient_dir);
//     // APIObj.createAPI(
//     //   getEnvVariables("apiUrl") + "/pa/schemes",
//     //   APIFakerObj.schemesAPIFakerObj().data,
//     //   filePath.scheme
//     // );
//   });
//   beforeEach(() => {
//     cy.adminLogin();
//   });
//   after(() => {
//     // APIObj.deleteAPI(
//     //   getEnvVariables("apiUrl") + "/pa/schemes/",
//     //   filePath.scheme
//     // );
//   });

//   describe("Patient register", () => {
//     it("New register", () => {
//       patientRegisterObj.gotoPatientRegisterPage();
//       patientRegisterObj.patientRegister(filePath.patient, filePath.scheme);
//     });
//     it("Follow Up", () => {
//       patientRegisterObj.gotoPatientRegisterPage();
//       patientRegisterObj.patientFollowUp(filePath.patient);
//     });
//     // it("Patient register => To verify validation message in  personal information fields", () => {
//     //   patientRegisterObj.gotoPatientRegisterPage();
//     //   patientRegisterObj.verify_validation_message_in_personal_information();
//     // });

//     // it("Patient register => To verify validation message in  permanent address fields", () => {
//     //   patientRegisterObj.gotoPatientRegisterPage();
//     //   patientRegisterObj.verify_validation_message_in_permanent_address();
//     // });
//   });

//   describe("Patient List", () => {
//     it("To verify search functionality in patient list", () => {
//       patientListObj.gotoPatientList();
//       patientListObj.patientSearch(filePath.patient);
//     });

//     it("To validate that a user is able to view patient", () => {
//       patientListObj.gotoPatientList();
//       patientListObj.patientSearch(filePath.patient);
//       patientListObj.view_patient(filePath.patient);
//     });

//     it("To validate that a user is able to edit patient", () => {
//       patientListObj.gotoPatientList();
//       patientListObj.patientSearch(filePath.patient);
//       patientListObj.edit_patient(filePath.patient);
//     });

//     it("To verify click add button user redirect patient register page", () => {
//       patientListObj.gotoPatientList();
//       patientListObj.user_redirect_patient_register_page();
//     });
//     it("To verify pagination", () => {
//       patientListObj.gotoPatientList();
//       patientListObj.verify_pagination();
//     });

//     it("To verify go to page functionality", () => {
//       patientListObj.gotoPatientList();
//       patientListObj.gotoPage();
//     });

//     it("To verify show data functionality", () => {
//       patientListObj.gotoPatientList();
//       patientListObj.showData();
//     });
//   });
// });
