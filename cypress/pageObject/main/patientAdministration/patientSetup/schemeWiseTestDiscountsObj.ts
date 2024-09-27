// //! common

// import { CommonXpathAndAssertion } from "../../../helpers/xpathAndAssertion/commonXpathAndAssertion/commonXpathAndAssertion";
// import { CommonPage } from "../../../page/commonPage/commonPage";
// import { CommonPageObj } from "@pageObject/commonPageObj/commonPageObj";
// let commonPageObj = new CommonPageObj();

// //! schemeWiseTestDiscounts
// import * as schemeWiseTestDiscountsModule from "../../../helpers/xpathAndAssertion/main/patientAdministration/patientSetup/schemeWiseTestDiscounts";

// import { schemeWiseTestDiscountsFakerObj } from "@helpers/faker/fakerObj";
// import { jsonFilePath } from "@helpers/filePath/lab";

// let commonP = new CommonPage();
// let commonX = new CommonXpathAndAssertion();

// export function gotoSchemeWiseTestDiscountsPage() {
//   commonPageObj.gotoPatientAdministration();

//   commonP.clickButtonForceTrue(commonX.sideMenuBar().menu_unfold);

//   commonP.clickElementWithContain(
//     commonX.sideMenuBar().mainTab,
//     "Patient Setup"
//   );
//   commonP.clickForceElementWithContain(
//     commonX.sideMenuBar().subTab,
//     "Scheme Wise Test Discount"
//   );
//   commonP.urlVerify("/schemewisetestdiscounts");
// }

// export function create_schemeWiseTestDiscounts(filePath) {
//   let data = schemeWiseTestDiscountsFakerObj();
//   cy.task("checkFileExists", filePath).then((bool) => {
//     if (!bool) {
//       commonP.clickElementWithContain(
//         schemeWiseTestDiscountsModule.buttons().xpath.add,
//         schemeWiseTestDiscountsModule.buttons().value.add
//       );

//       cy.readFile(
//         patientAdministration.patientSetup.schemeWiseTestDiscounts.schemes
//       ).then((res) => {
//         commonP.searchField(
//           schemeWiseTestDiscountsModule.create_schemeWiseTestDiscounts().xpath
//             .scheme,
//           res.name
//         );

//         commonP.clickElementWithContain(
//           commonX.dropDownSelectOption().xpath.select_item_option,
//           res.name
//         );

//         data.scheme = res.name;
//       });

//       cy.readFile(
//         patientAdministration.patientSetup.schemeWiseTestDiscounts.patientType
//       ).then((res) => {
//         commonP.searchField(
//           schemeWiseTestDiscountsModule.create_schemeWiseTestDiscounts().xpath
//             .patient_type_code,
//           res.code
//         );

//         commonP.clickElementWithContain(
//           commonX.dropDownSelectOption().xpath.select_item_option,
//           res.code
//         );
//         data.patientType = res.code;
//       });

//       commonP.searchField(
//         schemeWiseTestDiscountsModule.create_schemeWiseTestDiscounts().xpath
//           .test_name,
//         "CBC"
//       );
//       commonP.clickElementWithContain(
//         commonX.dropDownSelectOption().xpath.select_item_option,
//         "CBC"
//       );
//       data.test_name = "CBC";

//       commonP.inputField(
//         schemeWiseTestDiscountsModule.create_schemeWiseTestDiscounts().xpath
//           .reg_disper,
//         data.reg_disper
//       );

//       commonP.inputField(
//         schemeWiseTestDiscountsModule.create_schemeWiseTestDiscounts().xpath
//           .op_disper,
//         data.op_disper
//       );
//       commonP.inputField(
//         schemeWiseTestDiscountsModule.create_schemeWiseTestDiscounts().xpath
//           .ip_disper,
//         data.ip_disper
//       );
//       commonP.inputField(
//         schemeWiseTestDiscountsModule.create_schemeWiseTestDiscounts().xpath
//           .admission_disper,
//         data.admission_disper
//       );

//       commonP.inputField(
//         schemeWiseTestDiscountsModule.create_schemeWiseTestDiscounts().xpath
//           .bed_disper,
//         data.bed_disper
//       );

//       commonP.clickElementWithContain(
//         schemeWiseTestDiscountsModule.buttons().xpath.save,
//         schemeWiseTestDiscountsModule.buttons().value.save
//       );

//       commonP.verifyAlertMessage(
//         commonX.alert().xpath.alert,
//         "Scheme Wise Test Discount created"
//       );

//       cy.writeFile(filePath, data);
//     }
//   });
// }

// export function search_schemeWiseTestDiscounts(filePath) {
//   cy.readFile(filePath).then((data) => {
//     commonP.searchField(
//       schemeWiseTestDiscountsModule.schemeWiseTestDiscounts().xpath.search,
//       data.scheme
//     );
//     commonP.verifyTableData(
//       schemeWiseTestDiscountsModule.schemeWiseTestDiscounts().xpath.table_data,
//       data.scheme
//     );
//   });
// }

// export function view_schemeWiseTestDiscounts(filePath) {
//   commonPageObj.viewEditArchive(commonX.crud_op().value.view);
//   cy.readFile(filePath).then((data) => {
//     commonP.verifyTitleValue(data.scheme);

//     commonP.verifyTitleValue(data.patientType);

//     commonP.verifyInputFieldValue(
//       schemeWiseTestDiscountsModule.create_schemeWiseTestDiscounts().xpath
//         .reg_disper,
//       data.reg_disper
//     );

//     commonP.verifyInputFieldValue(
//       schemeWiseTestDiscountsModule.create_schemeWiseTestDiscounts().xpath
//         .op_disper,
//       data.op_disper
//     );
//     commonP.verifyInputFieldValue(
//       schemeWiseTestDiscountsModule.create_schemeWiseTestDiscounts().xpath
//         .ip_disper,
//       data.ip_disper
//     );
//     commonP.verifyInputFieldValue(
//       schemeWiseTestDiscountsModule.create_schemeWiseTestDiscounts().xpath
//         .admission_disper,
//       data.admission_disper
//     );

//     commonP.verifyInputFieldValue(
//       schemeWiseTestDiscountsModule.create_schemeWiseTestDiscounts().xpath
//         .bed_disper,
//       data.bed_disper
//     );
//   });
// }

// export function edit_schemeWiseTestDiscounts(filePath) {
//   let data = schemeWiseTestDiscountsFakerObj();
//   commonPageObj.viewEditArchive(commonX.crud_op().value.edit);

//   cy.readFile(
//     patientAdministration.patientSetup.schemeWiseTestDiscounts.schemes
//   ).then((res) => {
//     commonP.searchField(
//       schemeWiseTestDiscountsModule.create_schemeWiseTestDiscounts().xpath
//         .scheme,
//       res.name
//     );

//     commonP.clickElementWithContain(
//       commonX.dropDownSelectOption().xpath.select_item_option,
//       res.name
//     );

//     data.scheme = res.name;
//   });

//   cy.readFile(
//     patientAdministration.patientSetup.schemeWiseTestDiscounts.patientType
//   ).then((res) => {
//     commonP.searchField(
//       schemeWiseTestDiscountsModule.create_schemeWiseTestDiscounts().xpath
//         .patient_type_code,
//       res.code
//     );

//     commonP.clickElementWithContain(
//       commonX.dropDownSelectOption().xpath.select_item_option,
//       res.code
//     );
//     data.patientType = res.code;
//   });

//   commonP.inputField(
//     schemeWiseTestDiscountsModule.create_schemeWiseTestDiscounts().xpath
//       .reg_disper,
//     data.reg_disper
//   );

//   commonP.inputField(
//     schemeWiseTestDiscountsModule.create_schemeWiseTestDiscounts().xpath
//       .op_disper,
//     data.op_disper
//   );
//   commonP.inputField(
//     schemeWiseTestDiscountsModule.create_schemeWiseTestDiscounts().xpath
//       .ip_disper,
//     data.ip_disper
//   );
//   commonP.inputField(
//     schemeWiseTestDiscountsModule.create_schemeWiseTestDiscounts().xpath
//       .admission_disper,
//     data.admission_disper
//   );

//   commonP.inputField(
//     schemeWiseTestDiscountsModule.create_schemeWiseTestDiscounts().xpath
//       .bed_disper,
//     data.bed_disper
//   );

//   commonP.clickElementWithContain(
//     schemeWiseTestDiscountsModule.buttons().xpath.save,
//     schemeWiseTestDiscountsModule.buttons().value.save
//   );

//   commonP.verifyAlertMessage(
//     commonX.alert().xpath.alert,
//     "Scheme Wise Test Discount updated"
//   );

//   cy.writeFile(filePath, data);
// }

// export function verify_validation_message_name_field() {
//   let data = schemeWiseTestDiscountsFakerObj();

//   commonP.clickElementWithContain(
//     schemeWiseTestDiscountsModule.buttons().xpath.add,
//     schemeWiseTestDiscountsModule.buttons().value.add
//   );

//   // cy.readFile(
//   //    patientAdministration.patientSetup
//   //     .schemeWiseTestDiscounts.schemes
//   // ).then((res) => {
//   //   commonP.searchField(
//   //     schemeWiseTestDiscountsModule.create_schemeWiseTestDiscounts().xpath
//   //       .scheme,
//   //     res.name
//   //   );

//   //   commonP.clickElementWithContain(
//   //     commonX.dropDownSelectOption().xpath.select_item_option,
//   //     res.name
//   //   );

//   //   data.scheme = res.name;
//   // });

//   cy.readFile(
//     patientAdministration.patientSetup.schemeWiseTestDiscounts.patientType
//   ).then((res) => {
//     commonP.searchField(
//       schemeWiseTestDiscountsModule.create_schemeWiseTestDiscounts().xpath
//         .patient_type_code,
//       res.code
//     );

//     commonP.clickElementWithContain(
//       commonX.dropDownSelectOption().xpath.select_item_option,
//       res.code
//     );
//     data.patientType = res.code;
//   });

//   commonP.searchField(
//     schemeWiseTestDiscountsModule.create_schemeWiseTestDiscounts().xpath
//       .test_name,
//     "CBC"
//   );
//   commonP.clickElementWithContain(
//     commonX.dropDownSelectOption().xpath.select_item_option,
//     "CBC"
//   );
//   data.test_name = "CBC";

//   commonP.inputField(
//     schemeWiseTestDiscountsModule.create_schemeWiseTestDiscounts().xpath
//       .reg_disper,
//     data.reg_disper
//   );

//   commonP.inputField(
//     schemeWiseTestDiscountsModule.create_schemeWiseTestDiscounts().xpath
//       .op_disper,
//     data.op_disper
//   );
//   commonP.inputField(
//     schemeWiseTestDiscountsModule.create_schemeWiseTestDiscounts().xpath
//       .ip_disper,
//     data.ip_disper
//   );
//   commonP.inputField(
//     schemeWiseTestDiscountsModule.create_schemeWiseTestDiscounts().xpath
//       .admission_disper,
//     data.admission_disper
//   );

//   commonP.inputField(
//     schemeWiseTestDiscountsModule.create_schemeWiseTestDiscounts().xpath
//       .bed_disper,
//     data.bed_disper
//   );

//   commonP.clickElementWithContain(
//     schemeWiseTestDiscountsModule.buttons().xpath.save,
//     schemeWiseTestDiscountsModule.buttons().value.save
//   );
//   commonP.verifyInvalidsMessage(
//     commonX.validation_message().xpath.invalid_feedback,
//     schemeWiseTestDiscountsModule.invalid_feedback().value.empty_scheme
//   );
// }

// export function verify_validation_message_patient_type_code_field() {
//   let data = schemeWiseTestDiscountsFakerObj();

//   commonP.clickElementWithContain(
//     schemeWiseTestDiscountsModule.buttons().xpath.add,
//     schemeWiseTestDiscountsModule.buttons().value.add
//   );

//   cy.readFile(
//     patientAdministration.patientSetup.schemeWiseTestDiscounts.schemes
//   ).then((res) => {
//     commonP.searchField(
//       schemeWiseTestDiscountsModule.create_schemeWiseTestDiscounts().xpath
//         .scheme,
//       res.name
//     );

//     commonP.clickElementWithContain(
//       commonX.dropDownSelectOption().xpath.select_item_option,
//       res.name
//     );

//     data.scheme = res.name;
//   });

//   // cy.readFile(
//   //    patientAdministration.patientSetup
//   //     .schemeWiseTestDiscounts.patientType
//   // ).then((res) => {
//   //   commonP.searchField(
//   //     schemeWiseTestDiscountsModule.create_schemeWiseTestDiscounts().xpath
//   //       .patient_type_code,
//   //     res.code
//   //   );

//   //   commonP.clickElementWithContain(
//   //     commonX.dropDownSelectOption().xpath.select_item_option,
//   //     res.code
//   //   );
//   //   data.patientType = res.code;
//   // });

//   commonP.searchField(
//     schemeWiseTestDiscountsModule.create_schemeWiseTestDiscounts().xpath
//       .test_name,
//     "CBC"
//   );
//   commonP.clickElementWithContain(
//     commonX.dropDownSelectOption().xpath.select_item_option,
//     "CBC"
//   );
//   data.test_name = "CBC";

//   commonP.inputField(
//     schemeWiseTestDiscountsModule.create_schemeWiseTestDiscounts().xpath
//       .reg_disper,
//     data.reg_disper
//   );

//   commonP.inputField(
//     schemeWiseTestDiscountsModule.create_schemeWiseTestDiscounts().xpath
//       .op_disper,
//     data.op_disper
//   );
//   commonP.inputField(
//     schemeWiseTestDiscountsModule.create_schemeWiseTestDiscounts().xpath
//       .ip_disper,
//     data.ip_disper
//   );
//   commonP.inputField(
//     schemeWiseTestDiscountsModule.create_schemeWiseTestDiscounts().xpath
//       .admission_disper,
//     data.admission_disper
//   );

//   commonP.inputField(
//     schemeWiseTestDiscountsModule.create_schemeWiseTestDiscounts().xpath
//       .bed_disper,
//     data.bed_disper
//   );

//   commonP.clickElementWithContain(
//     schemeWiseTestDiscountsModule.buttons().xpath.save,
//     schemeWiseTestDiscountsModule.buttons().value.save
//   );
//   commonP.verifyInvalidsMessage(
//     commonX.validation_message().xpath.invalid_feedback,
//     schemeWiseTestDiscountsModule.invalid_feedback().value
//       .empty_patient_type_code
//   );
// }

// export function verify_validation_message_Discount_Percentage_field() {
//   let data = schemeWiseTestDiscountsFakerObj();

//   commonP.clickElementWithContain(
//     schemeWiseTestDiscountsModule.buttons().xpath.add,
//     schemeWiseTestDiscountsModule.buttons().value.add
//   );

//   cy.readFile(
//     patientAdministration.patientSetup.schemeWiseTestDiscounts.schemes
//   ).then((res) => {
//     commonP.searchField(
//       schemeWiseTestDiscountsModule.create_schemeWiseTestDiscounts().xpath
//         .scheme,
//       res.name
//     );

//     commonP.clickElementWithContain(
//       commonX.dropDownSelectOption().xpath.select_item_option,
//       res.name
//     );

//     data.scheme = res.name;
//   });

//   cy.readFile(
//     patientAdministration.patientSetup.schemeWiseTestDiscounts.patientType
//   ).then((res) => {
//     commonP.searchField(
//       schemeWiseTestDiscountsModule.create_schemeWiseTestDiscounts().xpath
//         .patient_type_code,
//       res.code
//     );

//     commonP.clickElementWithContain(
//       commonX.dropDownSelectOption().xpath.select_item_option,
//       res.code
//     );
//     data.patientType = res.code;
//   });

//   commonP.searchField(
//     schemeWiseTestDiscountsModule.create_schemeWiseTestDiscounts().xpath
//       .test_name,
//     "CBC"
//   );
//   commonP.clickElementWithContain(
//     commonX.dropDownSelectOption().xpath.select_item_option,
//     "CBC"
//   );
//   data.test_name = "CBC";

//   commonP.clickElementWithContain(
//     schemeWiseTestDiscountsModule.buttons().xpath.save,
//     schemeWiseTestDiscountsModule.buttons().value.save
//   );

//   for (const i of schemeWiseTestDiscountsModule.invalid_feedback().value
//     .discount_percentage) {
//     commonP.verifyInvalidsMessage(
//       commonX.validation_message().xpath.invalid_feedback,
//       i
//     );
//   }

//   commonP.inputField(
//     schemeWiseTestDiscountsModule.create_schemeWiseTestDiscounts().xpath
//       .reg_disper,
//     data.reg_disper
//   );

//   commonP.inputField(
//     schemeWiseTestDiscountsModule.create_schemeWiseTestDiscounts().xpath
//       .op_disper,
//     data.op_disper
//   );
//   commonP.inputField(
//     schemeWiseTestDiscountsModule.create_schemeWiseTestDiscounts().xpath
//       .ip_disper,
//     data.ip_disper
//   );
//   // commonP.inputField(
//   //   schemeWiseTestDiscountsModule.create_schemeWiseTestDiscounts().xpath
//   //     .admission_disper,
//   //   data.admission_disper
//   // );

//   commonP.inputField(
//     schemeWiseTestDiscountsModule.create_schemeWiseTestDiscounts().xpath
//       .bed_disper,
//     data.bed_disper
//   );
//   commonP.clickElementWithContain(
//     schemeWiseTestDiscountsModule.buttons().xpath.save,
//     schemeWiseTestDiscountsModule.buttons().value.save
//   );

//   commonP.verifyInvalidsMessage(
//     commonX.validation_message().xpath.invalid_feedback,
//     schemeWiseTestDiscountsModule.invalid_feedback().value.empty_admission
//   );
// }

// export function delete_schemeWiseTestDiscounts() {
//   commonPageObj.viewEditArchive(commonX.crud_op().value.archive);

//   commonPageObj.verifyDeleteConfirm();
//   commonPageObj.clickDeleteConfirm();

//   commonP.verifyAlertMessage(
//     commonX.alert().xpath.alert,
//     "Scheme Wise Test Discount deleted successfully"
//   );
// }
