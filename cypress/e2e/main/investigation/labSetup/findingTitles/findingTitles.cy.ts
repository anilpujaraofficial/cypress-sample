import { investigation } from "@helpers/filePath/lab";
import { gotoMenuSubMenuFeatureSubFeature as navigation } from "@support/commands";
import { FindingTitleObj } from "@pageObject/main/investigation/labSetup/findingTitlesObj";
const filePath = investigation.labSetup.findingTitles;
const findingTitlesObj = new FindingTitleObj();

describe(
  "Investigation > Lab Setup > Finding Title",
  { tags: ["@labSetup", "@lab"] },
  () => {
    before(() => {
      Cypress.session.clearAllSavedSessions();
      cy.rmDir(filePath.findingTitles_dir);
    });
    beforeEach(() => {
      cy.adminLogin();
      navigation(["Investigation", "Lab Setup", "Finding Title"]);
    });
    it("To validate that a user is able to create finding titles", () => {
      findingTitlesObj.createFindingTitle(filePath.findingTitles);
    });
    it("To validate that a user is able to search finding titles", () => {
      findingTitlesObj.searchFindingTitle(filePath.findingTitles);
    });
    it("To validate that a user able to view finding titles", () => {
      findingTitlesObj.viewFindingTitle(filePath.findingTitles);
    });
    it("To validate that a user is able to edit finding titles", () => {
      findingTitlesObj.updateFindingTitle(filePath.findingTitles);
    });

    it("To validate that a user is able to  archive finding titles", () => {
      findingTitlesObj.archiveFindingTitle(filePath.findingTitles);
    });
  }
);
