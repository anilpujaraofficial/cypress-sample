import { investigation } from "@helpers/filePath/lab";
import { getEnvVariables } from "@support/commands";
const tokenFilePath = "cypress/fixtures/TestData/api/login.json";
require("dotenv").config(); // Load .env file

export class APIObj {
  /**
   * login API
   * @param tokenFilePath
   *
   */
  loginAPI(tokenFilePath) {
    cy.request({
      method: "POST",
      url: getEnvVariables("apiUrl") + "/login",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        username: getEnvVariables("username"),
        password: getEnvVariables("password"),
      },
    }).then((res) => {
      expect(res.body.status).to.eq("success");
      expect(res.body.code).to.eq(200);
      cy.writeFile(tokenFilePath, res.body.data);
      this.X_Feature_Code();
    });
  }

  /**
   *Create API
   * @param {string} apiUrl
   * @param {string} fakerData
   * @param {string} filePath
   *
   */
  createAPI(apiUrl: string, fakerData: any, filePath: string) {
    cy.task("checkFileExists", filePath).then((bool) => {
      if (!bool) {
        this.loginAPI(tokenFilePath);
        cy.readFile(tokenFilePath).then((data) => {
          cy.request({
            method: "POST",
            url: apiUrl,
            headers: {
              Authorization: `${data.token_type} ${data.access_token}`,
              "Content-Type": "application/json",
              "X-Feature-Code": data.code,
            },
            body: fakerData,
          }).then((res) => {
            expect(res.body.status).to.eq("success");
            expect(res.body.code).to.eq(201);
            cy.writeFile(filePath, res.body.data);
          });
        });
      }
    });
  }
  /**
   * Delete API
   * @param apiUrl
   * @param filePath
   */
  deleteAPI(apiUrl: string, filePath: string) {
    cy.readFile(filePath).then((id) => {
      this.loginAPI(tokenFilePath);
      cy.readFile(tokenFilePath).then((data) => {
        cy.request({
          method: "DELETE",
          url: `${apiUrl}${id.id}`,
          headers: {
            "Content-Type": "application/json",
            Authorization: `${data.token_type} ${data.access_token}`,
            "X-Feature-Code": data.code,
          },
        }).then((res) => {
          expect(res.body.status).to.eq("success");
          expect(res.body.code).to.eq(200);
        });
      });
    });
  }
  /**
   * Get x feature code
   */
  X_Feature_Code() {
    cy.readFile(tokenFilePath).then((data) => {
      cy.request({
        method: "GET",
        url: `${getEnvVariables("apiUrl")}/${data.redirect_uri}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `${data.token_type} ${data.access_token}`,
        },
      }).then((res) => {
        expect(res.body.code).to.eq(200);
        const featureCodes = this.getFeatureCodes(res.body.data.privileges);
        data.code = featureCodes[0];
        cy.writeFile(tokenFilePath, data);
      });
    });
  }
  /**
   * Get privilege with code
   * @param privileges
   * @returns
   */
  getFeatureCodes(privileges: any[]): string[] {
    const featureCodes: string[] = [];
    privileges.forEach((privilege) => {
      privilege.sub_menus.forEach((subMenu) => {
        subMenu.features.forEach((feature) => {
          featureCodes.push(feature.code);
        });
      });
    });
    return featureCodes;
  }
  /**
   * Departemnt wise privilege
   * @param filePath
   * @param deptAdd
   */
  departmentWisePrivilege(filePath, deptAdd) {
    this.loginAPI(tokenFilePath);
    cy.readFile(tokenFilePath).then((data) => {
      cy.request({
        method: "GET",
        url: `${getEnvVariables(
          "apiUrl"
        )}/users?page=1&per_page=15&q=${getEnvVariables("username")}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `${data.token_type} ${data.access_token}`,
          "X-Feature-Code": data.code,
        },
      }).then((res) => {
        expect(res.body.code).to.eq(200);
        cy.writeFile(filePath, res.body.data[0]);
      });
    });

    cy.readFile(filePath).then((deptIds) => {
      let depts = deptIds.departments.map((item) => {
        return item.id;
      });
      let role = deptIds.roles.map((roleId) => {
        return roleId.id;
      });

      cy.readFile(deptAdd).then((res) => {
        depts.push(res.id);

        cy.readFile(tokenFilePath).then((data) => {
          cy.request({
            method: "PUT",
            url: `${getEnvVariables("apiUrl")}/users/${getEnvVariables(
              "user_id"
            )}`,
            headers: {
              "Content-Type": "application/json",
              Authorization: `${data.token_type} ${data.access_token}`,
              "X-Feature-Code": data.code,
            },
            body: {
              name: getEnvVariables("name"),
              username: getEnvVariables("username"),
              email: getEnvVariables("email"),
              sub_organization_id: getEnvVariables("sub_or_id"),
              department_id: depts,
              role_id: role,
            },
          }).then((res) => {
            expect(res.body.status).to.eq("success");
            expect(res.body.code).to.eq(201);
          });
        });
      });
    });
  }
}
