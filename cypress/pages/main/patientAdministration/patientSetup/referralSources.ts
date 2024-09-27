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

export function create_referralSources() {
  return {
    xpath: {
      name: "#name",
    },
    value: {},
  };
}

export function referralSources() {
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
      name_more_than_200char:
        "The name field must not be greater than 200 characters.",
    },
  };
}
