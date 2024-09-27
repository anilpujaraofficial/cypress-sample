/// <reference types="cypress" />

class Button {
  clickButton(xpath: string) {
    cy.get(xpath).should("exist").click().wait(500);
  }

  clickWithContain(xpath, value) {
    cy.get(xpath).contains(value).click().wait(500);
  }

  clickCheckboxIfUnchecked(labelText: string) {
    cy.contains("label", labelText).within(() => {
      cy.get('input[type="checkbox"]').then(($checkbox) => {
        if (!$checkbox.is(":checked")) {
          cy.wrap($checkbox).click();
        }
      });
    });
  }

  archive(xpath: string, value: string) {
    cy.wait(500);
    this.actions(["Action", "Archive"]);
    cy.get("div.ant-popconfirm-message-text").should(
      "contain",
      "Are you sure you want to archive?"
    );
    cy.get(xpath).contains(value).click();
  }

  actions(values: string[]) {
    values.forEach((item) => {
      cy.dataCy(item).click().wait(500);
    });
  }

  clickSwitch(xpath: string, value: boolean) {
    cy.get(xpath)
      .should("be.visible")
      .and("exist")
      .then(($element) => {
        // Get the current state of the switch
        const currentState = $element.attr("aria-checked") === "true";

        // Check if the current state matches the desired state
        if (currentState !== value) {
          // Click the switch if the state does not match the desired state
          cy.wrap($element).should("exist").and("be.visible").click();
        }
      });
  }
}

export default Button;
