import "cypress-file-upload";
import "cypress-iframe";
import LoginPage from "../pages/login/login";
import Form from "../helpers/utils/form";
import Button from "../helpers/utils/button";

let loginPageXpath = new LoginPage();
let form = new Form();
let button = new Button();

// ! admin login with session

Cypress.Commands.add("adminLogin", () => {
  let url = getEnvVariables("url");

  cy.session("admin_login", () => {
    cy.visit(url);
    form.inputField(
      loginPageXpath.form().username,
      getEnvVariables("username")
    );
    form.inputField(
      loginPageXpath.form().password,
      getEnvVariables("password")
    );
    button.clickButton(loginPageXpath.button().submit);
    cy.wait(6000);
  });
  cy.visit(url);
  cy.url().should("include", url);
});

//Agent login
Cypress.Commands.add("agentLogin", () => {
  let url = getEnvVariables("url");

  cy.session("agent_login", () => {
    cy.visit(url);
    form.inputField(
      loginPageXpath.form().username,
      getEnvVariables("agent_username")
    );
    form.inputField(
      loginPageXpath.form().password,
      getEnvVariables("agent_password")
    );
    button.clickButton(loginPageXpath.button().submit);
    cy.wait(6000);
  });
  cy.visit(url);
  cy.url().should("include", url);
});
// ! remove directory
Cypress.Commands.add("rmDir", (dirPath) => {
  cy.task("checkFileExists", dirPath).then((data) => {
    if (data) {
      cy.task("removeDirectory", dirPath);
    } else {
      cy.log("directory not found");
    }
  });
});
// ! remove file
Cypress.Commands.add("rmFile", (filePath) => {
  cy.task("checkFileExists", filePath).then((data) => {
    if (data) {
      cy.task("deleteFile", filePath);
    } else {
      cy.log("file not found");
    }
  });
});

//! close new window

Cypress.Commands.add("closeNewWindow", (newUrl) => {
  cy.window().then((win) => {
    cy.stub(win, "open").as("windowOpen");
  });
  // cy.wait("@windowOpen").should("be.calledWith", newUrl);
  cy.window().then((win) => {
    win.location.href = newUrl;
  });
});
// ! force visit
Cypress.Commands.add("forceVisit", (url) => {
  cy.window().then((win) => {
    return win.open(url, "_self");
  });
});
//! remove file
Cypress.Commands.add("rmFile", (filePath) => {
  cy.task("checkFileExists", filePath).then((data) => {
    if (data) {
      cy.task("deleteFile", filePath);
    } else {
      cy.log("file not found");
    }
  });
});

//! drag and drop
Cypress.Commands.add("dragTo", (subject, target) => {
  cy.get(subject).trigger("dragstart");
  cy.wait(500);
  cy.get(target).trigger("drop");
});

//! close print popup

Cypress.Commands.add("closePrintPopup", (url) => {
  cy.visit(url, {
    onBeforeLoad: (win) => cy.stub(win, "print").returns(undefined),
  });
  cy.wait(500);
  cy.window().then((win) => {
    win.print();
    expect(win.print).to.be.calledOnce;
  });
});

Cypress.Commands.add("dataCy", (value) => {
  return cy.get(`[data-cy="${value}"]`);
});

Cypress.Commands.add("verifyApiStatus", (url, code, status) => {
  cy.intercept(`/api/**`).as("res");
  cy.visit(getEnvVariables("url") + url);
  cy.url().should("include", url);
  cy.wait("@res").then((res) => {
    expect(res.response.body.code).to.be.equal(code);
    expect(res.response.body.status).to.be.equal(status);
  });
});

/**
 *
 * @param value
 * @returns
 */
export function getEnvVariables(value) {
  return Cypress.env(Cypress.env("testEnv"))[value];
}
/**
 *
 * @param values \
 */
export function gotoMenuSubMenuFeatureSubFeature(values: any) {
  values.forEach((element: string) => {
    cy.dataCy(element).click().wait(500);
  });
}
/**
 * Global
 *
 */
declare global {
  namespace Cypress {
    interface Chainable {
      verifyApiStatus(url, code, status): Chainable<JQuery<HTMLElement>>;
      dataCy(value: string): Chainable<JQuery<HTMLElement>>;
      adminLogin(): Chainable<JQuery<HTMLElement>>;
      agentLogin(): Chainable<JQuery<HTMLElement>>;
      rmDir(value: any): Chainable<JQuery<HTMLElement>>;
      rmFile(value: any): Chainable<JQuery<HTMLElement>>;

      closeNewWindow(): Chainable<JQuery<HTMLElement>>;
      forceVisit(value: any): Chainable<JQuery<HTMLElement>>;
      dragTo(subject: any, target: any): Chainable<JQuery<HTMLElement>>;
      closePrintPopup(value: any): Chainable<JQuery<HTMLElement>>;
      closeNewWindow(value: any): Chainable<JQuery<HTMLElement>>;
    }
  }
}
