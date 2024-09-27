import { investigation } from "@helpers/filePath/lab";
import { gotoMenuSubMenuFeatureSubFeature as navigation } from "@support/commands";
import { OrganismObj } from "@pageObject/main/investigation/labSetup/orgabismObj";
const filePath = investigation.labSetup;
const organismObj = new OrganismObj();
describe(
  "Investigation > Lab Setup > Organism",
  { tags: ["@labSetup", "@lab"] },
  () => {
    before(() => {
      Cypress.session.clearAllSavedSessions();
      cy.rmDir(filePath.organism_dir);
      Cypress.session.clearAllSavedSessions();
    });
    beforeEach(() => {
      cy.adminLogin();
      navigation(["Investigation", "Lab Setup", "Organism"]);
    });
    it("To validate that a user is able to create Organism", () => {
      organismObj.createOrganism(filePath.organism);
    });
    it("To validate that a user is able to search Organism", () => {
      organismObj.searchOrganism(filePath.organism);
    });
    it("To validate that a user able to view Organism", () => {
      organismObj.viewOrganism(filePath.organism);
    });

    it("To validate that a user is able to edit Organism", () => {
      organismObj.updateOrganism(filePath.organism);
    });

    it("To validate that a user is able to  archive Organism", () => {
      organismObj.archiveOrganism(filePath.organism);
    });
  }
);
