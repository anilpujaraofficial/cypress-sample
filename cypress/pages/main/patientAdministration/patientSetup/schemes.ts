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

export function create_schemes() {
  return {
    xpath: {
      add: "button[type='button'] >div ",
      add_icon: ".text-x svg",
      name: "#name",
      username: "#username",
      community: "#community_id",
      code: "#code",
      member_prefix: "#member_prefix",
      valid_from: "",
      valid_to: "",
      display_order: "#display_order",
      pharmacy: "",
      fractionable: "",
      discount: {
        Registration: "#reg_dis",
        OPD: "#op_dis",
        IPD: "#ip_dis",
        Admission: "#admn_dis",
        Pharmacy_OP: "#phar_op_dis",
        Pharmacy_IP: "#phar_ip_dis",
        Bed: "#bed_dis",
      },
      save: "button[type='submit']",
    },
    value: {
      add: "Add",
    },
  };
}

export function schemes() {
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
      empty_username: "This username field is required",
      username_more_tha_20char:
        "The username field must not be greater than 20 characters.",
      empty_code: "This code field must not be greater then 10 characters",
      code_more_than_10char:
        "The code field must not be greater than 10 characters.",
    },
  };
}
