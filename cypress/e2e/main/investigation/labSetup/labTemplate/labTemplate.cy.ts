import { investigation } from "@helpers/filePath/lab";
import { LabTemplateObj } from "@pageObject/main/investigation/labSetup/labTemplateObj";

import { gotoMenuSubMenuFeatureSubFeature as navigation } from "@support/commands";
const filePath = investigation.labSetup.labTem;
const labTemplate = new LabTemplateObj();
describe("Lab Template", () => {
  before(() => {
    Cypress.session.clearAllSavedSessions();
    cy.rmDir(filePath.labTem_dir);
    labTemplate.addDependency(filePath);
  });
  beforeEach(() => {
    cy.adminLogin();
    navigation(["Investigation", "Lab Setup", "Lab Template"]);
  });
  after(() => {
    labTemplate.archiveDependency(filePath);
  });
  it("To validate that a user is able to verify search functionlality", () => {
    labTemplate.searchLabTemplate(filePath.testname, filePath.dept);
  });
  it("To validate that a user is able to add parameters", () => {
    labTemplate.addParameter(filePath.testname, filePath.dept, filePath.test);
  });

  it("To validate that a user is able to add options", () => {
    labTemplate.addOpions(filePath.testname, filePath.dept, filePath.option);
  });
  it("To validate that a user is able to add options", () => {
    labTemplate.endnote(filePath.testname, filePath.dept, filePath.endnote);
  });
});
