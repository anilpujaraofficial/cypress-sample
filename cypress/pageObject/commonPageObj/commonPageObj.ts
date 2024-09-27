/**
 *
 * @param values menu,submenu,feature and subfeature
 */
export class CommonPageObj {
  verifyInputFieldValue(xpath: string, value: string) {
    cy.get(xpath).invoke("val").should("eq", value);
  }

  verifyCheckUncheck(xpath: string, value: string) {
    cy.get(xpath).then((res) => {
      expect(res.attr("aria-checked")).to.eq(value.toString());
    });
  }
  validateCheckboxStatus(labelText: string, shouldBeChecked: boolean) {
    cy.contains("label", labelText).within(() => {
      cy.get('input[type="checkbox"]').should(
        shouldBeChecked ? "be.checked" : "not.be.checked"
      );
    });
  }

  verifySelectDropDown(value) {
    cy.get(`div span[title='${value}']`).should("exist").and("be.visible");
  }

  verifyCKeditorValue(value) {
    cy.get(`p`).should("contain", value).should("exist").and("be.visible");
  }

  capitalizeFirstLetter(val: any) {
    return val.charAt(0).toUpperCase() + val.slice(1).toLowerCase();
  }

  titleCase(val: any) {
    const stringArray = new String(val).split(" ");
    const reformattedStringArray = stringArray.map(
      (item) => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()
    );
    return reformattedStringArray.join(" ");
  }
  verifyTableData(xpath, val) {
    cy.get(xpath).should("contain", val);
  }
  typeAndEnter(xpath, value) {
    cy.get(xpath).should("exist").type(`${value} {enter}`).wait(500);
  }

  verifyContain(xpath, val) {
    cy.get(xpath).contains(val).should("be.visible").and("exist");
  }
}
