/// <reference types="cypress" />
let xpath_alert = "div.ant-notification-notice-description";

class AlertMessage {
  alertMessage(value: string) {
    cy.get(xpath_alert).should("contain", value).wait(500);
  }
  formValidation(xpath: string, value: string) {
    cy.get(xpath).should("contain", value);
  }
}

export default AlertMessage;
