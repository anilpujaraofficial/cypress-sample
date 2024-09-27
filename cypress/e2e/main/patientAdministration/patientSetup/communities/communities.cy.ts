// import { patientAdministration } from "@helpers/filePath/lab";
// import * as communitiesObj from "../../../../../../pageObject/main/patientAdministration/communitiesObj";
// const filePath = patientAdministration.patientSetup;

// describe("Communities", { tags: ["@labSetup", "@pa"] }, () => {
//    before(() => {
Cypress.session.clearAllSavedSessions();
//     cy.rmDir(filePath.communities_dir);
//   });
//   beforeEach(() => {
//     cy.adminLogin();
//     communitiesObj.gotoCommunitiesPage();
//   });
//   it("To validate that a user is able to create communities", () => {
//     communitiesObj.createCommunity(filePath.communities);
//   });

//   it("To validate that a user able to search communities", () => {
//     communitiesObj.search_communities(filePath.communities);
//   });
//   it("To validate that a user able to view communities", () => {
//     communitiesObj.search_communities(filePath.communities);
//     communitiesObj.view_communities(filePath.communities);
//   });

//   it("To validate that a user able to edit communities", () => {
//     communitiesObj.search_communities(filePath.communities);
//     communitiesObj.edit_communities(filePath.communities);
//   });

//   it("To verify validation message in name field", () => {
//     communitiesObj.verify_validation_message_name_field();
//   });

//   it("To verify validation message in code field", () => {
//     communitiesObj.verify_validation_message_code_field();
//   });

//   it("To verify validation message in Contact Person", () => {
//     communitiesObj.verify_validation_message_contact_person_field();
//   });
//   //todo
//   // it("To verify validation message in  phone number  and mobile number field", () => {
//   //   communitiesObj.verify_validation_message_contact_person_field();
//   // });

//   // it("To verify validation message in dispaly order", () => {
//   //   communitiesObj.verify_validation_message_contact_person_field();
//   // });

//   it("To validate that a user able to  archive communities", () => {
//     communitiesObj.search_communities(filePath.communities);
//     communitiesObj.delete_communities();
//   });
// });
