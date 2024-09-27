import { investigation } from "@helpers/filePath/lab";
import {
  getEnvVariables,
  gotoMenuSubMenuFeatureSubFeature as navigation,
} from "@support/commands";
import { EndnoteObj } from "@pageObject/main/investigation/labSetup/endnoteObj";

import { APIObj } from "@pageObject/apiObj/apiObj";
import { UserManagement } from "@helpers/faker/um";
import { PatientAdministration, testNameWithPrice } from "@helpers/faker/pa";

const filePath = investigation.labSetup.endnote;
const apiData = new UserManagement();
const paData = new PatientAdministration();
const apiObj = new APIObj();
const endnoteObj = new EndnoteObj();
describe(
  "Investigation > Lab Setup > Endnote",
  { tags: ["@labSetup", "@lab"] },
  () => {
    before(() => {
      Cypress.session.clearAllSavedSessions();
      cy.rmDir(filePath.endnote_dir);
      endnoteObj.addDependency(filePath);
    });
    beforeEach(() => {
      cy.adminLogin();
      navigation(["Investigation", "Lab Setup", "Endnote"]);
    });
    after(() => {
      endnoteObj.archiveDependency(filePath);
    });
    it("To validate that a user is able to create endnote", () => {
      endnoteObj.createEndnote(filePath.endnote);
    });
    it("To validate that a user is able to search endnote", () => {
      endnoteObj.searchEndnote(filePath.endnote);
    });

    it("To validate that a user able to view endnote", () => {
      endnoteObj.viewEndnote(filePath.endnote);
    });

    it("To validate that a user able to update endnote", () => {
      endnoteObj.updateEndnote(filePath.endnote);
    });

    it("To validate that a user is able to  archive endnote", () => {
      endnoteObj.archiveEndnote(filePath.endnote);
    });
  }
);
