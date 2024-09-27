// //! common
// import { faker } from "@faker-js/faker";
// import { CommonXpathAndAssertion } from "../../../helpers/xpathAndAssertion/commonXpathAndAssertion/commonXpathAndAssertion";
// import { CommonPage } from "../../../page/commonPage/commonPage";
// import { CommonPageObj } from "@pageObject/commonPageObj/commonPageObj";
// let commonPageObj = new CommonPageObj();

// //! schemes
// import * as schemesModule from "../../../helpers/xpathAndAssertion/main/patientAdministration/patientSetup/schemes";
// import { schemeFakerObj } from "@helpers/faker/fakerObj";
// import { jsonFilePath } from "@helpers/filePath/lab";

// let commonP = new CommonPage();

// export function gotoSchemePage() {
//   commonPageObj.gotoPatientAdministration();
//   commonP.clickButtonForceTrue(commonX.sideMenuBar().menu_unfold);
//   commonP.clickElementWithContain(
//     commonX.sideMenuBar().mainTab,
//     "Patient Setup"
//   );
//   commonP.clickElementWithContain(commonX.sideMenuBar().subTab, "Schemes");
//   commonP.urlVerify("/schemes");
// }

// export function create_schemes(filePath) {
//   let data = schemeFakerObj();
//   cy.task("checkFileExists", filePath).then((bool) => {
//     if (!bool) {
//       commonP.clickElementWithContain(
//         schemesModule.buttons().xpath.add,
//         schemesModule.buttons().value.add
//       );

//       commonP.inputField(schemesModule.create_schemes().xpath.name, data.name);
//       commonP.inputField(
//         schemesModule.create_schemes().xpath.username,
//         data.username
//       );

//       commonP.clickButtonForceTrue(
//         schemesModule.create_schemes().xpath.community
//       );
//       // ! communities
//       cy.readFile(patientAdministration.patientSetup.scheme.community).then(
//         (res) => {
//           commonP.searchField(
//             schemesModule.create_schemes().xpath.community,
//             res.name
//           );
//           commonP.clickElementWithContain(
//             commonX.dropDownSelectOption().xpath.select_item_option,
//             res.name
//           );
//           data.community = res.name;
//         }
//       );

//       commonP.inputField(schemesModule.create_schemes().xpath.code, data.code);
//       commonP.inputField(
//         schemesModule.create_schemes().xpath.member_prefix,
//         data.member_prefix
//       );

//       commonP.inputField(
//         schemesModule.create_schemes().xpath.display_order,
//         data.display_order
//       );

//       //! enter discount

//       commonP.inputField(
//         schemesModule.create_schemes().xpath.discount.Registration,
//         data.discount.Registration
//       );

//       commonP.inputField(
//         schemesModule.create_schemes().xpath.discount.OPD,
//         data.discount.OPD
//       );

//       commonP.inputField(
//         schemesModule.create_schemes().xpath.discount.IPD,
//         data.discount.IPD
//       );

//       commonP.inputField(
//         schemesModule.create_schemes().xpath.discount.Admission,
//         data.discount.Admission
//       );

//       commonP.inputField(
//         schemesModule.create_schemes().xpath.discount.Pharmacy_OP,
//         data.discount.Pharmacy_OP
//       );

//       commonP.inputField(
//         schemesModule.create_schemes().xpath.discount.Pharmacy_IP,
//         data.discount.Pharmacy_IP
//       );

//       commonP.inputField(
//         schemesModule.create_schemes().xpath.discount.Bed,
//         data.discount.Bed
//       );

//       commonP.clickElementWithContain(
//         schemesModule.buttons().xpath.save,
//         schemesModule.buttons().value.save
//       );

//       commonP.verifyAlertMessage(commonX.alert().xpath.alert, "Scheme created");

//       cy.writeFile(filePath, data);
//     }
//   });
// }

// export function search_schemes(filePath) {
//   cy.readFile(filePath).then((data) => {
//     commonP.searchField(schemesModule.schemes().xpath.search, data.name);
//     commonP.verifyTableData(
//       schemesModule.schemes().xpath.table_data,
//       data.name
//     );

//     commonP.verifyTableData(
//       schemesModule.schemes().xpath.table_data,
//       data.username
//     );
//     commonP.verifyTableData(
//       schemesModule.schemes().xpath.table_data,
//       data.community
//     );
//     //todo
//     // commonP.verifyTableData(
//     //   schemesModule.schemes().xpath.table_data,
//     //   data.code
//     // );
//   });
// }

// export function view_schemes(filePath) {
//   commonPageObj.viewEditArchive(commonX.crud_op().value.view);
//   cy.readFile(filePath).then((data) => {
//     commonP.verifyInputFieldValue(
//       schemesModule.create_schemes().xpath.name,
//       data.name
//     );

//     commonP.verifyInputFieldValue(
//       schemesModule.create_schemes().xpath.username,
//       data.username
//     );

//     commonP.verifyTitleValue(data.community);
//   });
// }

// export function edit_schemes(filePath) {
//   let data = schemeFakerObj();
//   commonPageObj.viewEditArchive(commonX.crud_op().value.edit);

//   commonP.inputField(schemesModule.create_schemes().xpath.name, data.name);
//   commonP.inputField(
//     schemesModule.create_schemes().xpath.username,
//     data.username
//   );

//   commonP.clickButtonForceTrue(schemesModule.create_schemes().xpath.community);
//   // ! communities
//   cy.readFile(patientAdministration.patientSetup.scheme.community).then(
//     (res) => {
//       commonP.searchField(
//         schemesModule.create_schemes().xpath.community,
//         res.name
//       );
//       commonP.clickElementWithContain(
//         commonX.dropDownSelectOption().xpath.select_item_option,
//         res.name
//       );
//       data.community = res.name;
//     }
//   );

//   commonP.inputField(schemesModule.create_schemes().xpath.code, data.code);
//   commonP.inputField(
//     schemesModule.create_schemes().xpath.member_prefix,
//     data.member_prefix + data.display_order
//   );
//   commonP.inputField(
//     schemesModule.create_schemes().xpath.display_order,
//     data.display_order
//   );

//   //! enter discount

//   commonP.inputField(
//     schemesModule.create_schemes().xpath.discount.Registration,
//     data.discount.Registration
//   );

//   commonP.inputField(
//     schemesModule.create_schemes().xpath.discount.OPD,
//     data.discount.OPD
//   );

//   commonP.inputField(
//     schemesModule.create_schemes().xpath.discount.IPD,
//     data.discount.IPD
//   );

//   commonP.inputField(
//     schemesModule.create_schemes().xpath.discount.Admission,
//     data.discount.Admission
//   );

//   commonP.inputField(
//     schemesModule.create_schemes().xpath.discount.Pharmacy_OP,
//     data.discount.Pharmacy_OP
//   );

//   commonP.inputField(
//     schemesModule.create_schemes().xpath.discount.Pharmacy_IP,
//     data.discount.Pharmacy_IP
//   );

//   commonP.inputField(
//     schemesModule.create_schemes().xpath.discount.Bed,
//     data.discount.Bed
//   );

//   commonP.clickElementWithContain(
//     schemesModule.buttons().xpath.save,
//     schemesModule.buttons().value.save
//   );

//   commonP.verifyAlertMessage(commonX.alert().xpath.alert, "Scheme updated");

//   cy.writeFile(filePath, data);
// }

// export function verify_validation_message_name_field() {
//   let data = schemeFakerObj();

//   commonP.clickElementWithContain(
//     schemesModule.buttons().xpath.add,
//     schemesModule.buttons().value.add
//   );

//   // commonP.inputField(schemesModule.create_schemes().xpath.name, data.name);
//   commonP.inputField(
//     schemesModule.create_schemes().xpath.username,
//     data.username
//   );

//   commonP.clickButtonForceTrue(schemesModule.create_schemes().xpath.community);
//   // ! communities
//   cy.readFile(patientAdministration.patientSetup.scheme.community).then(
//     (res) => {
//       commonP.searchField(
//         schemesModule.create_schemes().xpath.community,
//         res.name
//       );
//       commonP.clickElementWithContain(
//         commonX.dropDownSelectOption().xpath.select_item_option,
//         res.name
//       );
//       data.community = res.name;
//     }
//   );

//   commonP.inputField(schemesModule.create_schemes().xpath.code, data.code);
//   commonP.inputField(
//     schemesModule.create_schemes().xpath.member_prefix,
//     data.member_prefix + data.display_order
//   );
//   commonP.inputField(
//     schemesModule.create_schemes().xpath.display_order,
//     data.display_order
//   );

//   //! enter discount

//   commonP.inputField(
//     schemesModule.create_schemes().xpath.discount.Registration,
//     data.discount.Registration
//   );

//   commonP.inputField(
//     schemesModule.create_schemes().xpath.discount.OPD,
//     data.discount.OPD
//   );

//   commonP.inputField(
//     schemesModule.create_schemes().xpath.discount.IPD,
//     data.discount.IPD
//   );

//   commonP.inputField(
//     schemesModule.create_schemes().xpath.discount.Admission,
//     data.discount.Admission
//   );

//   commonP.inputField(
//     schemesModule.create_schemes().xpath.discount.Pharmacy_OP,
//     data.discount.Pharmacy_OP
//   );

//   commonP.inputField(
//     schemesModule.create_schemes().xpath.discount.Pharmacy_IP,
//     data.discount.Pharmacy_IP
//   );

//   commonP.inputField(
//     schemesModule.create_schemes().xpath.discount.Bed,
//     data.discount.Bed
//   );

//   commonP.clickElementWithContain(
//     schemesModule.buttons().xpath.save,
//     schemesModule.buttons().value.save
//   );
//   commonP.verifyInvalidsMessage(
//     commonX.validation_message().xpath.invalid_feedback,
//     schemesModule.invalid_feedback().value.empty_name
//   );

//   commonP.inputField(
//     schemesModule.create_schemes().xpath.name,
//     faker.string.alphanumeric(100)
//   );

//   commonP.clickElementWithContain(
//     schemesModule.buttons().xpath.save,
//     schemesModule.buttons().value.save
//   );
//   commonP.verifyInvalidsMessage(
//     commonX.validation_message().xpath.invalid_feedback,
//     schemesModule.invalid_feedback().value.name_more_than_50char
//   );
// }

// export function verify_validation_message_username_field() {
//   let data = schemeFakerObj();

//   commonP.clickElementWithContain(
//     schemesModule.buttons().xpath.add,
//     schemesModule.buttons().value.add
//   );

//   commonP.inputField(schemesModule.create_schemes().xpath.name, data.name);

//   // commonP.inputField(
//   //   schemesModule.create_schemes().xpath.username,
//   //   data.username
//   // );

//   commonP.clickButtonForceTrue(schemesModule.create_schemes().xpath.community);
//   // ! communities
//   cy.readFile(patientAdministration.patientSetup.scheme.community).then(
//     (res) => {
//       commonP.searchField(
//         schemesModule.create_schemes().xpath.community,
//         res.name
//       );
//       commonP.clickElementWithContain(
//         commonX.dropDownSelectOption().xpath.select_item_option,
//         res.name
//       );
//       data.community = res.name;
//     }
//   );

//   commonP.inputField(schemesModule.create_schemes().xpath.code, data.code);
//   commonP.inputField(
//     schemesModule.create_schemes().xpath.member_prefix,
//     data.member_prefix + data.display_order
//   );
//   commonP.inputField(
//     schemesModule.create_schemes().xpath.display_order,
//     data.display_order
//   );

//   //! enter discount

//   commonP.inputField(
//     schemesModule.create_schemes().xpath.discount.Registration,
//     data.discount.Registration
//   );

//   commonP.inputField(
//     schemesModule.create_schemes().xpath.discount.OPD,
//     data.discount.OPD
//   );

//   commonP.inputField(
//     schemesModule.create_schemes().xpath.discount.IPD,
//     data.discount.IPD
//   );

//   commonP.inputField(
//     schemesModule.create_schemes().xpath.discount.Admission,
//     data.discount.Admission
//   );

//   commonP.inputField(
//     schemesModule.create_schemes().xpath.discount.Pharmacy_OP,
//     data.discount.Pharmacy_OP
//   );

//   commonP.inputField(
//     schemesModule.create_schemes().xpath.discount.Pharmacy_IP,
//     data.discount.Pharmacy_IP
//   );

//   commonP.inputField(
//     schemesModule.create_schemes().xpath.discount.Bed,
//     data.discount.Bed
//   );

//   commonP.clickElementWithContain(
//     schemesModule.buttons().xpath.save,
//     schemesModule.buttons().value.save
//   );
//   commonP.verifyInvalidsMessage(
//     commonX.validation_message().xpath.invalid_feedback,
//     schemesModule.invalid_feedback().value.empty_username
//   );

//   commonP.inputField(
//     schemesModule.create_schemes().xpath.username,
//     faker.string.alphanumeric(21)
//   );

//   commonP.clickElementWithContain(
//     schemesModule.buttons().xpath.save,
//     schemesModule.buttons().value.save
//   );
//   commonP.verifyInvalidsMessage(
//     commonX.validation_message().xpath.invalid_feedback,
//     schemesModule.invalid_feedback().value.username_more_tha_20char
//   );
// }

// export function verify_validation_message_code_field() {
//   let data = schemeFakerObj();

//   commonP.clickElementWithContain(
//     schemesModule.buttons().xpath.add,
//     schemesModule.buttons().value.add
//   );

//   commonP.inputField(schemesModule.create_schemes().xpath.name, data.name);
//   commonP.inputField(
//     schemesModule.create_schemes().xpath.username,
//     data.username
//   );

//   commonP.clickButtonForceTrue(schemesModule.create_schemes().xpath.community);
//   // ! communities
//   cy.readFile(patientAdministration.patientSetup.scheme.community).then(
//     (res) => {
//       commonP.searchField(
//         schemesModule.create_schemes().xpath.community,
//         res.name
//       );
//       commonP.clickElementWithContain(
//         commonX.dropDownSelectOption().xpath.select_item_option,
//         res.name
//       );
//       data.community = res.name;
//     }
//   );

//   // commonP.inputField(schemesModule.create_schemes().xpath.code, data.code);
//   commonP.inputField(
//     schemesModule.create_schemes().xpath.member_prefix,
//     data.member_prefix + data.display_order
//   );
//   commonP.inputField(
//     schemesModule.create_schemes().xpath.display_order,
//     data.display_order
//   );

//   //! enter discount

//   commonP.inputField(
//     schemesModule.create_schemes().xpath.discount.Registration,
//     data.discount.Registration
//   );

//   commonP.inputField(
//     schemesModule.create_schemes().xpath.discount.OPD,
//     data.discount.OPD
//   );

//   commonP.inputField(
//     schemesModule.create_schemes().xpath.discount.IPD,
//     data.discount.IPD
//   );

//   commonP.inputField(
//     schemesModule.create_schemes().xpath.discount.Admission,
//     data.discount.Admission
//   );

//   commonP.inputField(
//     schemesModule.create_schemes().xpath.discount.Pharmacy_OP,
//     data.discount.Pharmacy_OP
//   );

//   commonP.inputField(
//     schemesModule.create_schemes().xpath.discount.Pharmacy_IP,
//     data.discount.Pharmacy_IP
//   );

//   commonP.inputField(
//     schemesModule.create_schemes().xpath.discount.Bed,
//     data.discount.Bed
//   );

//   commonP.clickElementWithContain(
//     schemesModule.buttons().xpath.save,
//     schemesModule.buttons().value.save
//   );
//   commonP.verifyInvalidsMessage(
//     commonX.validation_message().xpath.invalid_feedback,
//     schemesModule.invalid_feedback().value.empty_code
//   );

//   commonP.inputField(
//     schemesModule.create_schemes().xpath.code,
//     faker.string.alphanumeric(100)
//   );

//   commonP.clickElementWithContain(
//     schemesModule.buttons().xpath.save,
//     schemesModule.buttons().value.save
//   );
//   commonP.verifyInvalidsMessage(
//     commonX.validation_message().xpath.invalid_feedback,
//     schemesModule.invalid_feedback().value.code_more_than_10char
//   );
// }

// export function delete_schemes() {
//   commonPageObj.viewEditArchive(commonX.crud_op().value.archive);

//   commonPageObj.verifyDeleteConfirm();
//   commonPageObj.clickDeleteConfirm();

//   commonP.verifyAlertMessage(
//     commonX.alert().xpath.alert,
//     "Scheme deleted successfully"
//   );
// }
