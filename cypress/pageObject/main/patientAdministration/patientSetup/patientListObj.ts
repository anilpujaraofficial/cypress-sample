// import { CommonPage } from "../../../page/commonPage/commonPage";

// import * as patientListModule from "../../../helpers/xpathAndAssertion/main/patientAdministration/patientSetup/patientList";

// import { CommonXpathAndAssertion } from "../../../helpers/xpathAndAssertion/commonXpathAndAssertion/commonXpathAndAssertion";

// import { getEnvVariables } from "../../../helpers/environment/environment";
// import { patientFakerObj } from "@helpers/faker/fakerObj";
// import * as patientRegisterModule from "../../../helpers/xpathAndAssertion/main/patientAdministration/patientSetup/patientRegister";

// const commonP = new CommonPage();

// export function gotoPatientList() {
//   cy.visit(getEnvVariables("url") + "/pa/patientlist");
//   commonP.urlVerify("/patientlist");
//   cy.wait(1500);
// }

// export function patientSearch(filePath) {
//   cy.readFile(filePath).then((data) => {
//     let dat = [
//       data.hospital_no,
//       data.first_name + " " + data.middle_name + " " + data.last_name,
//       data.mobile_no,
//       data.address,
//     ];
//     commonP.searchField(
//       patientListModule.patientList().xpath.search,
//       data.hospital_no
//     );
//     for (const i of dat) {
//       commonP.verifyTableData(
//         patientListModule.patientList().xpath.table_data,
//         i
//       );
//     }
//   });
// }

// export function view_patient(filePath) {
//   commonPageObj.viewEditArchive(commonX.crud_op().value.view);

//   cy.readFile(filePath).then((data) => {
//     //!Personal Information
//     commonP.verifyInputFieldValue(
//       patientRegisterModule.create_patient().xpath.firstName,
//       data.first_name
//     );

//     commonP.verifyInputFieldValue(
//       patientRegisterModule.create_patient().xpath.middleName,
//       data.middle_name
//     );
//     commonP.verifyInputFieldValue(
//       patientRegisterModule.create_patient().xpath.lastName,
//       data.last_name
//     );

//     commonP.verifyTitleValue("Male");
//     commonP.verifyInputFieldValue(
//       patientRegisterModule.create_patient().xpath.email,
//       data.email
//     );
//     commonP.verifyInputFieldValue(
//       patientRegisterModule.create_patient().xpath.phone,
//       data.mobile_no
//     );
//     commonP.verifyInputFieldValue(
//       patientRegisterModule.create_patient().xpath.age,
//       data.age
//     );
//     //!Permanant Address
//     commonP.verifyTitleValue(data.district);
//     commonP.verifyTitleValue(data.municipality);
//     commonP.verifyInputFieldValue(
//       patientRegisterModule.create_patient().xpath.ward_no,
//       data.ward_no
//     );

//     commonP.verifyInputFieldValue(
//       patientRegisterModule.create_patient().xpath.permanant_address,
//       data.address
//     );
//     commonP.verifyInputFieldValue(
//       patientRegisterModule.create_patient().xpath.contact_no,
//       data.permanent_phone_no
//     );
//   });
// }

// export function edit_patient(filePath) {
//   let data = patientFakerObj();
//   commonPageObj.viewEditArchive(commonX.crud_op().value.edit);

//   cy.readFile(filePath).then((res) => {
//     commonP.inputField(
//       patientRegisterModule.create_patient().xpath.firstName,
//       data.firstName
//     );
//     res.first_name = data.firstName;

//     commonP.inputField(
//       patientRegisterModule.create_patient().xpath.middleName,
//       data.middleName
//     );
//     res.middle_name = data.middleName;

//     commonP.inputField(
//       patientRegisterModule.create_patient().xpath.lastName,
//       data.lastName
//     );
//     res.last_name = data.lastName;

//     commonP.inputField(
//       patientRegisterModule.create_patient().xpath.email,
//       data.email
//     );
//     res.email = data.email;

//     commonP.inputField(
//       patientRegisterModule.create_patient().xpath.phone,
//       data.phone
//     );

//     res.mobile_no = data.phone;
//     commonP.inputField(
//       patientRegisterModule.create_patient().xpath.age,
//       data.age
//     );

//     res.age = data.age;

//     commonP.clickElementWithContain(
//       patientRegisterModule.buttons().xpath.save,
//       patientRegisterModule.buttons().value.save
//     );

//     commonP.verifyAlertMessage(commonX.alert().xpath.alert, "Patient Updated");

//     cy.writeFile(filePath, res);
//   });
// }

// export function verifyCreatedPatient(filePath) {
//   cy.readFile(filePath).then((data) => {
//     commonP.searchField(
//       patientListModule.patientList().xpath.search,
//       `${data.firstName} ${data.middleName} ${data.lastName}`
//     );
//     commonP.verifyTableData(
//       patientListModule.patientList().xpath.table_data,
//       `${data.firstName} ${data.middleName} ${data.lastName}`
//     );

//     commonP.verifyTableData(
//       patientListModule.patientList().xpath.table_data,
//       data.phone
//     );
//     commonP.verifyTableData(
//       patientListModule.patientList().xpath.table_data,
//       data.address
//     );

//     cy.get(patientListModule.patientList().xpath.hospital_no).then((res) => {
//       data.hospital_no = res.text();
//     });

//     cy.writeFile(filePath, data);
//   });
// }

// export function user_redirect_patient_register_page() {
//   commonP.verifyContain(
//     patientListModule.buttons().xpath.add,
//     patientListModule.buttons().value.add
//   );
//   commonP.clickForceElementWithContain(
//     patientListModule.buttons().xpath.add,
//     patientListModule.buttons().value.add
//   );
//   commonP.urlVerify("/pa/register");
// }

// export function verify_pagination() {
//   cy.get(patientListModule.pagination().xpath.count).then((res) => {
//     if (res.length >= 15) {
//       cy.wait(500);
//       cy.get(patientListModule.pagination().xpath.prev).then((res) => {
//         if (res.hasClass("disabled")) {
//           cy.wrap(res).should("have.class", "disabled");
//           cy.log("Disabled");
//         } else {
//           commonP.clickButtonForceTrue(
//             patientListModule.pagination().xpath.next
//           );
//           cy.get(patientListModule.pagination().xpath.page2).should(
//             "have.class",
//             "ant-pagination-item-active"
//           );
//         }
//       });

//       cy.wait(500);
//       cy.get(patientListModule.pagination().xpath.next).then((res) => {
//         cy.wait(500);
//         if (res.hasClass("disabled")) {
//           cy.wrap(res).should("have.class", "disabled");
//           cy.log("Disabled");
//         } else {
//           commonP.clickButtonForceTrue(
//             patientListModule.pagination().xpath.prev
//           );
//           cy.get(patientListModule.pagination().xpath.page1).should(
//             "have.class",
//             "ant-pagination-item-active"
//           );
//         }
//       });
//     }
//   });
// }

// export function showData() {
//   cy.get(patientListModule.pagination().xpath.count).then((res) => {
//     commonP.clickButtonForceTrue(patientListModule.pagination().xpath.show);
//     commonP.selectByTitle(20);

//     expect(res.length).to.eq(res.length);
//   });

//   cy.get(patientListModule.pagination().xpath.count).then((res) => {
//     cy.wait(500);
//     commonP.clickButtonForceTrue(patientListModule.pagination().xpath.show);
//     commonP.selectByTitle(30);

//     expect(res.length).to.eq(res.length);
//   });

//   cy.get(patientListModule.pagination().xpath.count).then((res) => {
//     cy.wait(500);
//     commonP.clickButtonForceTrue(patientListModule.pagination().xpath.show);
//     commonP.selectByTitle(15);

//     expect(res.length).to.eq(res.length);
//   });
// }

// export function gotoPage() {
//   cy.get(patientListModule.pagination().xpath.count).then((res) => {
//     if (res.length >= 15) {
//       cy.get(patientListModule.pagination().xpath.gotoPage).type(
//         `${2} {enter}`
//       );

//       cy.get(patientListModule.pagination().xpath.page2).should(
//         "have.class",
//         "ant-pagination-item-active"
//       );
//       cy.wait(500);
//       cy.get(patientListModule.pagination().xpath.gotoPage).type(
//         `${1} {enter}`
//       );

//       cy.get(patientListModule.pagination().xpath.page1).should(
//         "have.class",
//         "ant-pagination-item-active"
//       );
//     }
//   });
// }
