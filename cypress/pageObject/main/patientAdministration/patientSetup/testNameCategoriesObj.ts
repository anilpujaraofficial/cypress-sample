// //! common
// import { faker } from "@faker-js/faker";
// import { CommonXpathAndAssertion } from "../../../helpers/xpathAndAssertion/commonXpathAndAssertion/commonXpathAndAssertion";
// import { CommonPage } from "../../../page/commonPage/commonPage";
// import { CommonPageObj } from "@pageObject/commonPageObj/commonPageObj";
// let commonPageObj = new CommonPageObj();

// //! testNameCategories
// import * as testNameCategoriesModule from "../../../helpers/xpathAndAssertion/main/patientAdministration/patientSetup/testNameCategories";

// import { testNameCategoriesFakerObj } from "@helpers/faker/fakerObj";

// let commonP = new CommonPage();
// let commonX = new CommonXpathAndAssertion();

// export function gotoTestNameCategoriesPage() {
//   commonPageObj.gotoPatientAdministration();

//   commonP.clickButtonForceTrue(commonX.sideMenuBar().menu_unfold);

//   commonP.clickElementWithContain(
//     commonX.sideMenuBar().mainTab,
//     "Patient Setup"
//   );
//   commonP.clickForceElementWithContain(
//     commonX.sideMenuBar().subTab,
//     "Test Name Categories"
//   );
//   commonP.urlVerify("/testnamecategories");
// }

// export function create_testNameCategories(filePath) {
//   let data = testNameCategoriesFakerObj();
//   cy.task("checkFileExists", filePath).then((bool) => {
//     if (!bool) {
//       commonP.clickElementWithContain(
//         testNameCategoriesModule.buttons().xpath.add,
//         testNameCategoriesModule.buttons().value.add
//       );
//       commonP.inputField(
//         testNameCategoriesModule.create_testNameCategories().xpath.name,
//         data.name
//       );
//       commonP.inputField(
//         testNameCategoriesModule.create_testNameCategories().xpath.code,
//         data.code
//       );
//       commonP.inputField(
//         testNameCategoriesModule.create_testNameCategories().xpath
//           .display_order,
//         data.display_order
//       );

//       commonP.clickElementWithContain(
//         testNameCategoriesModule.buttons().xpath.save,
//         testNameCategoriesModule.buttons().value.save
//       );

//       cy.writeFile(filePath, data);

//       commonP.verifyAlertMessage(
//         commonX.alert().xpath.alert,
//         "Test Name Category created"
//       );
//     }
//   });
// }

// export function search_testNameCategories(filePath) {
//   cy.readFile(filePath).then((data) => {
//     commonP.searchField(
//       testNameCategoriesModule.testNameCategories().xpath.search,
//       data.code
//     );

//     for (const key in data) {
//       commonP.verifyTableData(
//         testNameCategoriesModule.testNameCategories().xpath.table_data,
//         data[key]
//       );
//     }
//   });
// }

// export function view_testNameCategories(filePath) {
//   commonPageObj.viewEditArchive(commonX.crud_op().value.view);
//   cy.readFile(filePath).then((data) => {
//     commonP.verifyInputFieldValue(
//       testNameCategoriesModule.create_testNameCategories().xpath.name,
//       data.name
//     );
//     commonP.verifyInputFieldValue(
//       testNameCategoriesModule.create_testNameCategories().xpath.code,
//       data.code
//     );
//     commonP.verifyInputFieldValue(
//       testNameCategoriesModule.create_testNameCategories().xpath.display_order,
//       data.display_order
//     );
//   });
// }

// export function edit_testNameCategories(filePath) {
//   let data = testNameCategoriesFakerObj();
//   commonPageObj.viewEditArchive(commonX.crud_op().value.edit);

//   commonP.inputField(
//     testNameCategoriesModule.create_testNameCategories().xpath.name,
//     data.name
//   );
//   commonP.inputField(
//     testNameCategoriesModule.create_testNameCategories().xpath.code,
//     data.code
//   );
//   commonP.inputField(
//     testNameCategoriesModule.create_testNameCategories().xpath.display_order,
//     data.display_order
//   );

//   commonP.clickElementWithContain(
//     testNameCategoriesModule.buttons().xpath.save,
//     testNameCategoriesModule.buttons().value.save
//   );

//   commonP.verifyAlertMessage(
//     commonX.alert().xpath.alert,
//     "Test Name Category updated"
//   );
//   cy.writeFile(filePath, data);
// }

// export function verify_validation_message_name_field() {
//   let data = testNameCategoriesFakerObj();

//   commonP.clickElementWithContain(
//     testNameCategoriesModule.buttons().xpath.add,
//     testNameCategoriesModule.buttons().value.add
//   );
//   // commonP.inputField(testNameCategoriesModule.create_testNameCategories().xpath.name, data.name);
//   commonP.inputField(
//     testNameCategoriesModule.create_testNameCategories().xpath.code,
//     data.code
//   );
//   commonP.inputField(
//     testNameCategoriesModule.create_testNameCategories().xpath.display_order,
//     data.display_order
//   );

//   commonP.clickElementWithContain(
//     testNameCategoriesModule.buttons().xpath.save,
//     testNameCategoriesModule.buttons().value.save
//   );
//   commonP.verifyInvalidsMessage(
//     commonX.validation_message().xpath.invalid_feedback,
//     testNameCategoriesModule.invalid_feedback().value.empty_name
//   );

//   commonP.inputField(
//     testNameCategoriesModule.create_testNameCategories().xpath.name,
//     faker.string.alphanumeric(101)
//   );
//   commonP.clickElementWithContain(
//     testNameCategoriesModule.buttons().xpath.save,
//     testNameCategoriesModule.buttons().value.save
//   );
//   commonP.verifyInvalidsMessage(
//     commonX.validation_message().xpath.invalid_feedback,
//     testNameCategoriesModule.invalid_feedback().value.name_more_than_50char
//   );
// }

// export function verify_validation_message_code_field() {
//   let data = testNameCategoriesFakerObj();

//   commonP.clickElementWithContain(
//     testNameCategoriesModule.buttons().xpath.add,
//     testNameCategoriesModule.buttons().value.add
//   );
//   commonP.inputField(
//     testNameCategoriesModule.create_testNameCategories().xpath.name,
//     data.name
//   );
//   // commonP.inputField(testNameCategoriesModule.create_testNameCategories().xpath.code, data.code);

//   commonP.inputField(
//     testNameCategoriesModule.create_testNameCategories().xpath.display_order,
//     data.display_order
//   );
//   commonP.clickElementWithContain(
//     testNameCategoriesModule.buttons().xpath.save,
//     testNameCategoriesModule.buttons().value.save
//   );
//   commonP.verifyInvalidsMessage(
//     commonX.validation_message().xpath.invalid_feedback,
//     testNameCategoriesModule.invalid_feedback().value.empty_code
//   );
//   commonP.inputField(
//     testNameCategoriesModule.create_testNameCategories().xpath.code,
//     faker.string.alphanumeric(11)
//   );
//   commonP.clickElementWithContain(
//     testNameCategoriesModule.buttons().xpath.save,
//     testNameCategoriesModule.buttons().value.save
//   );
//   commonP.verifyInvalidsMessage(
//     commonX.validation_message().xpath.invalid_feedback,
//     testNameCategoriesModule.invalid_feedback().value.code_more_than_10_char
//   );
// }

// export function verify_validation_message_display_order_field() {
//   let data = testNameCategoriesFakerObj();

//   commonP.clickElementWithContain(
//     testNameCategoriesModule.buttons().xpath.add,
//     testNameCategoriesModule.buttons().value.add
//   );
//   commonP.inputField(
//     testNameCategoriesModule.create_testNameCategories().xpath.name,
//     data.name
//   );
//   commonP.inputField(
//     testNameCategoriesModule.create_testNameCategories().xpath.code,
//     data.code
//   );

//   // commonP.inputField(
//   //   testNameCategoriesModule.create_testNameCategories().xpath.display_order,
//   //   data.display_order
//   // );
//   commonP.clickElementWithContain(
//     testNameCategoriesModule.buttons().xpath.save,
//     testNameCategoriesModule.buttons().value.save
//   );
//   commonP.verifyInvalidsMessage(
//     commonX.validation_message().xpath.invalid_feedback,
//     testNameCategoriesModule.invalid_feedback().value.empty_order
//   );
// }
// export function delete_testNameCategories() {
//   commonPageObj.viewEditArchive(commonX.crud_op().value.archive);

//   commonPageObj.verifyDeleteConfirm();
//   commonPageObj.clickDeleteConfirm();

//   commonP.verifyAlertMessage(
//     commonX.alert().xpath.alert,
//     "Test Name Category deleted successfully"
//   );
// }
