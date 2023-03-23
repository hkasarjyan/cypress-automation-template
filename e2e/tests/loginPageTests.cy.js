import { LoginPage } from "../pages/loginPage";

import { Strings } from "../strings/strings";
const loginPage = new LoginPage();
const strings = new Strings();

describe("All login tests", () => {
  beforeEach(function () {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
  });

  it("Login with correct credentials", function () {
    // cy.pause();
    loginPage.enterUsername(strings.username);
    loginPage.enterPassword(strings.password);
    loginPage.clickLogin();
    cy.location("pathname").should("equal", strings.dashboardUrl);
    loginPage.clickButtonByPath(strings.userIconPath);
    cy.wait(2000);
    loginPage.clickButtonByText(strings.logoutText);
    cy.location("pathname").should("equal", strings.loginPageUrl);
  });

  it("Login with valid username, correct password", function () {
    loginPage.enterUsername(strings.validUsername);
    loginPage.enterPassword(strings.password);
    loginPage.clickLogin();
    cy.location("pathname").should("equal", strings.dashboardUrl);
    loginPage.clickButtonByPath(strings.userIconPath);
    cy.wait(2000);
    loginPage.clickButtonByText(strings.logoutText);
    cy.location("pathname").should("equal", strings.loginPageUrl);
  });

  it("Login with uncorrect username, correct password", function () {
    loginPage.enterUsername(strings.invalidUsername);
    loginPage.enterPassword(strings.password);
    loginPage.clickLogin();

    loginPage.verifyTextByPath(
      strings.invalidCredentialsPath,
      strings.invalidCredentialsText
    );
  });

  it("Login with correct username, uncorrect password", function () {
    loginPage.enterUsername(strings.username);
    loginPage.enterPassword(strings.invalidPassword);
    loginPage.clickLogin();
    //cy.wait(1000);
    loginPage.verifyTextByPath(
      strings.invalidCredentialsPath,
      strings.invalidCredentialsText
    );
  });

  it("Login without inputting username, input correct password", function () {
    loginPage.enterPassword(strings.password);
    loginPage.clickLogin();
    //cy.wait(1000);
    loginPage.verifyTextByPath(
      strings.passwordRequiredPath,
      strings.requiredText
    );
  });

  it("Login input correct username,  without inputting password", function () {
    loginPage.enterPassword(strings.username);
    loginPage.clickLogin();
    //cy.wait(1000);
    loginPage.verifyTextByPath(
      strings.passwordRequiredPath,
      strings.requiredText
    );
  });
});
