import { OrganizationsSuborganizationXpathAssert } from "pages/main/userManagment/setup/organizationsSuborganization";
import { APIObj } from "@pageObject/apiObj/apiObj";
import { CommonPageObj } from "@pageObject/commonPageObj/commonPageObj";

import {
  getEnvVariables,
  gotoMenuSubMenuFeatureSubFeature as navigation,
} from "@support/commands";

let orgXpathAssertion = new OrganizationsSuborganizationXpathAssert();
let apiObj = new APIObj();
let commonPageObj = new CommonPageObj();
export class OrganizationSuborganization {
  /**
   *
   * @param login login file path
   * @param org organizatio file path
   */
  verifyOrganization(login, org) {
    apiObj.loginAPI(login);
    cy.readFile(login).then((uri) => {
      cy.intercept(getEnvVariables("apiUrl") + `/${uri.redirect_uri}`).as(
        "org"
      );
    });
    navigation(["User Management", "Setup", "Organization"]);

    cy.wait("@org").then((res) => {
      cy.writeFile(org, res.response.body.data.organization_info);
    });

    cy.readFile(org).then((res) => {
      let data = [
        res.code,
        res.name,
        res.address,
        res.email,
        // res.phone_no || null,
      ];
      data.forEach((item) => {
        commonPageObj.verifyTableData(orgXpathAssertion.list().table_td, item);
      });
    });
  }

  verifySubOrganization(login, suborg) {
    apiObj.loginAPI(login);
    cy.readFile(login).then((uri) => {
      cy.intercept(getEnvVariables("apiUrl") + `/${uri.redirect_uri}`).as(
        "org"
      );
    });
    navigation(["User Management", "Setup", "Sub Organization"]);

    cy.wait("@org").then((res) => {
      cy.writeFile(
        suborg,
        res.response.body.data.organization_info.sub_organizations
      );
    });

    cy.readFile(suborg).then((res) => {
      res.forEach((item) => {
        let data = {
          name: item.name,
          code: item.code,
          address: item.address,
        };
        commonPageObj.verifyTableData(
          orgXpathAssertion.list().table_td,
          data.name
        );
        commonPageObj.verifyTableData(
          orgXpathAssertion.list().table_td,
          data.code
        );
        commonPageObj.verifyTableData(
          orgXpathAssertion.list().table_td,
          data.address
        );
      });
    });
  }
}
