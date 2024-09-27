// //! common

// import { CommonXpathAndAssertion } from "../../../helpers/xpathAndAssertion/commonXpathAndAssertion/commonXpathAndAssertion";
// import { CommonPage } from "../../../page/commonPage/commonPage";
// import { CommonPageObj } from "@pageObject/commonPageObj/commonPageObj";
// let commonPageObj = new CommonPageObj();

// //! patientRegister
// import * as patientRegisterModule from "../../../helpers/xpathAndAssertion/main/patientAdministration/patientSetup/patientRegister";

// import { patientFakerObj } from "@helpers/faker/fakerObj";

// import { getEnvVariables } from "../../../helpers/environment/environment";

// let commonP = new CommonPage();
// let commonX = new CommonXpathAndAssertion();

// export function gotoPatientRegisterPage() {
//   commonPageObj.gotoPatientAdministration();
//   commonP.clickButtonForceTrue(commonX.sideMenuBar().menu_unfold);
//   commonP.clickElementWithContain(
//     commonX.sideMenuBar().mainTab,
//     "Patient Administration"
//   );
//   commonP.clickElementWithContain(commonX.sideMenuBar().subTab, "Register");
//   commonP.urlVerify("/register");
// }

// export function patientRegister(filePath, schemeFile) {
//   let data = patientFakerObj();
//   cy.task("checkFileExists", filePath).then((bool) => {
//     if (!bool) {
//       commonP.verifyRadioButtonchecked(
//         patientRegisterModule.create_patient().xpath.new
//       );
//       commonP.verifyRadioButtonUnchecked(
//         patientRegisterModule.create_patient().xpath.followup
//       );

//       // !Select Scheme Type

//       // cy.readFile(schemeFile).then((sc) => {
//       //   commonP.searchField(
//       //     patientRegisterModule.create_patient().xpath.select_scehma,
//       //     sc.name
//       //   );

//       //   commonP.clickElementWithContain(
//       //     patientRegisterModule.create_patient().xpath.select_option,
//       //     sc.name
//       //   );
//       // });

//       commonP.inputField(
//         patientRegisterModule.create_patient().xpath.firstName,
//         data.firstName
//       );

//       commonP.inputField(
//         patientRegisterModule.create_patient().xpath.middleName,
//         data.middleName
//       );

//       commonP.inputField(
//         patientRegisterModule.create_patient().xpath.lastName,
//         data.lastName
//       );

//       commonP.clickButtonForceTrue(
//         patientRegisterModule.create_patient().xpath.gender
//       );
//       commonP.clickElementWithContain(
//         patientRegisterModule.create_patient().xpath.select_option,
//         data.gender
//       );
//       commonP.inputField(
//         patientRegisterModule.create_patient().xpath.email,
//         data.email
//       );
//       // commonP.inputField(
//       //   patientRegisterModule.create_patient().xpath.phone,
//       //   data.phone
//       // );
//       commonP.inputField(
//         patientRegisterModule.create_patient().xpath.age,
//         data.age
//       );

//       //!permanent Address

//       cy.readFile(schemeFile).then((res) => {
//         // commonP.searchField(
//         //   patientRegisterModule.create_patient().xpath.tem_country,
//         //   "NEPAL"
//         // );

//         // commonP.clickElementWithContain(
//         //   patientRegisterModule.create_patient().xpath.select_option,
//         //   "NEPAL"
//         // );

//         res.country = "NEPAL";
//         commonP.searchField(
//           patientRegisterModule.create_patient().xpath.state,
//           "BAGMATI"
//         );

//         res.state = "BAGMATI";

//         commonP.clickElementWithContain(
//           patientRegisterModule.create_patient().xpath.select_option,
//           "BAGMATI"
//         );
//         commonP.searchField(
//           patientRegisterModule.create_patient().xpath.district,
//           "KATHMANDU"
//         );

//         res.district = "KATHMANDU";
//         commonP.clickElementWithContain(
//           patientRegisterModule.create_patient().xpath.select_option,
//           "KATHMANDU"
//         );
//         commonP.searchField(
//           patientRegisterModule.create_patient().xpath.municipality,
//           "KATHMANDU METROPOLITIAN CITY"
//         );
//         commonP.clickElementWithContain(
//           patientRegisterModule.create_patient().xpath.select_option,
//           "KATHMANDU METROPOLITIAN CITY"
//         );
//         res.municipality = "KATHMANDU METROPOLITIAN CITY";

//         cy.writeFile(schemeFile, res);
//       });

//       commonP.inputField(
//         patientRegisterModule.create_patient().xpath.ward_no,
//         data.ward_no
//       );

//       commonP.inputField(
//         patientRegisterModule.create_patient().xpath.permanant_address,
//         data.address
//       );
//       commonP.inputField(
//         patientRegisterModule.create_patient().xpath.contact_no,
//         data.contact_no
//       );
//       //! Temporary   Address Same as  permanent address
//       commonP.clickButtonForceTrue(
//         patientRegisterModule.create_patient().xpath.same_address
//       );

//       //!Doctor Visit
//       commonP.clickButtonForceTrue(
//         patientRegisterModule.create_patient().xpath.doctor_visit
//       );

//       commonP.searchField(
//         patientRegisterModule.create_patient().xpath.patient_type_code,
//         "GEN"
//       );

//       commonP.clickElementWithContain(
//         patientRegisterModule.create_patient().xpath.select_option,
//         "GEN"
//       );

//       commonP.clickButtonForceTrue(
//         patientRegisterModule.create_patient().xpath.department
//       );
//       commonP.searchField(
//         patientRegisterModule.create_patient().xpath.department,
//         "CARDIOLOGY"
//       );
//       commonP.selectByTitle("CARDIOLOGY");

//       commonP.searchField(
//         patientRegisterModule.create_patient().xpath.doctor_name,
//         "John Doe Smith"
//       );

//       commonP.selectByTitle("John Doe Smith");

//       // commonP.inputField(
//       //   patientRegisterModule.create_patient().xpath.queue_no,
//       //   data.queue_no
//       // );
//       commonP.inputField(
//         patientRegisterModule.create_patient().xpath.tender_amount,
//         data.tender_amout
//       );
//       commonP.inputField(
//         patientRegisterModule.create_patient().xpath.remarks,
//         data.remarks
//       );
//       cy.intercept(getEnvVariables("apiUrl") + "/pa/register").as("patient");

//       commonP.clickElementWithContain(
//         patientRegisterModule.create_patient().xpath.submit,
//         patientRegisterModule.create_patient().value.submit
//       );

//       cy.readFile(schemeFile).then((data) => {
//         cy.wait("@patient").then((res) => {
//           res.response.body.data.scheme = data.name;
//           res.response.body.data.department = "CARDIOLOGY";
//           res.response.body.data.patient_type = "GEN";
//           res.response.body.data.doctor_name = "John Doe Smith";
//           res.response.body.data.country = data.country;
//           res.response.body.data.state = data.state;
//           res.response.body.data.district = data.district;
//           res.response.body.data.municipality = data.municipality;
//           cy.writeFile(filePath, res.response.body.data);
//         });
//       });

//       commonP.verifyAlertMessage(
//         commonX.alert().xpath.alert,
//         "Patient created"
//       );

//       cy.closePrintPopup(getEnvVariables("url") + "/pa/register");
//     }
//   });
// }

// export function patientFollowUp(filePath) {
//   cy.readFile(filePath).then((data) => {
//     commonP.clickButtonForceTrue(
//       patientRegisterModule.create_patient().xpath.followup
//     );
//     cy.get(patientRegisterModule.create_patient().xpath.hospital_no).type(
//       `${data.hospital_no}{enter}`,
//       { force: true }
//     );
//     cy.wait(1500);
//     //! scheme
//     // commonP.verifyTitleValue(data.scheme);

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
//     commonP.verifyTitleValue(data.gender);

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

//     //! Doctor Visit
//     commonP.verifyTitleValue(data.patient_type);
//     commonP.verifyTitleValue(data.department);
//     commonP.verifyTitleValue(data.patient_type);
//     commonP.verifyTitleValue(data.doctor_name);
//     commonP.verifyInputFieldValue(
//       patientRegisterModule.create_patient().xpath.remarks,
//       data.remarks
//     );
//   });
// }

// export function verify_validation_message_in_personal_information() {
//   let data = patientFakerObj();

//   commonP.verifyRadioButtonchecked(
//     patientRegisterModule.create_patient().xpath.new
//   );
//   commonP.verifyRadioButtonUnchecked(
//     patientRegisterModule.create_patient().xpath.followup
//   );

//   commonP.searchField(
//     patientRegisterModule.create_patient().xpath.district,
//     "KATHMANDU"
//   );
//   commonP.clickElementWithContain(
//     patientRegisterModule.create_patient().xpath.select_option,
//     "KATHMANDU"
//   );
//   commonP.searchField(
//     patientRegisterModule.create_patient().xpath.municipality,
//     "KATHMANDU METROPOLITIAN CITY"
//   );
//   commonP.clickElementWithContain(
//     patientRegisterModule.create_patient().xpath.select_option,
//     "KATHMANDU METROPOLITIAN CITY"
//   );
//   commonP.inputField(
//     patientRegisterModule.create_patient().xpath.ward_no,
//     data.ward_no
//   );

//   commonP.inputField(
//     patientRegisterModule.create_patient().xpath.permanant_address,
//     data.address
//   );
//   commonP.inputField(
//     patientRegisterModule.create_patient().xpath.contact_no,
//     data.contact_no
//   );
//   //!  Temporary Address Same as permanent address
//   commonP.clickButtonForceTrue(
//     patientRegisterModule.create_patient().xpath.same_address
//   );

//   cy.wait(1000);
//   commonP.clickButtonForceTrue(
//     patientRegisterModule.create_patient().xpath.doctor_visit
//   );
//   cy.wait(1000);

//   commonP.clickButtonForceTrue(
//     patientRegisterModule.create_patient().xpath.department
//   );

//   commonP.selectByTitle("CARDIOLOGY");

//   commonP.clickButtonForceTrue(
//     patientRegisterModule.create_patient().xpath.doctor_name
//   );
//   cy.wait(500);
//   commonP.clickElementWithContain(
//     patientRegisterModule.create_patient().xpath.select_option,
//     "John Doe Smith"
//   );

//   // commonP.inputField(
//   //   patientRegisterModule.create_patient().xpath.queue_no,
//   //   data.queue_no
//   // );
//   commonP.inputField(
//     patientRegisterModule.create_patient().xpath.tender_amount,
//     data.tender_amout
//   );
//   commonP.inputField(
//     patientRegisterModule.create_patient().xpath.remarks,
//     data.remarks
//   );

//   commonP.clickElementWithContain(
//     patientRegisterModule.create_patient().xpath.submit,
//     patientRegisterModule.create_patient().value.submit
//   );

//   cy.wait(1000);

//   commonP.verifyInvalidsMessage(
//     ".ant-form-item-explain-error",
//     "The first name field is required when reg type is REGONLY."
//   );

//   // commonP.verifyInvalidsMessage(
//   //   commonX.validation_message().xpath.invalid_feedback,
//   //   patientRegisterModule.validation_message().value.personal_info.empty_lname
//   // );
// }

// export function verify_validation_message_in_permanent_address() {
//   let data = patientFakerObj();

//   commonP.verifyRadioButtonchecked(
//     patientRegisterModule.create_patient().xpath.new
//   );
//   commonP.verifyRadioButtonUnchecked(
//     patientRegisterModule.create_patient().xpath.followup
//   );

//   // !Select Scheme Type

//   // cy.readFile(scheme).then((res) => {
//   //   commonP.inputField(
//   //     patientRegisterModule.create_patient().xpath.select_scehma,
//   //     res.name
//   //   );
//   //   commonP.clickElementWithContain(
//   //     patientRegisterModule.create_patient().xpath.select_option,
//   //     res.name
//   //   );
//   // });

//   commonP.inputField(
//     patientRegisterModule.create_patient().xpath.firstName,
//     data.firstName
//   );

//   commonP.inputField(
//     patientRegisterModule.create_patient().xpath.middleName,
//     data.middleName
//   );

//   commonP.inputField(
//     patientRegisterModule.create_patient().xpath.lastName,
//     data.lastName
//   );

//   commonP.clickButtonForceTrue(
//     patientRegisterModule.create_patient().xpath.gender
//   );
//   commonP.clickElementWithContain(
//     patientRegisterModule.create_patient().xpath.select_option,
//     data.gender
//   );
//   commonP.inputField(
//     patientRegisterModule.create_patient().xpath.email,
//     data.email
//   );
//   commonP.inputField(
//     patientRegisterModule.create_patient().xpath.phone,
//     data.phone
//   );
//   commonP.inputField(
//     patientRegisterModule.create_patient().xpath.age,
//     data.age
//   );

//   // !Permanent Address is empty

//   //!  Temporary Address Same as permanent address
//   commonP.clickButtonForceTrue(
//     patientRegisterModule.create_patient().xpath.same_address
//   );

//   cy.wait(1000);
//   commonP.clickButtonForceTrue(
//     patientRegisterModule.create_patient().xpath.doctor_visit
//   );
//   cy.wait(1000);

//   commonP.clickButtonForceTrue(
//     patientRegisterModule.create_patient().xpath.department
//   );

//   commonP.selectByTitle("CARDIOLOGY");

//   commonP.clickButtonForceTrue(
//     patientRegisterModule.create_patient().xpath.doctor_name
//   );
//   cy.wait(500);
//   commonP.clickElementWithContain(
//     patientRegisterModule.create_patient().xpath.select_option,
//     "John Doe Smith"
//   );

//   // commonP.inputField(
//   //   patientRegisterModule.create_patient().xpath.queue_no,
//   //   data.queue_no
//   // );
//   commonP.inputField(
//     patientRegisterModule.create_patient().xpath.tender_amount,
//     data.tender_amout
//   );
//   commonP.inputField(
//     patientRegisterModule.create_patient().xpath.remarks,
//     data.remarks
//   );

//   commonP.clickElementWithContain(
//     patientRegisterModule.create_patient().xpath.submit,
//     patientRegisterModule.create_patient().value.submit
//   );

//   for (const key in patientRegisterModule.validation_message().value.address) {
//     commonP.verifyInvalidsMessage(
//       commonX.validation_message().xpath.invalid_feedback,
//       patientRegisterModule.validation_message().value.address[key]
//     );
//   }
// }

// export function patientRegisterWithoutScheme(filePath) {
//   let data = patientFakerObj();
//   cy.task("checkFileExists", filePath).then((bool) => {
//     if (!bool) {
//       commonP.verifyRadioButtonchecked(
//         patientRegisterModule.create_patient().xpath.new
//       );
//       commonP.verifyRadioButtonUnchecked(
//         patientRegisterModule.create_patient().xpath.followup
//       );
//       cy.reload();
//       commonP.inputField(
//         patientRegisterModule.create_patient().xpath.firstName,
//         data.firstName
//       );

//       commonP.inputField(
//         patientRegisterModule.create_patient().xpath.middleName,
//         data.middleName
//       );

//       commonP.inputField(
//         patientRegisterModule.create_patient().xpath.lastName,
//         data.lastName
//       );

//       commonP.clickButtonForceTrue(
//         patientRegisterModule.create_patient().xpath.gender
//       );
//       commonP.clickElementWithContain(
//         patientRegisterModule.create_patient().xpath.select_option,
//         data.gender
//       );
//       commonP.inputField(
//         patientRegisterModule.create_patient().xpath.email,
//         data.email
//       );
//       // commonP.inputField(
//       //   patientRegisterModule.create_patient().xpath.phone,
//       //   data.phone
//       // );
//       commonP.inputField(
//         patientRegisterModule.create_patient().xpath.age,
//         data.age
//       );
//       //!Permanent Address

//       // commonP.searchField(
//       //   patientRegisterModule.create_patient().xpath.temp_country,
//       //   "NEPAL"
//       // );

//       // commonP.clickElementWithContain(
//       //   patientRegisterModule.create_patient().xpath.select_option,
//       //   "NEPAL"
//       // );

//       // commonP.searchField(
//       //   patientRegisterModule.create_patient().xpath.state,
//       //   "BAGMATI"
//       // );

//       // commonP.clickElementWithContain(
//       //   patientRegisterModule.create_patient().xpath.select_option,
//       //   "BAGMATI"
//       // );
//       commonP.searchField(
//         patientRegisterModule.create_patient().xpath.district,
//         "KATHMANDU"
//       );

//       commonP.clickElementWithContain(
//         patientRegisterModule.create_patient().xpath.select_option,
//         "KATHMANDU"
//       );
//       commonP.searchField(
//         patientRegisterModule.create_patient().xpath.municipality,
//         "KATHMANDU METROPOLITIAN CITY"
//       );
//       commonP.clickElementWithContain(
//         patientRegisterModule.create_patient().xpath.select_option,
//         "KATHMANDU METROPOLITIAN CITY"
//       );

//       commonP.inputField(
//         patientRegisterModule.create_patient().xpath.permanant_address,
//         data.address
//       );
//       commonP.inputField(
//         patientRegisterModule.create_patient().xpath.ward_no,
//         data.ward_no
//       );
//       commonP.inputField(
//         patientRegisterModule.create_patient().xpath.contact_no,
//         data.contact_no
//       );
//       //!  Temporary Address Same as permanent address
//       commonP.clickButtonForceTrue(
//         patientRegisterModule.create_patient().xpath.same_address
//       );

//       //!Doctor Visit
//       commonP.clickButtonForceTrue(
//         patientRegisterModule.create_patient().xpath.doctor_visit
//       );

//       commonP.clickButtonForceTrue(
//         patientRegisterModule.create_patient().xpath.department
//       );

//       commonP.selectByTitle("CARDIOLOGY");

//       commonP.clickButtonForceTrue(
//         patientRegisterModule.create_patient().xpath.doctor_name
//       );
//       cy.wait(500);
//       commonP.clickElementWithContain(
//         patientRegisterModule.create_patient().xpath.select_option,
//         "John Doe Smith"
//       );

//       // commonP.inputField(
//       //   patientRegisterModule.create_patient().xpath.queue_no,
//       //   data.queue_no
//       // );
//       commonP.inputField(
//         patientRegisterModule.create_patient().xpath.tender_amount,
//         data.tender_amout
//       );
//       commonP.inputField(
//         patientRegisterModule.create_patient().xpath.remarks,
//         data.remarks
//       );
//       cy.intercept(getEnvVariables("apiUrl") + "/pa/register").as("patient");
//       commonP.clickElementWithContain(
//         patientRegisterModule.create_patient().xpath.submit,
//         patientRegisterModule.create_patient().value.submit
//       );

//       commonP.verifyAlertMessage(
//         commonX.alert().xpath.alert,
//         "Patient created"
//       );

//       cy.wait("@patient").then((res) => {
//         cy.writeFile(filePath, res.response.body.data);
//       });

//       cy.closePrintPopup(getEnvVariables("url") + "/pa/register");
//     }
//   });
// }
