// import { getEnvVariables } from "../../../../../../helpers/environment/environment";
// import { patientAdministration } from "@helpers/filePath/lab";
// import * as apiObj from "../../../../../../pageObject/apiObj/apiObj";
// import * as schemesObj from "../../../../../../pageObject/main/patientAdministration/schemesObj";
// import * as APIFakerObj from "../../../../../../helpers/faker/apiFakerObj";
// const filePath = patientAdministration.patientSetup.scheme;

// describe("Schemes", { tags: ["@labSetup", "@pa"] }, () => {
//    before(() => {
Cypress.session.clearAllSavedSessions();
//     cy.rmDir(filePath.schemes_dir);

//     apiObj.createAPI(
//       getEnvVariables("apiUrl") + "/pa/communities",
//       APIFakerObj.communitiesAPIFakerObj().data,
//       filePath.community
//     );
//   });
//   beforeEach(() => {
//     cy.adminLogin();
//     schemesObj.gotoSchemePage();
//   });
//   after(() => {
//     apiObj.deleteAPI(
//       getEnvVariables("apiUrl") + "/pa/communities/",
//       filePath.community
//     );
//   });
//   it("To validate that a user is able to create schemes", () => {
//     schemesObj.create_schemes(filePath.schemes);
//   });

//   it("To validate that a user able to search schemes", () => {
//     schemesObj.search_schemes(filePath.schemes);
//   });
//   it("To validate that a user able to view schemes", () => {
//     schemesObj.search_schemes(filePath.schemes);
//     schemesObj.view_schemes(filePath.schemes);
//   });

//   it("To validate that a user able to edit schemes", () => {
//     schemesObj.search_schemes(filePath.schemes);
//     schemesObj.edit_schemes(filePath.schemes);
//   });

//   it("To verify validation message in name field", () => {
//     schemesObj.verify_validation_message_name_field();
//   });

//   it("To verify validation message in username  field", () => {
//     schemesObj.verify_validation_message_username_field();
//   });
//   //todo
//   //   it("To verify validation message in community field", () => {
//   //     schemesObj.verify_validation_message_name_field();
//   //   });

//   it("To verify validation message in code field", () => {
//     schemesObj.verify_validation_message_code_field();
//   });
//   //todo
//   //   it("To verify validation message in display order field", () => {
//   //     schemesObj.verify_validation_message_name_field();
//   //   });

//   it("To validate that a user able to  archive schemes", () => {
//     schemesObj.search_schemes(filePath.schemes);
//     schemesObj.delete_schemes();
//   });
// });
