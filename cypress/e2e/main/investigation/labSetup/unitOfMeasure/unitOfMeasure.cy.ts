import { investigation } from "@helpers/filePath/lab";
import { gotoMenuSubMenuFeatureSubFeature as navigation } from "@support/commands";
import { UnitOfMeasureObj } from "@pageObject/main/investigation/labSetup/unitOfMeasureObj";
const filePath = investigation.labSetup;

const uomsObj = new UnitOfMeasureObj();
describe(
  "Investigation > Lab Setup > Unit Of Measure",
  { tags: ["@labSetup", "@lab"] },
  () => {
    before(() => {
      Cypress.session.clearAllSavedSessions();
      cy.rmDir(filePath.uoms_dir);
    });
    beforeEach(() => {
      cy.adminLogin();
      navigation(["Investigation", "Lab Setup", "Unit Of Measure"]);
    });
    it("To validate that a user is able to create unit of measure", () => {
      uomsObj.createUnitOfMeasure(filePath.uoms);
    });
    it("To validate that a user is able to search unit of measure", () => {
      uomsObj.searchUnitOfMeasure(filePath.uoms);
    });
    it("To validate that a user is able to edit unit of measure", () => {
      uomsObj.updateUnitOfMeasure(filePath.uoms);
    });

    it("To validate that a user able to view unit of measure", () => {
      uomsObj.viewUnitOfMeasure(filePath.uoms);
    });

    it("To validate that a user is able to  archive unit of measure", () => {
      uomsObj.archiveUnitOfMeasure(filePath.uoms);
    });
  }
);
