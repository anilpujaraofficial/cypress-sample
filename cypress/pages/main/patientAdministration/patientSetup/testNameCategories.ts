export function buttons() {
  return {
    xpath: {
      add: "button[type='button']",
      save: "button[type='submit']",
    },
    value: {
      add: "Add",
      save: "Save",
    },
  };
}

export function create_testNameCategories() {
  return {
    xpath: {
      name: "#name",
      code: "#code",
      display_order: "#display_order",
    },
    value: {},
  };
}

export function testNameCategories() {
  return {
    xpath: {
      search: "input[placeholder='Search']",
      table_data: "tbody tr:nth-child(2) td:nth-child(2)",
    },
    value: {},
  };
}

export function invalid_feedback() {
  return {
    xpath: {},
    value: {
      empty_name: "This name field is required",
      name_more_than_50char:
        "The name field must not be greater than 50 characters.",
      empty_code: "his code field must not be greater then 10 characters",
      code_more_than_10_char:
        "The code field must not be greater than 10 characters.",
      empty_order: "The display order field must be an integer.",
    },
  };
}
