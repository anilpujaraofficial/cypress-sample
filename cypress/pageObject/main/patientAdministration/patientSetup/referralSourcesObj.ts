// //! common
// import { faker } from "@faker-js/faker";
// import { CommonXpathAndAssertion } from "../../../helpers/xpathAndAssertion/commonXpathAndAssertion/commonXpathAndAssertion";
// import { CommonPage } from "../../../page/commonPage/commonPage";
// import { CommonPageObj } from "@pageObject/commonPageObj/commonPageObj";
// let commonPageObj = new CommonPageObj();

// //! referralSources
// import * as referralSourcesModule from "../../../helpers/xpathAndAssertion/main/patientAdministration/patientSetup/referralSources";

// import { referralSourcesFakerObj } from "@helpers/faker/fakerObj";

// let commonP = new CommonPage();
// let commonX = new CommonXpathAndAssertion();

// export function gotoreferralSourcesPage() {
//   commonPageObj.gotoPatientAdministration();

//   commonP.clickButtonForceTrue(commonX.sideMenuBar().menu_unfold);

//   commonP.clickElementWithContain(
//     commonX.sideMenuBar().mainTab,
//     "Patient Setup"
//   );
//   commonP.clickElementWithContain(
//     commonX.sideMenuBar().subTab,
//     "Referral Sources"
//   );
//   commonP.urlVerify("/referralsources");
// }

// export function create_referralSources(filePath) {
//   let data = referralSourcesFakerObj();
//   cy.task("checkFileExists", filePath).then((bool) => {
//     if (!bool) {
//       commonP.clickElementWithContain(
//         referralSourcesModule.buttons().xpath.add,
//         referralSourcesModule.buttons().value.add
//       );
//       commonP.inputField(
//         referralSourcesModule.create_referralSources().xpath.name,
//         data.name
//       );

//       commonP.clickElementWithContain(
//         referralSourcesModule.buttons().xpath.save,
//         referralSourcesModule.buttons().value.save
//       );

//       cy.writeFile(filePath, data);

//       commonP.verifyAlertMessage(
//         commonX.alert().xpath.alert,
//         "Referral Source Created"
//       );
//     }
//   });
// }

// export function search_referralSources(filePath) {
//   cy.readFile(filePath).then((data) => {
//     commonP.searchField(
//       referralSourcesModule.referralSources().xpath.search,
//       data.name
//     );
//     commonP.verifyTableData(
//       referralSourcesModule.referralSources().xpath.table_data,
//       data.name
//     );
//   });
// }

// export function view_referralSources(filePath) {
//   commonPageObj.viewEditArchive(commonX.crud_op().value.view);
//   cy.readFile(filePath).then((data) => {
//     commonP.verifyInputFieldValue(
//       referralSourcesModule.create_referralSources().xpath.name,
//       data.name
//     );
//   });
// }

// export function edit_referralSources(filePath) {
//   let data = referralSourcesFakerObj();
//   commonPageObj.viewEditArchive(commonX.crud_op().value.edit);

//   commonP.inputField(
//     referralSourcesModule.create_referralSources().xpath.name,
//     data.name
//   );

//   commonP.clickElementWithContain(
//     referralSourcesModule.buttons().xpath.save,
//     referralSourcesModule.buttons().value.save
//   );

//   cy.writeFile(filePath, data);

//   commonP.verifyAlertMessage(
//     commonX.alert().xpath.alert,
//     "Referral Source Updated"
//   );
// }

// export function verify_validation_message_name_field() {
//   commonP.clickElementWithContain(
//     referralSourcesModule.buttons().xpath.add,
//     referralSourcesModule.buttons().value.add
//   );

//   // commonP.inputField(
//   //   referralSourcesModule.create_referralSources().xpath.name,
//   //   data.name
//   // );

//   commonP.clickElementWithContain(
//     referralSourcesModule.buttons().xpath.save,
//     referralSourcesModule.buttons().value.save
//   );
//   commonP.verifyInvalidsMessage(
//     commonX.validation_message().xpath.invalid_feedback,
//     referralSourcesModule.invalid_feedback().value.empty_name
//   );

//   commonP.inputField(
//     referralSourcesModule.create_referralSources().xpath.name,
//     faker.string.alphanumeric(201)
//   );
//   commonP.clickElementWithContain(
//     referralSourcesModule.buttons().xpath.save,
//     referralSourcesModule.buttons().value.save
//   );
//   commonP.verifyInvalidsMessage(
//     commonX.validation_message().xpath.invalid_feedback,
//     referralSourcesModule.invalid_feedback().value.name_more_than_200char
//   );
// }

// export function delete_referralSources() {
//   commonPageObj.viewEditArchive(commonX.crud_op().value.archive);

//   commonPageObj.verifyDeleteConfirm();
//   commonPageObj.clickDeleteConfirm();

//   commonP.verifyAlertMessage(
//     commonX.alert().xpath.alert,
//     "Referral Source deleted successfully"
//   );
// }
