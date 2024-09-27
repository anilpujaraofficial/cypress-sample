import { patientAdministration } from "@helpers/filePath/pa";
import { gotoMenuSubMenuFeatureSubFeature as navigation } from "@support/commands";
import { BankObj } from "@pageObject/main/patientAdministration/patientSetup/banksObj";
const filePath = patientAdministration.patientSetup;

const bankObj = new BankObj();
describe(
  "Patient Administration|Patient Setup|Bank",
  { tags: ["@patientSetup", "@pa"] },
  () => {
    before(() => {
      Cypress.session.clearAllSavedSessions();
      cy.rmDir(filePath.bank_dir);
    });

    beforeEach(() => {
      cy.adminLogin();
      navigation(["Patient Administration", "Patient Setup", "Bank"]);
    });

    it("To validate that a user is able to create bank", () => {
      bankObj.create_banK(filePath.bank);
    });

    it("To validate that a user is able to search bank", () => {
      bankObj.searchBanks(filePath.bank);
    });

    it("To validate that a user able  to view data", () => {
      bankObj.viewBanks(filePath.bank);
    });
    it("To validate that a user able  to view", () => {
      bankObj.viewBanks(filePath.bank);
    });

    it("To validate that a user is able to edit bank", () => {
      bankObj.updateBanks(filePath.bank);
    });

    it("To validate that a user is able to  archive bank", () => {
      bankObj.archiveBank(filePath.bank);
    });
  }
);
