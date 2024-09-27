import LoginPage from "../../pages/login/login";
import AlertMessage from "../../helpers/utils/alertMessage";
import Button from "../../helpers/utils/button";
import Form from "../../helpers/utils/form";
import { getEnvVariables } from "../../support/commands";

let loginPageXpath = new LoginPage();
let form = new Form();
let button = new Button();
let alert = new AlertMessage();

export class LoginPageObj {
  // !valid login
  validLogin() {
    let url = getEnvVariables("url");
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

    alert.alertMessage(loginPageXpath.alert().login_success);
  }
  // !invalid login
  invalidLogin() {
    let url = getEnvVariables("url");
    cy.visit(url);
    form.inputField(loginPageXpath.form().username, "admim");

    form.inputField(loginPageXpath.form().password, "admin@123");

    button.clickButton(loginPageXpath.button().submit);

    alert.formValidation(
      loginPageXpath.form_validation().xpath,
      loginPageXpath.form_validation().username_password_invalid
    );
  }
}
