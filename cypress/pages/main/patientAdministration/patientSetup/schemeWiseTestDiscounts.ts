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

export function create_schemeWiseTestDiscounts() {
  return {
    xpath: {
      scheme: "#scheme_id",
      patient_type_code: "#patient_type_code",
      test_name: ".testnamescheme input[type='search']",
      reg_disper: "#reg_disper",
      op_disper: "#op_disper",
      ip_disper: "#ip_disper",
      admission_disper: "#admission_disper",
      bed_disper: "#bed_disper",
    },
    value: {},
  };
}

export function schemeWiseTestDiscounts() {
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
      empty_scheme: "The scheme id field is required.",
      empty_patient_type_code: "This patient type code field is required",
      discount_percentage: [
        "Registration discount percentage should be positive",
        "Op discount percentage should be positive",
        "Ip discount percentage should be positive",
        "Please enter  bed discount percentage!",
      ],
      empty_admission: "Bed discount percentage should be positive",
    },
  };
}
