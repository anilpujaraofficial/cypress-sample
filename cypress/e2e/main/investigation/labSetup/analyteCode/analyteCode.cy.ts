import { investigation } from "@helpers/filePath/lab";
import { AnalyteCodeObj } from "@pageObject/main/investigation/labSetup/analyteCodeObj";
import { gotoMenuSubMenuFeatureSubFeature as navigation } from "@support/commands";

const filePath = investigation.labSetup;
const analyteCodeObj = new AnalyteCodeObj();
describe(
  "Investigation > Lab Setup > Analyte Code",
  { tags: ["@labSetup", "@lab"] },
  () => {
    before(() => {
      Cypress.session.clearAllSavedSessions();
      cy.rmDir(filePath.analyteCode_dir);
    });
    beforeEach(() => {
      cy.adminLogin();
      navigation(["Investigation", "Lab Setup", "Analyte Code"]);
    });
    it("To validate that a user is able to create analyteCode", () => {
      analyteCodeObj.createAnalyteCode(filePath.analyteCode);
    });
    it("To validate that a user is able to search analyteCode", () => {
      analyteCodeObj.searchAnalyteCode(filePath.analyteCode);
    });
    it("To validate that a user able to view analyteCode", () => {
      analyteCodeObj.analyteCodeView(filePath.analyteCode);
    });
    it("To validate that a user is able to edit analyteCode", () => {
      analyteCodeObj.updateanAlyteCode(filePath.analyteCode);
    });

    it("To validate that a user is able to  archive analyteCode", () => {
      analyteCodeObj.deleteAnalyteCode(filePath.analyteCode);
    });
  }
);
