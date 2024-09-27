import { investigation } from "@helpers/filePath/lab";
import { gotoMenuSubMenuFeatureSubFeature as navigation } from "@support/commands";
import { ReportFooterObj } from "@pageObject/main/investigation/labSetup/reportFooterObj";
const filePath = investigation.labSetup.reportFooter;
const reportFooterObj = new ReportFooterObj();
describe(
  "Investigation > Lab Setup > Report Footer",
  { tags: ["@labSetup", "@lab"] },
  () => {
    before(() => {
      Cypress.session.clearAllSavedSessions();
      cy.rmDir(filePath.reportFooter_dir);
      reportFooterObj.addDependency(filePath);
    });
    beforeEach(() => {
      cy.adminLogin();
      navigation(["Investigation", "Lab Setup", "Report Footer"]);
    });
    after(() => {
      reportFooterObj.archiveDependency(filePath);
    });
    it("To validate that a user is able to create reportFooter", () => {
      reportFooterObj.createReportFooter(filePath.reportFooter);
    });
    it("To validate that a user is able to search reportFooter", () => {
      reportFooterObj.searchReportFooter(filePath.reportFooter);
    });

    it("To validate that a user able to view reportFooter", () => {
      reportFooterObj.viewReportFooter(filePath.reportFooter);
    });

    it("To validate that a user able to update reportFooter", () => {
      reportFooterObj.updateReportFooter(filePath.reportFooter);
    });

    it("To validate that a user is able to  archive reportFooter", () => {
      reportFooterObj.archiveReportFooter(filePath.reportFooter);
    });
  }
);
