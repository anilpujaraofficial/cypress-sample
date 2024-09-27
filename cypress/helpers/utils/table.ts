import { CommonPageObj } from "@pageObject/commonPageObj/commonPageObj";
import { CommentObj } from "@pageObject/main/investigation/labSetup/commentObj";
const commonPage = new CommonPageObj();

/// <reference types="cypress" />
class TablePage {
  tableBody(xpath: any, value: any) {
    cy.get(xpath).should("contain", value);
  }

  tableBodySwitch(xpath: string, value: boolean) {
    cy.get(xpath).then(($element) => {
      const currentState = $element.attr("aria-checked") === "true";

      if (currentState === value) {
        cy.wrap($element).should("have.attr", "aria-checked", value.toString());
      } else {
        cy.wrap($element).should(
          "have.attr",
          "aria-checked",
          (!value).toString()
        );
      }
    });
  }
}

export default TablePage;
