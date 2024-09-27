import { userManagment } from "@helpers/filePath/um";
import { OrganizationSuborganization } from "@pageObject/main/userManagment/setup/organizationsSuborganizationObj";

const suborgObj = new OrganizationSuborganization();
const filePath = userManagment.setup.suborg;
describe(
  "User Management > Setup > Sub Organization",
  { tags: ["@umSetup", "@um"] },
  () => {
    beforeEach(() => {
      cy.rmDir(filePath.suborg);
      cy.adminLogin();
    });

    it("To validate that a user is able to verify organization data", () => {
      suborgObj.verifySubOrganization(filePath.login, filePath.suborg);
    });
  }
);
