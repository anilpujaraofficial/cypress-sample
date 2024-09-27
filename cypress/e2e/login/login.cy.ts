import { LoginPageObj } from "@pageObject/loginObj/loginObj";

const loginPageObj = new LoginPageObj();

describe("Login", { tags: ["@login"] }, () => {
  it("To validate that a user unable to login invalid credentials", () => {
    loginPageObj.invalidLogin();
  });
  it("To validate that a user unable to login valid credentials", () => {
    loginPageObj.validLogin();
  });
});
