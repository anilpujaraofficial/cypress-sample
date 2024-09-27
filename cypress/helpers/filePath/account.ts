let accountSetup = "cypress/fixtures/TestData/account/setup";

export let account = {
  setup: {
    fiscal_year: {
      fiscal_year_dir: accountSetup + "/fiscalYear",
      fiscal_year: accountSetup + "/fiscalYear/fiscalYear.json",
    },
    customer: {
      customer_dir: accountSetup + "/customer",
      customer: accountSetup + "/customer/customer.json",
    },
  },
};
