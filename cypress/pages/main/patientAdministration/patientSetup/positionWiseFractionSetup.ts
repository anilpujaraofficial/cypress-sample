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

export function create_positionWiseFractionSetup() {
  return {
    xpath: {
      testRadio: "input[value='T']",
      deptRadio: "input[value='D']",
      test_name: "#test_name_id",
      dept: "#department_id",
      rateRadio: "input[value='R']",
      amountRadio: "input[value='A']",
      fraction_rate: "#fraction_rate",
      fraction_amount: "#fraction_amount",
      op: "input[value='OP']",
      ip: "input[value='IP']",
      desc: "#description",
      fad: "#fixed_amount_deduction",
      ptc: "#patient_type_code",
    },
    value: {},
  };
}

export function positionWiseFractionSetup() {
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
      name_more_than_100char:
        "The name field must not be greater than 100 characters.",
      empty_code: "Please enter  code",
      code_more_than_5_char:
        "The code field must not be greater than 5 characters.",
    },
  };
}
