import FiscalYearObj from "@pageObject/main/account/setup/fiscalYearObj";
import { gotoMenuSubMenuFeatureSubFeature as sidebarNavigation } from "@support/commands";
import { account } from "@helpers/filePath/account";

describe("Fiscal Year", { tags: ["@labSetup", "@account"] }, () => {
  const fiscalYear = new FiscalYearObj();
  const filePath = account.setup.fiscal_year;
  before(() => {
    Cypress.session.clearAllSavedSessions();
    cy.rmDir(filePath.fiscal_year_dir);
  });

  beforeEach(() => {
    cy.adminLogin();
    sidebarNavigation(["Account", "Setup", "Fiscal Year"]);
  });

  it("Validate that a user is able to create fiscal year", () => {
    fiscalYear.createFiscalYear(filePath.fiscal_year);
  });
  it("Validate that a user is able to search fiscal year", () => {
    fiscalYear.searchFiscalYear(filePath.fiscal_year);
  });
  it("Validate that a user is able to view fiscal year", () => {
    fiscalYear.viewFiscalYear(filePath.fiscal_year);
  });
  it("Validate that a user is able to update fiscal year", () => {
    fiscalYear.updateFiscalYear(filePath.fiscal_year);
  });
  it("Validate that a user is able to archive fiscal year", () => {
    fiscalYear.archiveFiscalYear(filePath.fiscal_year);
  });
});
