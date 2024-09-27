/// <reference types="cypress" />

class Form {
  inputField(xpath: any, value: any) {
    cy.get(xpath)
      .clear({ force: true })
      .type(value)
      .should("have.value", value)
      .wait(500);
  }

  getData(xpath: string) {
    return cy
      .get(xpath)
      .click({ force: true })
      .invoke("val")
      .then((val) => {
        return val as string;
      });
  }

  getDropdown(xpath: string, value: string) {
    cy.get(xpath)
      .clear({ force: true })
      .type(value, { force: true })
      .should("have.value", value)
      .wait(500);
    cy.get(`div[title='${value}']`).click();
  }

  getDropdownWithValue(xpath: string, value: string) {
    cy.get(xpath)
      .click({ force: true })
      .type(`${value}{enter}`, { force: true });
  }

  CKeditorInput(value: string) {
    cy.get(".ck-content[contenteditable=true]")
      .then((el) => {
        // @ts-ignore
        const editor = el[0].ckeditorInstance;
        editor.setData(value);
      })
      .wait(500);
  }
}

export default Form;
