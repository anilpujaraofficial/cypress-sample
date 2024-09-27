import { investigation } from "@helpers/filePath/lab";

import { gotoMenuSubMenuFeatureSubFeature as navigation } from "@support/commands";
import { ReagentObj } from "@pageObject/main/investigation/labSetup/reagentObj";

const reagentObj = new ReagentObj();

const filePath = investigation.labSetup.reagent;
describe(
  "Investigation > Lab Setup > Reagent",
  { tags: ["@labSetup", "@lab"] },
  () => {
    before(() => {
      Cypress.session.clearAllSavedSessions();
      cy.rmDir(filePath.reagent_dir);

      reagentObj.addDependency(filePath);
    });
    beforeEach(() => {
      cy.adminLogin();
      navigation(["Investigation", "Lab Setup", "Reagent"]);
    });

    after(() => {
      reagentObj.archiveDependency(filePath);
    });

    it("To validate that a user is able to create analyzer configuration", () => {
      reagentObj.createReagent(filePath.reagent, filePath.analyzer);
    });

    it("To validate that a user is able to search analyzer configuration", () => {
      reagentObj.searchReagent(filePath.reagent);
    });

    it("To validate that a user able  to view analyzer configuration", () => {
      reagentObj.viewReagent(filePath.reagent);
    });
    it("To validate that a user is able to edit reagent", () => {
      reagentObj.updateReagent(filePath.reagent);
    });

    it("To validate that a user is able to  archive reagent", () => {
      reagentObj.archiveReagent(filePath.reagent);
    });
  }
);
