export function buttons() {
  return {
    xpath: {
      add: "button[type='button'] > div",
      save: "button[type='submit']",
    },
    value: {
      add: "Add",
      save: "Save",
    },
  };
}

export function create_community() {
  return {
    xpath: {
      name: "#name",
      code: "#code",
      contact_person: "#contact_person",
      phone: "#phone_no",
      mobile_no: "#mobile_no",
      dispaly_order: "#display_order",
    },
    value: {},
  };
}

export function community() {
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
      empty_code: "This code field must not be greater then 10 characters",
      code_more_than_10char:
        "The code field must not be greater than 10 characters.",
      empty_contact_person: "This contact person field is required",
      contact_person_more_than_50char:
        "The contact person field must not be greater than 50 characters.",
    },
  };
}
