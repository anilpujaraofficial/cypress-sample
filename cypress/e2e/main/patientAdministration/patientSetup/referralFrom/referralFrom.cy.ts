import { patientAdministration } from "@helpers/filePath/pa";
import { ReferralFromObj } from "@pageObject/main/patientAdministration/patientSetup/referralFromObj";
import { gotoMenuSubMenuFeatureSubFeature as navigation } from "@support/commands";
const filePath = patientAdministration.patientSetup;

const referralObj = new ReferralFromObj();
describe(
  "Patient Administration>Patient Setup > Referral From",
  { tags: ["@patientSetup", "@pa"] },
  () => {
    before(() => {
      Cypress.session.clearAllSavedSessions();
      cy.rmDir(filePath.referralFrom_dir);
    });

    beforeEach(() => {
      cy.adminLogin();
      navigation(["Patient Administration", "Patient Setup", "Referral From"]);
    });

    it("To validate that a user is able to create referral from", () => {
      referralObj.create_referralfrom(filePath.referralFrom);
    });

    it("To validate that a user is able to search referral from", () => {
      referralObj.searchReferralfrom(filePath.referralFrom);
    });
    it("To validate that a user able  to view", () => {
      referralObj.viewReferralFrom(filePath.referralFrom);
    });

    it("To validate that a user is able to edit relation", () => {
      referralObj.updateReferralFrom(filePath.referralFrom);
    });

    it("To validate that a user is able to  archive relation", () => {
      referralObj.archiveReferralFrom(filePath.referralFrom);
    });
  }
);
