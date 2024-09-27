import { investigation } from "@helpers/filePath/lab";
import {
  levelDescObj,
  lotNumberObj,
  QualityControlMasterObj,
} from "@pageObject/main/investigation/labSetup/qualityControlMasterObj";
import { gotoMenuSubMenuFeatureSubFeature as navigation } from "@support/commands";

const filePath = investigation.labSetup.qcmaster;
const qcObj = new QualityControlMasterObj();
const lotObj = new lotNumberObj();
const levelObj = new levelDescObj();

context(
  "Investigation > Lab Setup > Quality Control Master",
  { tags: ["@labSetup", "@lab"] },
  () => {
    before(() => {
      Cypress.session.clearAllSavedSessions();
      cy.rmDir(filePath.qcmaster_dir);
    });
    beforeEach(() => {
      cy.adminLogin();
      navigation(["Investigation", "Lab Setup", "Quality Control Master"]);
    });

    describe("Quality Control Master > Lot Number", () => {
      it("To validate that a user is able to create Lot Number", () => {
        lotObj.createLotnumber(filePath.lot_num);
      });
      it("To validate that a user is able to search Lot Number", () => {
        lotObj.searchLotnumber(filePath.lot_num);
      });
      it("To validate that a user able to view Lot Number", () => {
        lotObj.updateLotnumber(filePath.lot_num);
      });
      it("To validate that a user able to view Lot Number", () => {
        lotObj.viewLotnumber(filePath.lot_num);
      });

      it("To validate that a user is able to edit Lot Number", () => {
        lotObj.archiveLotnumber(filePath.lot_num);
      });
    });

    describe("Quality Control Master > Level Desc", () => {
      it("To validate that a user is able to create Level Desc", () => {
        levelObj.createLevelDesc(filePath.level_desc);
      });
      it("To validate that a user is able to search Level Desc", () => {
        levelObj.searchLevelDesc(filePath.level_desc);
      });
      it("To validate that a user able to view level Number", () => {
        levelObj.viewLevelDesc(filePath.level_desc);
      });
      it("To validate that a user is able to edit Level Desc", () => {
        levelObj.updateLevelDesc(filePath.level_desc);
      });

      it("To validate that a user is able to  archive Level Desc", () => {
        levelObj.archiveLotnumber(filePath.level_desc);
      });
    });
  }
);
