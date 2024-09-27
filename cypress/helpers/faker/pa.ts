import { faker } from "@faker-js/faker";
import name from "./randomName";
import { getEnvVariables } from "@support/commands";

export class PatientAdministration {
  //capitalize First Letter
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }
  bank() {
    let data = {
      name: {
        type: "input",
        value: faker.company.name() + " Bank",
      },

      code: {
        type: "input",
        value: faker.string.alpha({ length: 5, casing: "upper" }),
      },
    };

    return data;
  }

  testcategory() {
    let data = {
      name: {
        type: "input",
        value: faker.company.name() + " Bank",
      },

      code: {
        type: "input",
        value: faker.string.alpha({ length: 5, casing: "upper" }),
      },

      display_order: {
        type: "input",
        value: `${faker.number.int({ min: 1, max: 99 })}`,
      },
    };

    return data;
  }

  outsource() {
    let data = {
      name: {
        type: "input",
        value: faker.company.name(),
      },

      contact_person: {
        type: "input",
        value: faker.string.alpha({ length: 5, casing: "upper" }),
      },

      display_order: {
        type: "input",
        value: `${faker.number.int({ min: 1, max: 99 })}`,
      },

      phone_no: {
        type: "input",
        value: faker.phone.number("98########"),
      },

      mobile_no: {
        type: "input",
        value: faker.phone.number("98########"),
      },
    };

    return data;
  }

  referralFrom() {
    let data = {
      name: {
        type: "input",
        value: this.capitalizeFirstLetter(
          faker.string.alpha({ length: 5, casing: "upper" })
        ),
      },

      category: {
        type: "dropdown",
        value: "GOVH",
      },
    };

    return data;
  }

  referralSources() {
    let data = {
      name: faker.lorem.words(2) + " newspaper",
    };

    return data;
  }

  camps() {
    let data = {
      name: {
        type: "input",
        value: this.capitalizeFirstLetter(
          faker.string.alpha({ length: 5, casing: "upper" })
        ),
      },
      location: {
        type: "input",
        value: this.capitalizeFirstLetter(
          faker.string.alpha({ length: 5, casing: "upper" })
        ),
      },
    };

    return data;
  }

  salutation() {
    let data = {
      name: {
        type: "input",
        value: this.capitalizeFirstLetter(
          faker.string.alpha({ length: 5, casing: "upper" })
        ),
      },
    };

    return data;
  }

  communities() {
    let data = {
      name: faker.lorem.words(2) + " community",
      code: faker.string.alphanumeric(6).toLocaleUpperCase(),
      contact_person: faker.person.fullName(),
      phone: faker.phone.number("9868######"),
      mobile_no: faker.phone.number("9868######"),
      dispaly_order: faker.number.int({ min: 1, max: 99 }),
    };

    return data;
  }

  position() {
    let data = {
      name: {
        type: "input",
        value: this.capitalizeFirstLetter(
          faker.string.alpha({ length: 5, casing: "upper" })
        ),
      },
      code: {
        type: "input",
        value: this.capitalizeFirstLetter(
          faker.string.alpha({ length: 5, casing: "upper" })
        ),
      },
    };

    return data;
  }

  patientType() {
    let data = {
      name: {
        type: "input",
        value: faker.string.alpha({ length: 5, casing: "upper" }),
      },
      code: {
        type: "input",
        value: faker.string.alpha({ length: 5, casing: "upper" }),
      },

      price_ratio: {
        type: "input",
        value: "3",
      },

      display_order: {
        type: "input",
        value: faker.number.int({ min: 1, max: 99 }),
      },
      is_active: {
        type: "switch",
        value: true,
      },
    };

    return data;
  }

  relation() {
    let data = {
      name: {
        type: "input",
        value: this.capitalizeFirstLetter(
          faker.string.alpha({ length: 5, casing: "upper" })
        ),
      },
    };

    return data;
  }

  scheme() {
    let data = {
      name: name.fname.toUpperCase() + " " + name.lname.toUpperCase(),
      username:
        name.fname.toLowerCase() + faker.number.int({ min: 10, max: 99 }),

      code: faker.string.alphanumeric(6).toLocaleUpperCase(),
      display_order: faker.number.int({ min: 1, max: 99 }),
      member_prefix: faker.person.prefix(),

      discount: {
        Registration: faker.number.int({ min: 10, max: 99 }),
        OPD: faker.number.int({ min: 10, max: 99 }),
        IPD: faker.number.int({ min: 10, max: 99 }),
        Admission: faker.number.int({ min: 10, max: 99 }),
        Pharmacy_OP: faker.number.int({ min: 10, max: 99 }),
        Pharmacy_IP: faker.number.int({ min: 10, max: 99 }),
        Bed: faker.number.int({ min: 10, max: 99 }),
      },
    };

    return data;
  }

  schemeWiseTestDiscounts() {
    let data = {
      reg_disper: faker.number.int({ min: 10, max: 15 }),
      op_disper: faker.number.int({ min: 10, max: 15 }),
      ip_disper: faker.number.int({ min: 10, max: 15 }),
      admission_disper: faker.number.int({ min: 10, max: 15 }),
      bed_disper: faker.number.int({ min: 10, max: 15 }),
    };

    return data;
  }

  systemTypes() {
    let data = {
      name: {
        type: "input",
        value: faker.string.alpha({ length: 5, casing: "upper" }),
      },
      code: {
        type: "input",
        value: faker.string.alpha({ length: 5, casing: "upper" }),
      },
    };
    return data;
  }

  testNameCategories() {
    let data = {
      name: {
        type: "input",
        value: Date.now() + " Test Name Category",
      },
      code: {
        type: "input",
        value: faker.string.alpha({ length: 7, casing: "upper" }),
      },
      display_order: {
        type: "input",
        value: faker.number.int({ min: 10, max: 99 }),
      },
    };
    return data;
  }

  testNameWithPrice() {
    let data = {
      department_id: {
        type: "dropdown",
        value: "",
      },

      testname_category: {
        type: "dropdown",
        value: "LAB CHARGE",
      },

      test_name: {
        type: "input",
        value: faker.string.alpha({ length: 5, casing: "upper" }),
      },

      type: {
        type: "dropdown",
        value: "SER",
      },
      test_price: {
        type: "input",
        value: "250",
      },

      code: {
        type: "autogenerated",
        value: "",
      },
    };
    return data;
  }
  patient() {
    let data = {
      firstName: name.fname,
      middleName: name.mname,
      lastName: name.lname,
      gender: "MALE",
      email: faker.internet.email().toLocaleLowerCase(),
      phone: faker.phone.number("98########"),
      age: "25",
      ward_no: "1",
      address: "IME Complex, Panipokhari, Kathmandu, Nepal",
      contact_no: faker.phone.number("98########"),
      queue_no: "1",
      tender_amout: "100",
      remarks: faker.lorem.sentence(),
    };

    return data;
  }

  fractionSetup() {
    let data = {
      desc: faker.lorem.sentence(),

      fad: "500",
    };
    return data;
  }

  vaccines() {
    let data = {
      name: {
        type: "input",
        value: this.capitalizeFirstLetter(
          faker.string.alpha({ length: 5, casing: "upper" })
        ),
      },
    };

    return data;
  }
}
//!=======================================
// Patient
export function patient() {
  let data = {
    reg_type: "REGONLY",
    first_name: name.fname,
    middle_name: name.mname,
    last_name: name.lname,
    gender: "MALE",
    age_type: "YEAR",
    age: 45,
    dob_vs: "2036-05-26",
    dob_ad: "1979-09-11",
    mobile_no: faker.phone.number("98########"),
    is_actual_dob: false,
    permanent_country_id: 149,
    permanent_state_id: 3,
    permanent_district_id: 26,
    permanent_vdcmcpt_id: 334,
    permanent_address: "IME Complex, Panipokhari",
    permanent_ward_no: 1,
    permanent_phone_no: faker.phone.number("98########"),
    pay_type: "CASH",
  };
  return { data: data };
}

// bill
export function bill(filePath) {
  let data = {
    patient_id: 20000,
    scheme_id: null,
    patient_type_code: "GEN",
    department_id: null,
    employee_id: null,
    adjust_deposit: false,
    agent_billing: false,
    pay_type: "CASH",
    tender_amount: 2855,
    remarks: null,
    test_services: [
      {
        gross_amt: "155",
        qty: 1,
        unit_price: "155",
        test_name_id: 948,
        test_name: "HB",
        disper: 0,
        is_discountable: true,
        test_code: "hB001",
        department_id: 2,
        is_fractionable: false,
        vat: 0,
        is_vatable: false,
      },
      {
        gross_amt: "1200",
        qty: 1,
        unit_price: "1200",
        test_name_id: 570,
        test_name: "FNAC",
        disper: 0,
        is_discountable: true,
        test_code: "C1",
        department_id: 30,
        is_fractionable: false,
        vat: 0,
        is_vatable: false,
      },
      {
        gross_amt: "1500",
        qty: 1,
        unit_price: "1500",
        test_name_id: 849,
        test_name: "USG NECK",
        disper: 0,
        is_discountable: true,
        test_code: "USG02",
        department_id: 1001,
        is_fractionable: false,
        vat: 0,
        is_vatable: false,
      },
    ],
    hospital_no: "81000633",
    payment_methods: [
      {
        type: "CASH",
        value: 2855,
      },
    ],
  };
  // get patient id and hospital id
  cy.readFile(filePath).then((dat) => {
    data.patient_id = dat.id;
    data.hospital_no = dat.hospital_no;
  });

  return { data: data };
}
// agent bill
export function agentBill(filePath) {
  require("dotenv").config(); // Load .env file

  let data = {
    // agent or community id
    community_id: parseInt(getEnvVariables("agent_id")),
    scheme_id: parseInt(getEnvVariables("agent_scheme")),

    patient_id: 17882,
    patient_type_code: "GEN",
    adjust_deposit: false,
    agent_billing: true,
    pay_type: "CREDIT", // payment type

    care_off: null,
    tender_amount: null,
    remarks: null,
    test_services: [
      {
        gross_amt: "189",
        qty: 1,
        unit_price: "189",
        test_name_id: 262,
        test_name: "BLOOD C/S",
        disper: "10",
        isop_credit: true,
        is_discountable: true,
        test_code: "CH02",
        department_id: 14,
        is_fractionable: false,
        vat: 0,
        is_vatable: false,
      },
    ],
    hospital_no: "80000005",
    payment_methods: [],
  };
  // get patient id and hospital id
  cy.readFile(filePath).then((dat) => {
    // data.community_id = parseInt(process.env.AGENT_ID);
    // data.scheme_id = parseInt(process.env.SCHEME_ID);
    data.patient_id = dat.id;
    data.hospital_no = dat.hospital_no;
  });

  return { data: data };
}

export function testNameWithPrice(dept, cat) {
  let data = {
    department_id: 1010, //*
    test_name_category_id: 1, //*

    code: faker.string.alphanumeric({ length: 7, casing: "upper" }),
    name: Date.now() + " Test Name",

    type: "SER",
    operation_type: null,
    package_type: null,
    cutoff_time: null,
    max_qty: 999,
    is_active: true,
    test_name_price: [
      {
        id: 10,
        code: "IPD",
        name: "IPD",
        price_ratio: null,
        is_default: true,
        is_vat: false,
        is_price_with_vat: false,
        is_discountable: false,
        is_editable: false,
        is_fractionable: false,
        vat: 0,
        price: 150,
        patient_type_code: "IPD",
        currency_type: "RS",
        test_name_price_id: 0,
      },
      {
        id: 12,
        code: "ins",
        name: "insurance",
        price_ratio: "0.5",
        is_default: false,
        is_vat: false,
        is_price_with_vat: false,
        is_discountable: false,
        is_editable: false,
        is_fractionable: false,
        vat: 0,
        price: 75,
        patient_type_code: "ins",
        currency_type: "RS",
        test_name_price_id: 0,
      },
      {
        id: 8,
        code: "OPD",
        name: "OPD",
        price_ratio: "0.5",
        is_default: true,
        is_vat: false,
        is_price_with_vat: false,
        is_discountable: false,
        is_editable: false,
        is_fractionable: false,
        vat: 0,
        price: 75,
        patient_type_code: "OPD",
        currency_type: "RS",
        test_name_price_id: 0,
      },
      {
        id: 3,
        code: "SSF",
        name: "SSF",
        price_ratio: "3",
        is_default: true,
        is_vat: false,
        is_price_with_vat: false,
        is_discountable: false,
        is_editable: false,
        is_fractionable: false,
        vat: 0,
        price: 450,
        patient_type_code: "SSF",
        currency_type: "RS",
        test_name_price_id: 0,
      },
      {
        id: 1,
        code: "GEN",
        name: "GEN",
        price_ratio: "1",
        is_default: true,
        is_vat: false,
        is_price_with_vat: false,
        is_discountable: false,
        is_editable: false,
        is_fractionable: false,
        vat: 0,
        price: 150,
        patient_type_code: "GEN",
        currency_type: "RS",
        test_name_price_id: 0,
      },
    ],
  };
  cy.readFile(dept).then((dat) => {
    data.department_id = dat.id;
  });
  cy.readFile(cat).then((dat) => {
    data.test_name_category_id = dat.id;
  });
  return { data: data };
}
