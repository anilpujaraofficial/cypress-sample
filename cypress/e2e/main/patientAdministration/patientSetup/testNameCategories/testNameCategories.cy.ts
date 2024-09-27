// import { patientAdministration } from "@helpers/filePath/lab";
// import * as testNameCategoriesObj from "../../../../../../pageObject/main/patientAdministration/testNameCategoriesObj";

// const filePath = patientAdministration.patientSetup;
// describe("Test Name Categories", { tags: ["@labSetup", "@pa"] }, () => {
//    before(() => {
Cypress.session.clearAllSavedSessions();
//     cy.rmDir(filePath.testNameCategories_dir);
//   });
//   beforeEach(() => {
//     cy.adminLogin();
//     testNameCategoriesObj.gotoTestNameCategoriesPage();
//   });
//   it("To validate that a user is able to create Test Name Categories", () => {
//     testNameCategoriesObj.create_testNameCategories(
//       filePath.testNameCategories
//     );
//   });

//   it("To validate that a user able to search Test Name Categories", () => {
//     testNameCategoriesObj.search_testNameCategories(
//       filePath.testNameCategories
//     );
//   });
//   it("To validate that a user able to view Test Name Categories", () => {
//     testNameCategoriesObj.search_testNameCategories(
//       filePath.testNameCategories
//     );
//     testNameCategoriesObj.view_testNameCategories(filePath.testNameCategories);
//   });
//   it("To validate that a user able to edit Test Name Categories", () => {
//     testNameCategoriesObj.search_testNameCategories(
//       filePath.testNameCategories
//     );
//     testNameCategoriesObj.edit_testNameCategories(filePath.testNameCategories);
//   });

//   it("To verify validation message in name field", () => {
//     testNameCategoriesObj.verify_validation_message_name_field();
//   });
//   it("To verify validation message in code field", () => {
//     testNameCategoriesObj.verify_validation_message_code_field();
//   });
//   it("To verify validation message in display order field", () => {
//     testNameCategoriesObj.verify_validation_message_display_order_field();
//   });

//   it("To validate that a user able to  archive Test Name Categories", () => {
//     testNameCategoriesObj.search_testNameCategories(
//       filePath.testNameCategories
//     );
//     testNameCategoriesObj.delete_testNameCategories();
//   });
// });
