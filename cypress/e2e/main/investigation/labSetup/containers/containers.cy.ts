import { investigation } from "@helpers/filePath/lab";
import { gotoMenuSubMenuFeatureSubFeature as navigation } from "@support/commands";
import { ContainerObj } from "@pageObject/main/investigation/labSetup/containerObj";
const filePath = investigation.labSetup;
const containerObj = new ContainerObj();
describe(
  "Investigation > Lab Setup > Container",
  { tags: ["@labSetup", "@lab"] },
  () => {
    before(() => {
      Cypress.session.clearAllSavedSessions();
      cy.rmDir(filePath.container_dir);
    });
    beforeEach(() => {
      cy.adminLogin();
      navigation(["Investigation", "Lab Setup", "Container"]);
    });
    it("To validate that a user is able to create container", () => {
      containerObj.createContainer(filePath.container);
    });
    it("To validate that a user is able to search container", () => {
      containerObj.searchContainer(filePath.container);
    });
    it("To validate that a user able to view container", () => {
      containerObj.viewContainer(filePath.container);
    });
    it("To validate that a user is able to edit container", () => {
      containerObj.updateContainer(filePath.container);
    });

    it("To validate that a user is able to  archive container", () => {
      containerObj.archiveContainer(filePath.container);
    });
  }
);
