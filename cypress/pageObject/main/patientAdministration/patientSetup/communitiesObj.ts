// import { CommonPage } from "../../../page/commonPage/commonPage";

// import * as communityModule from "../../../helpers/xpathAndAssertion/main/patientAdministration/patientSetup/communities";
// import { CommonPageObj } from "@pageObject/commonPageObj/commonPageObj";
// let commonPageObj = new CommonPageObj();

// import { CommonXpathAndAssertion } from "../../../helpers/xpathAndAssertion/commonXpathAndAssertion/commonXpathAndAssertion";
// import { communitiesFakerObj } from "@helpers/faker/fakerObj";
// import { faker } from "@faker-js/faker";

// const commonP = new CommonPage();
// let commonX = new CommonXpathAndAssertion();

// export function gotoCommunitiesPage() {
//   commonPageObj.gotoPatientAdministration();
//   commonP.clickButtonForceTrue(commonX.sideMenuBar().menu_unfold);
//   commonP.clickElementWithContain(
//     commonX.sideMenuBar().mainTab,
//     "Patient Setup"
//   );
//   commonP.clickElementWithContain(commonX.sideMenuBar().subTab, "Communities");
//   commonP.urlVerify("/communities");
// }

// export function createCommunity(filePath) {
//   let data = communitiesFakerObj();
//   cy.task("checkFileExists", filePath).then((bool) => {
//     if (!bool) {
//       gotoCommunitiesPage();
//       commonP.clickElementWithContain(
//         communityModule.buttons().xpath.add,
//         communityModule.buttons().value.add
//       );

//       commonP.inputField(
//         communityModule.create_community().xpath.name,
//         data.name
//       );

//       commonP.inputField(
//         communityModule.create_community().xpath.code,
//         data.code
//       );
//       commonP.inputField(
//         communityModule.create_community().xpath.contact_person,
//         data.contact_person
//       );
//       commonP.inputField(
//         communityModule.create_community().xpath.phone,
//         data.phone
//       );

//       commonP.inputField(
//         communityModule.create_community().xpath.mobile_no,
//         data.mobile_no
//       );
//       commonP.inputField(
//         communityModule.create_community().xpath.dispaly_order,
//         data.dispaly_order
//       );

//       commonP.clickElementWithContain(
//         communityModule.buttons().xpath.save,
//         communityModule.buttons().value.save
//       );

//       commonP.verifyAlertMessage(
//         commonX.alert().xpath.alert,
//         "Community created"
//       );

//       cy.writeFile(filePath, data);
//     }
//   });
// }

// export function search_communities(filePath) {
//   cy.readFile(filePath).then((data) => {
//     commonP.searchField(communityModule.community().xpath.search, data.name);

//     for (const key in data) {
//       commonP.verifyTableData(
//         communityModule.community().xpath.table_data,
//         data[key]
//       );
//     }
//   });
// }

// export function view_communities(filePath) {
//   commonPageObj.viewEditArchive(commonX.crud_op().value.view);
//   cy.readFile(filePath).then((data) => {
//     commonP.verifyInputFieldValue(
//       communityModule.create_community().xpath.name,
//       data.name
//     );

//     commonP.verifyInputFieldValue(
//       communityModule.create_community().xpath.code,
//       data.code
//     );

//     commonP.verifyInputFieldValue(
//       communityModule.create_community().xpath.mobile_no,
//       data.mobile_no
//     );

//     commonP.verifyInputFieldValue(
//       communityModule.create_community().xpath.phone,
//       data.phone
//     );

//     commonP.verifyInputFieldValue(
//       communityModule.create_community().xpath.dispaly_order,
//       data.dispaly_order
//     );
//   });
// }

// export function edit_communities(filePath) {
//   let data = communitiesFakerObj();
//   commonPageObj.viewEditArchive(commonX.crud_op().value.edit);

//   commonP.inputField(communityModule.create_community().xpath.name, data.name);

//   commonP.inputField(communityModule.create_community().xpath.code, data.code);
//   commonP.inputField(
//     communityModule.create_community().xpath.contact_person,
//     data.contact_person
//   );
//   commonP.inputField(
//     communityModule.create_community().xpath.phone,
//     data.phone
//   );

//   commonP.inputField(
//     communityModule.create_community().xpath.mobile_no,
//     data.mobile_no
//   );
//   commonP.inputField(
//     communityModule.create_community().xpath.dispaly_order,
//     data.dispaly_order
//   );

//   commonP.clickElementWithContain(
//     communityModule.buttons().xpath.save,
//     communityModule.buttons().value.save
//   );
//   cy.wait(500);

//   commonP.verifyAlertMessage(commonX.alert().xpath.alert, "Community updated");
//   cy.writeFile(filePath, data);
// }

// export function verify_validation_message_name_field() {
//   let data = communitiesFakerObj();

//   gotoCommunitiesPage();
//   commonP.clickElementWithContain(
//     communityModule.buttons().xpath.add,
//     communityModule.buttons().value.add
//   );

//   // commonP.inputField(communityModule.create_community().xpath.name, data.name);

//   commonP.inputField(communityModule.create_community().xpath.code, data.code);
//   commonP.inputField(
//     communityModule.create_community().xpath.contact_person,
//     data.contact_person
//   );
//   commonP.inputField(
//     communityModule.create_community().xpath.phone,
//     data.phone
//   );

//   commonP.inputField(
//     communityModule.create_community().xpath.mobile_no,
//     data.mobile_no
//   );
//   commonP.inputField(
//     communityModule.create_community().xpath.dispaly_order,
//     data.dispaly_order
//   );

//   commonP.clickElementWithContain(
//     communityModule.buttons().xpath.save,
//     communityModule.buttons().value.save
//   );

//   commonP.verifyInvalidsMessage(
//     commonX.validation_message().xpath.invalid_feedback,
//     communityModule.invalid_feedback().value.empty_name
//   );

//   commonP.inputField(
//     communityModule.create_community().xpath.name,
//     faker.string.alphanumeric(101)
//   );
//   commonP.clickElementWithContain(
//     communityModule.buttons().xpath.save,
//     communityModule.buttons().value.save
//   );
//   commonP.verifyInvalidsMessage(
//     commonX.validation_message().xpath.invalid_feedback,
//     communityModule.invalid_feedback().value.name_more_than_50char
//   );
// }

// export function verify_validation_message_code_field() {
//   let data = communitiesFakerObj();

//   gotoCommunitiesPage();
//   commonP.clickElementWithContain(
//     communityModule.buttons().xpath.add,
//     communityModule.buttons().value.add
//   );

//   commonP.inputField(communityModule.create_community().xpath.name, data.name);

//   // commonP.inputField(communityModule.create_community().xpath.code, data.code);
//   commonP.inputField(
//     communityModule.create_community().xpath.contact_person,
//     data.contact_person
//   );
//   commonP.inputField(
//     communityModule.create_community().xpath.phone,
//     data.phone
//   );

//   commonP.inputField(
//     communityModule.create_community().xpath.mobile_no,
//     data.mobile_no
//   );
//   commonP.inputField(
//     communityModule.create_community().xpath.dispaly_order,
//     data.dispaly_order
//   );

//   commonP.clickElementWithContain(
//     communityModule.buttons().xpath.save,
//     communityModule.buttons().value.save
//   );

//   commonP.verifyInvalidsMessage(
//     commonX.validation_message().xpath.invalid_feedback,
//     communityModule.invalid_feedback().value.empty_code
//   );

//   commonP.inputField(
//     communityModule.create_community().xpath.code,
//     faker.string.alphanumeric(101)
//   );
//   commonP.clickElementWithContain(
//     communityModule.buttons().xpath.save,
//     communityModule.buttons().value.save
//   );
//   commonP.verifyInvalidsMessage(
//     commonX.validation_message().xpath.invalid_feedback,
//     communityModule.invalid_feedback().value.code_more_than_10char
//   );
// }

// export function verify_validation_message_contact_person_field() {
//   let data = communitiesFakerObj();

//   gotoCommunitiesPage();
//   commonP.clickElementWithContain(
//     communityModule.buttons().xpath.add,
//     communityModule.buttons().value.add
//   );

//   commonP.inputField(communityModule.create_community().xpath.name, data.name);

//   commonP.inputField(communityModule.create_community().xpath.code, data.code);
//   // commonP.inputField(
//   //   communityModule.create_community().xpath.contact_person,
//   //   data.contact_person
//   // );
//   commonP.inputField(
//     communityModule.create_community().xpath.phone,
//     data.phone
//   );

//   commonP.inputField(
//     communityModule.create_community().xpath.mobile_no,
//     data.mobile_no
//   );
//   commonP.inputField(
//     communityModule.create_community().xpath.dispaly_order,
//     data.dispaly_order
//   );

//   commonP.clickElementWithContain(
//     communityModule.buttons().xpath.save,
//     communityModule.buttons().value.save
//   );

//   commonP.verifyInvalidsMessage(
//     commonX.validation_message().xpath.invalid_feedback,
//     communityModule.invalid_feedback().value.empty_contact_person
//   );

//   commonP.inputField(
//     communityModule.create_community().xpath.contact_person,
//     faker.string.alphanumeric(51)
//   );
//   commonP.clickElementWithContain(
//     communityModule.buttons().xpath.save,
//     communityModule.buttons().value.save
//   );
//   commonP.verifyInvalidsMessage(
//     commonX.validation_message().xpath.invalid_feedback,
//     communityModule.invalid_feedback().value.contact_person_more_than_50char
//   );
// }

// export function delete_communities() {
//   commonPageObj.viewEditArchive(commonX.crud_op().value.archive);

//   commonPageObj.verifyDeleteConfirm();
//   commonPageObj.clickDeleteConfirm();

//   commonP.verifyAlertMessage(
//     commonX.alert().xpath.alert,
//     "Community deleted successfully"
//   );
// }
