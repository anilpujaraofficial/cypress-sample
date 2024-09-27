import { investigation } from "@helpers/filePath/lab";
import { AnalyzerObj } from "@pageObject/main/investigation/labSetup/analyzerObj";
import { gotoMenuSubMenuFeatureSubFeature as navigation } from "@support/commands";
const filePath = investigation.labSetup;
const analyzerObj = new AnalyzerObj();
describe(
  "Investigation > Lab Setup > Analyzer",
  { tags: ["@labSetup", "@lab"] },
  () => {
    before(() => {
      Cypress.session.clearAllSavedSessions();
      cy.rmDir(filePath.analyzer_dir);
    });

    beforeEach(() => {
      cy.adminLogin();
      navigation(["Investigation", "Lab Setup", "Analyzer"]);
    });

    it("To validate that a user is able to create analyzer", () => {
      analyzerObj.createAnalyzer(filePath.analyzer);
    });
    it("To validate that a user is able to search analyzer", () => {
      analyzerObj.searchAnalyzer(filePath.analyzer);
    });
    it("To validate that a user able  to view analyzer", () => {
      analyzerObj.viewAnalyzer(filePath.analyzer);
    });
    it("To validate that a user is able to edit analyzer", () => {
      analyzerObj.updateAnalyzer(filePath.analyzer);
    });

    it("To validate that a user is able to  archive analyzer", () => {
      analyzerObj.archiveAnalyzer(filePath.analyzer);
    });
  }
);
