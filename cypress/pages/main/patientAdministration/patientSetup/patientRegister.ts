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

export function create_patient() {
  return {
    xpath: {
      // Hospital Information
      new: "input[value='new']",
      followup: "input[value='followup']",

      hospital_no: "#hospital_no",
      select_scehma: "#scheme_id",

      // Personal Information
      firstName: "#first_name",
      middleName: "#middle_name",
      lastName: "#last_name",
      gender: "#gender",
      email: "#email",
      phone: "#mobile_no",
      age: "#age",
      dob: "input[placeholder='Select date']",
      // Permanent Address
      country: "#permanent_country_id",
      state: "#permanent_state_id",
      district: "#permanent_district_id",
      municipality: "#permanent_vdcmcpt_id",
      ward_no: "#permanent_ward_no",
      permanant_address: "#permanent_address",
      contact_no: "#phone_no",

      same_address: "div.ant-collapse > div:nth-child(4) button",
      doctor_visit: "div.ant-collapse > div:nth-child(5) button",

      // Temporary Address
      temp_country: "#permanent_country_id",
      temp_state: "#state_id",
      temp_district: "#district_id",
      temp_municipality: "#vdcmcpt_id",
      temp_ward_no: "#ward_no",
      temp_address: "#address",
      temp_contact_no: "#mobile_no",

      // Doctor Visit

      type: "",
      department: "#department_id",
      doctor_name: "#doctor_id",
      patient_type_code: "#patient_type_code",
      queue_type: "#queue_type",
      queue_no: "#queue_no",

      paytype: "#pay_type",
      discount: "#discount_percentage",
      tender_amount: "#tender",
      remarks: "#remarks",
      submit: "button> div",
      // select type
      select_option: "div.ant-select-item-option-content",
    },
    value: {
      submit: "Submit",
    },
  };
}

export function validation_message() {
  return {
    xpath: {},
    value: {
      personal_info: {
        empty_fname:
          "The last name field is required when reg type is REGONLY.",
        empty_lname:
          "The last name field is required when reg type is REGONLY.",
        empty_gender: "The gender field is required when reg type is REGONLY.",
        empty_mobile_no:
          "The mobile no field is required when reg type is REGONLY.",
        age: "The age field is required when reg type is REGONLY.",
      },
      address: {
        empty_district:
          "The permanent district id field is required when reg type is REGONLY.",

        empty_vdcmcpt:
          "The permanent vdcmcpt id field is required when reg type is REGONLY.",
        empty_ward_no:
          "The permanent ward no field is required when reg type is REGONLY.",
        empty_address:
          "The permanent address field is required when reg type is REGONLY.",
        empty_phone:
          "The permanent phone no field is required when reg type is REGONLY.",
      },
    },
  };
}
