import { userManagment } from "@helpers/filePath/um";
import { OrganizationSuborganization } from "@pageObject/main/userManagment/setup/organizationsSuborganizationObj";

const orgObj = new OrganizationSuborganization();
const filePath = userManagment.setup.org;
describe(
  "User Management > Setup > Organization",
  { tags: ["@umSetup", "@um"] },
  () => {
    beforeEach(() => {
      cy.rmDir(filePath.org_dir);
      cy.adminLogin();
    });

    it("To validate that a user is able to verify organization data", () => {
      orgObj.verifyOrganization(filePath.login, filePath.org);
    });
  }
);
