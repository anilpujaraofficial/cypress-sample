import { investigation } from "@helpers/filePath/lab";
import { gotoMenuSubMenuFeatureSubFeature as navigation } from "@support/commands";
import { getEnvVariables } from "@support/commands";
import { APIObj } from "@pageObject/apiObj/apiObj";
import { AnalyzerConfigObj } from "@pageObject/main/investigation/labSetup/analyzerconfigObj";

const analyzerConfigObj = new AnalyzerConfigObj();

const apiObj = new APIObj();
const filePath = investigation.labSetup.analyzerConfiguration;
describe(
  "Investigation > Lab Setup > Analyzer Configuration",
  { tags: ["@labSetup", "@lab"] },
  () => {
    before(() => {
      Cypress.session.clearAllSavedSessions();
      cy.rmDir(filePath.analyzerConfiguration_dir);
      analyzerConfigObj.addDependency(filePath);
    });
    beforeEach(() => {
      cy.adminLogin();
      navigation(["Investigation", "Lab Setup", "Analyzer Configuration"]);
    });

    after(() => {
      analyzerConfigObj.archiveDependency(filePath);
    });

    it("To validate that a user is able to create analyzer configuration", () => {
      analyzerConfigObj.createAnalyzerConfig(filePath.analyzerConfiguration);
    });

    it("To validate that a user is able to search analyzer configuration", () => {
      analyzerConfigObj.searchAnalyzerConfig(filePath.analyzerConfiguration);
    });

    it("To validate that a user able  to view analyzer configuration", () => {
      analyzerConfigObj.viewAnalyzerConfig(filePath.analyzerConfiguration);
    });
    it("To validate that a user is able to edit analyzerConfiguration", () => {
      analyzerConfigObj.updateAnalyzerConfig(filePath.analyzerConfiguration);
    });

    it("To validate that a user is able to  archive analyzerConfiguration", () => {
      analyzerConfigObj.archiveAnalyzerConfig(filePath.analyzerConfiguration);
    });
  }
);
