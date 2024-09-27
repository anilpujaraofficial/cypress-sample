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

export function create_patientSystemTypes() {
  return {
    xpath: {
      system_type_code: "#system_type_code",
      patient_type_code: "#patient_type_code",
    },
    value: {},
  };
}

export function patientSystemTypes() {
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
      empty_system_type_code: "This system type code field is required",
      empty_patient_type_code: "This patient type code field is required",
    },
  };
}
