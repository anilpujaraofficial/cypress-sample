// //! common
// import { faker } from "@faker-js/faker";
// import { CommonXpathAndAssertion } from "../../../helpers/xpathAndAssertion/commonXpathAndAssertion/commonXpathAndAssertion";
// import { CommonPage } from "../../../page/commonPage/commonPage";
// import { CommonPageObj } from "@pageObject/commonPageObj/commonPageObj";
// let commonPageObj = new CommonPageObj();

// //! fractionSetup
// import * as fractionSetupModule from "../../../helpers/xpathAndAssertion/main/patientAdministration/patientSetup/fractionSetup";

// import { fractionSetupFakerObj } from "@helpers/faker/fakerObj";

// let commonP = new CommonPage();

// export function gotoFractionSetupPage() {
//   commonPageObj.gotoPatientAdministration();

//   commonP.clickButtonForceTrue(commonX.sideMenuBar().menu_unfold);

//   commonP.clickElementWithContain(
//     commonX.sideMenuBar().mainTab,
//     "Patient Setup"
//   );
//   commonP.clickForceElementWithContain(
//     commonX.sideMenuBar().subTab,
//     "Fraction Setup"
//   );
//   commonP.urlVerify("/fractions");
// }

// export function create_fractionSetup(filePath) {
//   let data = fractionSetupFakerObj();
//   cy.task("checkFileExists", filePath).then((bool) => {
//     if (!bool) {
//       commonP.clickElementWithContain(
//         fractionSetupModule.buttons().xpath.add,
//         fractionSetupModule.buttons().value.add
//       );
//       commonP.clickButton(
//         fractionSetupModule.create_fractionSetup().xpath.testRadio
//       );
//       commonP.searchField(
//         fractionSetupModule.create_fractionSetup().xpath.test_name,
//         "CBC"
//       );
//       commonP.selectByTitle("CBC");
//       commonP.clickButton(
//         fractionSetupModule.create_fractionSetup().xpath.rateRadio
//       );
//       commonP.inputField(
//         fractionSetupModule.create_fractionSetup().xpath.fraction_rate,
//         "500"
//       );

//       commonP.clickButton(fractionSetupModule.create_fractionSetup().xpath.op);

//       commonP.inputField(
//         fractionSetupModule.create_fractionSetup().xpath.desc,
//         data.desc
//       );
//       commonP.inputField(
//         fractionSetupModule.create_fractionSetup().xpath.fad,
//         data.fad
//       );

//       commonP.searchField(
//         fractionSetupModule.create_fractionSetup().xpath.ptc,
//         "GEN"
//       );
//       commonP.selectByTitle("GEN");
//       commonP.clickButton(
//         fractionSetupModule.create_fractionSetup().xpath.rateRadio
//       );

//       commonP.clickElementWithContain(
//         fractionSetupModule.buttons().xpath.save,
//         fractionSetupModule.buttons().value.save
//       );

//       commonP.verifyAlertMessage(
//         commonX.alert().xpath.alert,
//         "FractionSetup created"
//       );
//       cy.writeFile(filePath, data);
//     }
//   });
// }

// export function search_fractionSetup(filePath) {
//   cy.readFile(filePath).then((data) => {
//     commonP.searchField(
//       fractionSetupModule.fractionSetup().xpath.search,
//       data.name
//     );

//     for (const key in data) {
//       commonP.verifyTableData(
//         fractionSetupModule.fractionSetup().xpath.table_data,
//         data[key]
//       );
//     }
//   });
// }

// export function view_fractionSetup(filePath) {
//   commonPageObj.viewEditArchive(commonX.crud_op().value.view);
//   cy.readFile(filePath).then((data) => {
//     commonP.verifyInputFieldValue(
//       fractionSetupModule.create_fractionSetup().xpath.name,
//       data.name
//     );
//     commonP.verifyInputFieldValue(
//       fractionSetupModule.create_fractionSetup().xpath.code,
//       data.code
//     );
//   });
// }

// export function edit_fractionSetup(filePath) {
//   let data = fractionSetupFakerObj();
//   commonPageObj.viewEditArchive(commonX.crud_op().value.edit);

//   commonP.inputField(
//     fractionSetupModule.create_fractionSetup().xpath.name,
//     data.name
//   );
//   commonP.inputField(
//     fractionSetupModule.create_fractionSetup().xpath.code,
//     data.code
//   );
//   commonP.clickElementWithContain(
//     fractionSetupModule.buttons().xpath.save,
//     fractionSetupModule.buttons().value.save
//   );

//   cy.writeFile(filePath, data);

//   commonP.verifyAlertMessage(
//     commonX.alert().xpath.alert,
//     "fractionSetup updated"
//   );
// }

// export function verify_validation_message_name_field() {
//   let data = fractionSetupFakerObj();

//   commonP.clickElementWithContain(
//     fractionSetupModule.buttons().xpath.add,
//     fractionSetupModule.buttons().value.add
//   );
//   // commonP.inputField(fractionSetupModule.create_fractionSetup().xpath.name, data.name);
//   commonP.inputField(
//     fractionSetupModule.create_fractionSetup().xpath.code,
//     data.code
//   );
//   commonP.clickElementWithContain(
//     fractionSetupModule.buttons().xpath.save,
//     fractionSetupModule.buttons().value.save
//   );
//   commonP.verifyInvalidsMessage(
//     commonX.validation_message().xpath.invalid_feedback,
//     fractionSetupModule.invalid_feedback().value.empty_name
//   );

//   commonP.inputField(
//     fractionSetupModule.create_fractionSetup().xpath.name,
//     faker.string.alphanumeric(101)
//   );
//   commonP.clickElementWithContain(
//     fractionSetupModule.buttons().xpath.save,
//     fractionSetupModule.buttons().value.save
//   );
//   commonP.verifyInvalidsMessage(
//     commonX.validation_message().xpath.invalid_feedback,
//     fractionSetupModule.invalid_feedback().value.name_more_than_100char
//   );
// }

// export function verify_validation_message_code_field() {
//   let data = fractionSetupFakerObj();

//   commonP.clickElementWithContain(
//     fractionSetupModule.buttons().xpath.add,
//     fractionSetupModule.buttons().value.add
//   );
//   commonP.inputField(
//     fractionSetupModule.create_fractionSetup().xpath.name,
//     data.name
//   );
//   // commonP.inputField(fractionSetupModule.create_fractionSetup().xpath.code, data.code);
//   commonP.clickElementWithContain(
//     fractionSetupModule.buttons().xpath.save,
//     fractionSetupModule.buttons().value.save
//   );
//   commonP.verifyInvalidsMessage(
//     commonX.validation_message().xpath.invalid_feedback,
//     fractionSetupModule.invalid_feedback().value.empty_code
//   );
//   commonP.inputField(
//     fractionSetupModule.create_fractionSetup().xpath.code,
//     faker.string.alphanumeric(6)
//   );
//   commonP.clickElementWithContain(
//     fractionSetupModule.buttons().xpath.save,
//     fractionSetupModule.buttons().value.save
//   );
//   commonP.verifyInvalidsMessage(
//     commonX.validation_message().xpath.invalid_feedback,
//     fractionSetupModule.invalid_feedback().value.code_more_than_5_char
//   );
// }

// export function delete_fractionSetup() {
//   commonPageObj.viewEditArchive(commonX.crud_op().value.archive);

//   commonPageObj.verifyDeleteConfirm();
//   commonPageObj.clickDeleteConfirm();

//   commonP.verifyAlertMessage(
//     commonX.alert().xpath.alert,
//     "fractionSetup deleted successfully"
//   );
// }
