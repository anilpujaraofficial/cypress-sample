// import { getEnvVariables } from "../../../../../../helpers/environment/environment";
// import { patientAdministration } from "@helpers/filePath/lab";
// import * as apiObj from "../../../../../../pageObject/apiObj/apiObj";
// import * as schemeWiseTestDiscountsObj from "../../../../../../pageObject/main/patientAdministration/schemeWiseTestDiscountsObj";
// import * as APIFakerObj from "../../../../../../helpers/faker/apiFakerObj";
// const filePath = patientAdministration.patientSetup.schemeWiseTestDiscounts;

// describe("Scheme Wise Test Discount", { tags: ["@labSetup", "@pa"] }, () => {
//    before(() => {
Cypress.session.clearAllSavedSessions();
//     cy.rmDir(filePath.schemeWiseTestDiscounts_dir);

//     apiObj.createAPI(
//       getEnvVariables("apiUrl") + "/pa/schemes",
//       APIFakerObj.schemesAPIFakerObj().data,
//       filePath.schemes
//     );

//     apiObj.createAPI(
//       getEnvVariables("apiUrl") + "/pa/patienttypes",
//       APIFakerObj.patientTypeAPIFakerObj().data,
//       filePath.patientType
//     );
//   });
//   beforeEach(() => {
//     cy.adminLogin();
//     schemeWiseTestDiscountsObj.gotoSchemeWiseTestDiscountsPage();
//   });
//   after(() => {
//     apiObj.deleteAPI(
//       getEnvVariables("apiUrl") + "/pa/schemes/",
//       filePath.schemes
//     );
//     apiObj.deleteAPI(
//       getEnvVariables("apiUrl") + "/pa/patienttypes/",
//       filePath.patientType
//     );
//   });
//   it("To validate that a user is able to create scheme Wise Test Discounts", () => {
//     schemeWiseTestDiscountsObj.create_schemeWiseTestDiscounts(
//       filePath.schemeWiseTestDiscounts
//     );
//   });

//   it("To validate that a user able to search scheme Wise Test Discounts", () => {
//     schemeWiseTestDiscountsObj.search_schemeWiseTestDiscounts(
//       filePath.schemeWiseTestDiscounts
//     );
//   });
//   it("To validate that a user able to view scheme Wise Test Discounts", () => {
//     schemeWiseTestDiscountsObj.search_schemeWiseTestDiscounts(
//       filePath.schemeWiseTestDiscounts
//     );
//     schemeWiseTestDiscountsObj.view_schemeWiseTestDiscounts(
//       filePath.schemeWiseTestDiscounts
//     );
//   });

//   it("To validate that a user able to edit scheme Wise Test Discounts", () => {
//     schemeWiseTestDiscountsObj.search_schemeWiseTestDiscounts(
//       filePath.schemeWiseTestDiscounts
//     );
//     schemeWiseTestDiscountsObj.edit_schemeWiseTestDiscounts(
//       filePath.schemeWiseTestDiscounts
//     );
//   });

//   it("To verify validation message in name field", () => {
//     schemeWiseTestDiscountsObj.verify_validation_message_name_field();
//   });

//   it("To verify validation message in  patient type code  field", () => {
//     schemeWiseTestDiscountsObj.verify_validation_message_patient_type_code_field();
//   });

//   it("To verify validation message in  Registration Discount Percentage, Op Discount Percentage ,Ip Discount Percentage , Bed Discount Percentage and Admission Discount Percentage fields", () => {
//     schemeWiseTestDiscountsObj.verify_validation_message_Discount_Percentage_field();
//   });

//   it("To validate that a user able to  archive scheme wise test discounts", () => {
//     schemeWiseTestDiscountsObj.search_schemeWiseTestDiscounts(
//       filePath.schemeWiseTestDiscounts
//     );
//     schemeWiseTestDiscountsObj.delete_schemeWiseTestDiscounts();
//   });
// });
