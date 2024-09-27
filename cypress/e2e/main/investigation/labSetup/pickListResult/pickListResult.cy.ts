import { investigation } from "@helpers/filePath/lab";
import { gotoMenuSubMenuFeatureSubFeature as navigation } from "@support/commands";

import { PickListResultObj } from "@pageObject/main/investigation/labSetup/pickListResultObj";

const filePath = investigation.labSetup.pickListResult;

const pickListResultObj = new PickListResultObj();
describe(
  "Investigation > Lab Setup > Pick List Result",
  { tags: ["@labSetup", "@lab"] },
  () => {
    before(() => {
      Cypress.session.clearAllSavedSessions();
      cy.rmDir(filePath.pickListResult_dir);
      pickListResultObj.addDependency(filePath);
    });
    beforeEach(() => {
      cy.adminLogin();
      navigation(["Investigation", "Lab Setup", "Pick List Result"]);
    });
    after(() => {
      pickListResultObj.archiveDependency(filePath);
    });
    it("To validate that a user is able to create pickListResult", () => {
      pickListResultObj.createPickListResult(filePath.pickListResult);
    });
    it("To validate that a user is able to search pickListResult", () => {
      pickListResultObj.searchPickListResult(filePath.pickListResult);
    });

    it("To validate that a user able to view pickListResult", () => {
      pickListResultObj.viewPickListResult(filePath.pickListResult);
    });

    it("To validate that a user able to update pickListResult", () => {
      pickListResultObj.updatePickListResult(filePath.pickListResult);
    });

    it("To validate that a user is able to  archive pickListResult", () => {
      pickListResultObj.archivePickListResult(filePath.pickListResult);
    });
  }
);
