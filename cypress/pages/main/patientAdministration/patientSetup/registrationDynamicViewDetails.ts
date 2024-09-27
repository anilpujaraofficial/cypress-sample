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

export function create_registrationDynamicViewDetails() {
  return {
    xpath: {
      registration_view: "#registration_view_id",
      element: "#element_id",
      label_name: "#label_name",
      visible: "#is_visible",
      required: "#is_required",
    },
    value: {},
  };
}

export function registrationDynamicViewDetails() {
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
      //todo
      empty_registration_view: "This registration id field is required",
      empty_element: "The element id field is required.",
      empty_label: "The label name field is required.",
      elemet_more_than_50char:
        "The element id field must not be greater than 50 characters.",
      label_more_than_50char:
        "The label name field must not be greater than 50 characters.",
    },
  };
}
