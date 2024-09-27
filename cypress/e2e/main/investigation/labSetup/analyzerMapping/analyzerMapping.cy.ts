import { investigation } from "@helpers/filePath/lab";
import { gotoMenuSubMenuFeatureSubFeature as navigation } from "@support/commands";

import { AnalyzerMappingObj } from "@pageObject/main/investigation/labSetup/analyzerMappingObj";

const filePath = investigation.labSetup.analyzerMapping;

const analyzerMappingObj = new AnalyzerMappingObj();
describe(
  "Investigation > Lab Setup > Analyzer Mapping",
  { tags: ["@labSetup", "@lab"] },
  () => {
    before(() => {
      Cypress.session.clearAllSavedSessions();
      cy.rmDir(filePath.analyzerMapping_dir);
      analyzerMappingObj.addDependency(filePath);
    });
    beforeEach(() => {
      cy.adminLogin();
      navigation(["Investigation", "Lab Setup", "Analyzer Mapping"]);
    });
    after(() => {
      analyzerMappingObj.archiveDependency(filePath);
    });
    it("To validate that a user is able to create analyzerMapping", () => {
      analyzerMappingObj.createAnalyzerMapping(filePath.analyzerMapping);
    });
    it("To validate that a user is able to search analyzerMapping", () => {
      analyzerMappingObj.searchAnalyzerMapping(filePath.analyzerMapping);
    });

    it("To validate that a user able to view analyzerMapping", () => {
      analyzerMappingObj.viewAnalyzerMapping(filePath.analyzerMapping);
    });

    it("To validate that a user able to update analyzerMapping", () => {
      analyzerMappingObj.updateAnalyzerMapping(filePath.analyzerMapping);
    });

    it("To validate that a user is able to  archive analyzerMapping", () => {
      analyzerMappingObj.archiveAnalyzerMapping(filePath.analyzerMapping);
    });
  }
);
