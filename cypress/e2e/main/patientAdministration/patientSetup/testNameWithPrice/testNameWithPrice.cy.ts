import {
  getEnvVariables,
  gotoMenuSubMenuFeatureSubFeature as sidebarNavigation,
} from "@support/commands";
import { userManagment } from "@helpers/filePath/um";
import { APIObj } from "@pageObject/apiObj/apiObj";
import { UserManagement } from "@helpers/faker/um";
import { PatientAdministration } from "@helpers/faker/pa";
import { patientAdministration } from "@helpers/filePath/pa";
import TestNameWithPriceModule from "@pages/main/patientAdministration/patientSetup/testNameWithPrice";
import TestNameWithPriceObj from "@pageObject/main/patientAdministration/patientSetup/testNameWithPriceObj";

const filePath = patientAdministration.patientSetup.testNameWithPrice;

const testnamewithpriceObj = new TestNameWithPriceObj();

describe(
  "Patient Administration > Setup > Testname with with price",
  { tags: ["@paSetup", "@pa"] },
  () => {
    before(() => {
      Cypress.session.clearAllSavedSessions();
      // cy.rmDir(filePath.testNameWithPrice_dir);
      testnamewithpriceObj.addDependency(filePath);
    });

    beforeEach(() => {
      cy.adminLogin();
      sidebarNavigation([
        "Patient Administration",
        "Patient Setup",
        "Test Name With Price",
      ]);
    });

    after(() => {
      testnamewithpriceObj.archiveDependency(filePath);
    });

    it("Validate that a user is able to create testname with price", () => {
      testnamewithpriceObj.createTestNameWithPrice(filePath);
    });

    it("Validate that a user is able to search Employee", () => {
      testnamewithpriceObj.searchTestNameWithPrice(filePath.testNameWithPrice);
    });

    it("Validate that a user is able to view Employee", () => {
      testnamewithpriceObj.viewTestNameWithPrice(filePath.testNameWithPrice);
    });

    //   it("Validate that a user is able to update Employee", () => {
    //     employee.updateEmployee(filePath.employee);
    //   });

    //   it("Validate that a user is able to archive Employee", () => {
    //     employee.archiveEmployee(filePath.employee);
    //   });
  }
);
