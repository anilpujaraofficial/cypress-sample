import CustomerObj from "@pageObject/main/account/setup/customerObj";
import { gotoMenuSubMenuFeatureSubFeature as sidebarNavigation } from "@support/commands";
import { account } from "@helpers/filePath/account";

describe("Customers", { tags: ["@accountSetup", "@account"] }, () => {
  const customer = new CustomerObj();
  const filePath = account.setup.customer;

  before(() => {
    Cypress.session.clearAllSavedSessions();

    cy.rmDir(filePath.customer_dir);
  });

  beforeEach(() => {
    cy.adminLogin();
    sidebarNavigation(["Account", "Setup", "Customer"]);
  });

  it("Validate that a user is able to create Customer", () => {
    customer.createCustomer(filePath.customer);
  });
  it("Validate that a user is able to search Customer", () => {
    customer.searchCustomer(filePath.customer);
  });
  it("Validate that a user is able to view Customer", () => {
    customer.viewCustomer(filePath.customer);
  });
  it("Validate that a user is able to update Customer", () => {
    customer.updateCustomer(filePath.customer);
  });
  it("Validate that a user is able to archive Customer", () => {
    customer.archiveCustomer(filePath.customer);
  });
});
