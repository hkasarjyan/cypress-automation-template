import { Strings } from "../strings/strings";
const strings = new Strings();

export class LoginPage {
  enterUsername(username) {
    cy.get(strings.username_textbox).type(username);
  }

  enterPassword(password) {
    cy.get(strings.password_textbox).type(password);
  }

  clickLogin() {
    cy.get(strings.login_button).click();
  }

  clickButtonByPath(buttonPath) {
    cy.get(buttonPath, { timeout: 3000 }).click();
  }

  clickButtonByText(buttonText) {
    cy.contains(buttonText, { timeout: 5000 }).click();
  }

  verifyTextByPath(textPath, textValue) {
    cy.get(textPath, { timeout: 3000 }).should("contain", textValue);
  }
}
