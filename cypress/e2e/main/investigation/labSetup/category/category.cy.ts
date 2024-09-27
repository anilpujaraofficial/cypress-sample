import { investigation } from "@helpers/filePath/lab";
import { gotoMenuSubMenuFeatureSubFeature as navigation } from "@support/commands";
import { CategoryObj } from "@pageObject/main/investigation/labSetup/categoryObj";
const filePath = investigation.labSetup;
const categoryObj = new CategoryObj();
describe(
  "Investigation > Lab Setup > Category",
  { tags: ["@labSetup", "@lab"] },
  () => {
    before(() => {
      Cypress.session.clearAllSavedSessions();
      cy.rmDir(filePath.category_dir);
    });
    beforeEach(() => {
      cy.adminLogin();
      navigation(["Investigation", "Lab Setup", "Category"]);
    });

    it("To validate that a user is able to create category", () => {
      categoryObj.createCategory(filePath.category);
    });
    it("To validate that a user is able to search category", () => {
      categoryObj.searchCategory(filePath.category);
    });
    it("To validate that a user able  to view category", () => {
      categoryObj.viewCategory(filePath.category);
    });
    it("To validate that a user is able to edit category", () => {
      categoryObj.updateCategory(filePath.category);
    });

    it("To validate that a user is able to  archive category", () => {
      categoryObj.archiveCategory(filePath.category);
    });
  }
);
