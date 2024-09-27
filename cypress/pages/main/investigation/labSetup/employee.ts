class EmployeeXpathAssertion {
  button() {
    return {
      save: "button[data-cy='Save']",
    };
  }
  form(key) {
    switch (key) {
      case "file":
        return "input[type='file']";
      default:
        return `input[data-cy='${key}']`;
    }
  }
  list() {
    return {
      search: "input[data-cy='Search']",
      table_td: "tbody tr:nth-child(2) td.ant-table-cell",
      view: ["Action", "View"],
      update: ["Action", "Edit"],
    };
  }
  alert() {
    return {
      update: "Employee updated",
    };
  }

  form_validation() {
    return {
      xpath: "",
      empty_comment: "This name field is required",
      empty_abbr: "This abbreviation field is required",
      abbr_more_than_25_char:
        "The abbreviation field must not be greater than 25 characters.",
    };
  }
}

export default EmployeeXpathAssertion;
