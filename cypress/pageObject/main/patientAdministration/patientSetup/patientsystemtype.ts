// //! common
// import { faker } from "@faker-js/faker";
// import { CommonXpathAndAssertion } from "../../../helpers/xpathAndAssertion/commonXpathAndAssertion/commonXpathAndAssertion";
// import { CommonPage } from "../../../page/commonPage/commonPage";
// import { CommonPageObj } from "@pageObject/commonPageObj/commonPageObj";
// let commonPageObj = new CommonPageObj();

// //! systemTypes
// import * as systemTypesModule from "../../../helpers/xpathAndAssertion/main/patientAdministration/patientSetup/systemTypes";

// import { systemTypesFakerObj } from "@helpers/faker/fakerObj";
// import { getEnvVariables } from "../../../helpers/environment/environment";

// let commonP = new CommonPage();
// let commonX = new CommonXpathAndAssertion();

// export function gotoSystemTypesPage() {
//   commonPageObj.gotoPatientAdministration();

//   commonP.clickButtonForceTrue(commonX.sideMenuBar().menu_unfold);

//   commonP.clickElementWithContain(
//     commonX.sideMenuBar().mainTab,
//     "Patient Setup"
//   );
//   cy.visit(getEnvVariables("url") + "/pa/setup/systemtypes");
//   commonP.urlVerify("/systemtypes");
// }

// export function create_systemTypes(filePath) {
//   let data = systemTypesFakerObj();
//   cy.task("checkFileExists", filePath).then((bool) => {
//     if (!bool) {
//       commonP.clickElementWithContain(
//         systemTypesModule.buttons().xpath.add,
//         systemTypesModule.buttons().value.add
//       );
//       commonP.inputField(
//         systemTypesModule.create_systemTypes().xpath.name,
//         data.name
//       );
//       commonP.inputField(
//         systemTypesModule.create_systemTypes().xpath.code,
//         data.code
//       );
//       commonP.clickElementWithContain(
//         systemTypesModule.buttons().xpath.save,
//         systemTypesModule.buttons().value.save
//       );

//       cy.writeFile(filePath, data);

//       commonP.verifyAlertMessage(
//         commonX.alert().xpath.alert,
//         "SystemType created"
//       );
//     }
//   });
// }

// export function search_systemTypes(filePath) {
//   cy.readFile(filePath).then((data) => {
//     commonP.searchField(
//       systemTypesModule.systemTypes().xpath.search,
//       data.name
//     );

//     for (const key in data) {
//       commonP.verifyTableData(
//         systemTypesModule.systemTypes().xpath.table_data,
//         data[key]
//       );
//     }
//   });
// }

// export function view_systemTypes(filePath) {
//   commonPageObj.viewEditArchive(commonX.crud_op().value.view);
//   cy.readFile(filePath).then((data) => {
//     commonP.verifyInputFieldValue(
//       systemTypesModule.create_systemTypes().xpath.name,
//       data.name
//     );
//     commonP.verifyInputFieldValue(
//       systemTypesModule.create_systemTypes().xpath.code,
//       data.code
//     );
//   });
// }

// export function edit_systemTypes(filePath) {
//   let data = systemTypesFakerObj();
//   commonPageObj.viewEditArchive(commonX.crud_op().value.edit);

//   commonP.inputField(
//     systemTypesModule.create_systemTypes().xpath.name,
//     data.name
//   );
//   commonP.inputField(
//     systemTypesModule.create_systemTypes().xpath.code,
//     data.code
//   );
//   commonP.clickElementWithContain(
//     systemTypesModule.buttons().xpath.save,
//     systemTypesModule.buttons().value.save
//   );

//   commonP.verifyAlertMessage(commonX.alert().xpath.alert, "Systemtype updated");
//   cy.writeFile(filePath, data);
// }

// export function verify_validation_message_name_field() {
//   let data = systemTypesFakerObj();

//   commonP.clickElementWithContain(
//     systemTypesModule.buttons().xpath.add,
//     systemTypesModule.buttons().value.add
//   );
//   // commonP.inputField(systemTypesModule.create_systemTypes().xpath.name, data.name);
//   commonP.inputField(
//     systemTypesModule.create_systemTypes().xpath.code,
//     data.code
//   );
//   commonP.clickElementWithContain(
//     systemTypesModule.buttons().xpath.save,
//     systemTypesModule.buttons().value.save
//   );
//   commonP.verifyInvalidsMessage(
//     commonX.validation_message().xpath.invalid_feedback,
//     systemTypesModule.invalid_feedback().value.empty_name
//   );

//   commonP.inputField(
//     systemTypesModule.create_systemTypes().xpath.name,
//     faker.string.alphanumeric(101)
//   );
//   commonP.clickElementWithContain(
//     systemTypesModule.buttons().xpath.save,
//     systemTypesModule.buttons().value.save
//   );
//   commonP.verifyInvalidsMessage(
//     commonX.validation_message().xpath.invalid_feedback,
//     systemTypesModule.invalid_feedback().value.name_more_than_80char
//   );
// }

// export function verify_validation_message_code_field() {
//   let data = systemTypesFakerObj();

//   commonP.clickElementWithContain(
//     systemTypesModule.buttons().xpath.add,
//     systemTypesModule.buttons().value.add
//   );
//   commonP.inputField(
//     systemTypesModule.create_systemTypes().xpath.name,
//     data.name
//   );
//   // commonP.inputField(systemTypesModule.create_systemTypes().xpath.code, data.code);
//   commonP.clickElementWithContain(
//     systemTypesModule.buttons().xpath.save,
//     systemTypesModule.buttons().value.save
//   );
//   commonP.verifyInvalidsMessage(
//     commonX.validation_message().xpath.invalid_feedback,
//     systemTypesModule.invalid_feedback().value.empty_code
//   );
//   commonP.inputField(
//     systemTypesModule.create_systemTypes().xpath.code,
//     faker.string.alphanumeric(50)
//   );
//   commonP.clickElementWithContain(
//     systemTypesModule.buttons().xpath.save,
//     systemTypesModule.buttons().value.save
//   );
//   commonP.verifyInvalidsMessage(
//     commonX.validation_message().xpath.invalid_feedback,
//     systemTypesModule.invalid_feedback().value.code_more_than_10_char
//   );
// }

// export function delete_systemTypes() {
//   commonPageObj.viewEditArchive(commonX.crud_op().value.archive);

//   commonPageObj.verifyDeleteConfirm();
//   commonPageObj.clickDeleteConfirm();

//   commonP.verifyAlertMessage(
//     commonX.alert().xpath.alert,
//     "SystemType deleted successfully"
//   );
// }
