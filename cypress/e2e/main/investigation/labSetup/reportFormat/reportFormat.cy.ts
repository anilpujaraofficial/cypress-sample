import { investigation } from "@helpers/filePath/lab";
import { gotoMenuSubMenuFeatureSubFeature as navigation } from "@support/commands";

import { ReportFormatObj } from "@pageObject/main/investigation/labSetup/reportFormatObj";

const filePath = investigation.labSetup.reportFormat;

const reportFormatObj = new ReportFormatObj();
describe(
  "Investigation > Lab Setup > Report Format",
  { tags: ["@labSetup", "@lab"] },
  () => {
    before(() => {
      Cypress.session.clearAllSavedSessions();
      cy.rmDir(filePath.reportFormat_dir);
      reportFormatObj.addDependency(filePath);
    });
    beforeEach(() => {
      cy.adminLogin();
      navigation(["Investigation", "Lab Setup", "Report Format"]);
    });
    after(() => {
      reportFormatObj.archiveDependency(filePath);
    });
    it("To validate that a user is able to create reportFormat", () => {
      reportFormatObj.createReportFormat(filePath.reportFormat);
    });
    it("To validate that a user is able to search reportFormat", () => {
      reportFormatObj.searchReportFormat(filePath.reportFormat);
    });

    it("To validate that a user able to view reportFormat", () => {
      reportFormatObj.viewReportFormat(filePath.reportFormat);
    });

    it("To validate that a user able to update reportFormat", () => {
      reportFormatObj.updateReportFormat(filePath.reportFormat);
    });

    it("To validate that a user is able to  archive reportFormat", () => {
      reportFormatObj.archiveReportFormat(filePath.reportFormat);
    });
  }
);
