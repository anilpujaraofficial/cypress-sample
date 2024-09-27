class DepartmentXpathAssertion {
  button() {
    return {
      save: "button[data-cy='Save']",
    };
  }
  form() {
    return {
      name: "input[data-cy='name']",
      prefix: "input[data-cy='prefix']",
      display_order: "input[data-cy='display_order']",
    };
  }
  list() {
    return {
      search: "input[data-cy='Search']",
      table_td: "tbody tr:last-child td",
      view: ["Action", "View"],
      update: ["Action", "Edit"],
    };
  }
  alert() {
    return {
      update: "Comment updated",
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

export default DepartmentXpathAssertion;
