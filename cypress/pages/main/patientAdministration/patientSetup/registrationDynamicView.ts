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

export function create_registrationDynamicView() {
  return {
    xpath: {
      display_name: "#display_name",
      display_order: "#display_order",
      visible: "#is_visible",
      collapsible: "#is_collapsible",
    },
    value: {},
  };
}

export function registrationDynamicView() {
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
      empty_display_name: "This display name field is required",
      display_name_more_than_50char:
        "The display name field must not be greater than 50 characters.",
      empty_display_order: "This display order must be an integer",
      display_order_only_int: "The display order field must be an integer.",
    },
  };
}
