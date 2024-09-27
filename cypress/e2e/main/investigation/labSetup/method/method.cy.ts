import { Investigation } from "@helpers/faker/lab";
import { investigation } from "@helpers/filePath/lab";
import { APIObj } from "@pageObject/apiObj/apiObj";

import { gotoMenuSubMenuFeatureSubFeature as navigation } from "@support/commands";
import { MethodObj } from "@pageObject/main/investigation/labSetup/methodObj";
import { getEnvVariables } from "@support/commands";
const apiObj = new APIObj();
const filePath = investigation.labSetup.method;
const apiData = new Investigation();
const methodObj = new MethodObj();
describe("Method", { tags: ["@labSetup", "@lab"] }, () => {
  before(() => {
    Cypress.session.clearAllSavedSessions();
    cy.rmDir(filePath.method_dir);
    methodObj.addDependency(filePath);
  });
  beforeEach(() => {
    cy.adminLogin();
    navigation(["Investigation", "Lab Setup", "Method"]);
  });
  after(() => {
    methodObj.archiveDependency(filePath);
  });
  it("To validate that a user is able to create method", () => {
    methodObj.createMethod(filePath.method);
  });
  it("To validate that a user is able to search method", () => {
    methodObj.searchMethod(filePath.method);
  });
  it("To validate that a user able to view method", () => {
    methodObj.viewMethod(filePath.method);
  });

  it("To validate that a user is able to edit method", () => {
    methodObj.updateMethod(filePath.method);
  });

  it("To validate that a user is able to  archive Method", () => {
    methodObj.archiveMethod(filePath.method);
  });
});
