import { investigation } from "@helpers/filePath/lab";
import { getEnvVariables } from "@support/commands";
import { gotoMenuSubMenuFeatureSubFeature as navigation } from "@support/commands";
import { Investigation } from "@helpers/faker/lab";
import { APIObj } from "@pageObject/apiObj/apiObj";
import { AnitibioticsObj } from "@pageObject/main/investigation/labSetup/anitibioticsObj";

const apiData = new Investigation();
const apiObj = new APIObj();
const filePath = investigation.labSetup.antibiotic;
const anitibioticsObj = new AnitibioticsObj();
describe(
  "Investigation > Lab Setup >Antibiotic",
  { tags: ["@labSetup", "@lab"] },
  () => {
    before(() => {
      Cypress.session.clearAllSavedSessions();
      cy.rmDir(filePath.antibiotic_dir);
      anitibioticsObj.addDependency(filePath);
    });

    beforeEach(() => {
      cy.adminLogin();
      navigation(["Investigation", "Lab Setup", "Antibiotic"]);
    });
    after(() => {
      anitibioticsObj.archiveDependency(filePath);
    });
    it("To validate that a user is able to create anitibiotics", () => {
      anitibioticsObj.createAntibiotic(filePath.antibiotic);
    });
    it("To validate that a user is able to search anitibiotics", () => {
      anitibioticsObj.searchAntibiotic(filePath.antibiotic);
    });
    it("To validate that a user able  view anitibiotics", () => {
      anitibioticsObj.viewAntibiotic(filePath.antibiotic);
    });
    it("To validate that a user is able to edit anitibiotics", () => {
      anitibioticsObj.updateAntibiotic(filePath.antibiotic);
    });
    // it("To verify the validation message in name field", () => {
    //   anitibioticsObj.verify_the_validation_message_in_name();
    // });

    // it("To verify the validation message in abbreviation field", () => {
    //   anitibioticsObj.verify_the_validation_message_in_abbreviation();
    // });

    // it("To verify the validation message in organism field || To verify the validation message in antibiotic group field", () => {
    //   anitibioticsObj.verify_validation_message_in_organism_antibioticGroup_field();
    // });
    it("To validate that a user is able to  archive anitibiotics", () => {
      anitibioticsObj.archiveAntibiotic(filePath.antibiotic);
    });
  }
);
