// import { patientAdministration } from "@helpers/filePath/lab";
// import * as referralSourcesObj from "../../../../../../pageObject/main/patientAdministration/referralSourcesObj";
// const filePath = patientAdministration.patientSetup;

// describe("Referral Sources", { tags: ["@labSetup", "@pa"] }, () => {
//    before(() => {
Cypress.session.clearAllSavedSessions();
//     cy.rmDir(filePath.referralSources_dir);
//   });
//   beforeEach(() => {
//     cy.adminLogin();
//     referralSourcesObj.gotoreferralSourcesPage();
//   });
//   it("To validate that a user is able to create referral sources", () => {
//     referralSourcesObj.create_referralSources(filePath.referralSources);
//   });

//   it("To validate that a user able to search referral sources", () => {
//     referralSourcesObj.search_referralSources(filePath.referralSources);
//   });
//   it("To validate that a user able to view referral sources", () => {
//     referralSourcesObj.search_referralSources(filePath.referralSources);
//     referralSourcesObj.view_referralSources(filePath.referralSources);
//   });
//   it("To validate that a user able to edit referral sources", () => {
//     referralSourcesObj.search_referralSources(filePath.referralSources);
//     referralSourcesObj.edit_referralSources(filePath.referralSources);
//   });

//   it("To verify validation message in name field", () => {
//     referralSourcesObj.verify_validation_message_name_field();
//   });

//   it("To validate that a user able to  archive referral sources", () => {
//     referralSourcesObj.search_referralSources(filePath.referralSources);
//     referralSourcesObj.delete_referralSources();
//   });
// });
