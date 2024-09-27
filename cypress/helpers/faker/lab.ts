import { faker } from "@faker-js/faker";

//!==========================================Investigation=========================

export class Investigation {
  emp() {
    let data = {
      specilization: {
        type: "input",
        value: faker.lorem.words(2),
      },
      nmc: {
        type: "input",
        value: faker.string.alphanumeric({ length: 7, casing: "upper" }),
      },
      header_caption: {
        type: "input",
        value: faker.lorem.words(2),
      },
      qualification: {
        type: "input",
        value: faker.lorem.words(2),
      },
      nhpc: {
        type: "input",
        value: faker.string.alphanumeric({ length: 7, casing: "upper" }),
      },
    };
    return data;
  }
  lot_number() {
    let data = {
      lot_no: {
        type: "input",
        value: `${faker.number.int({ min: 11111, max: 99999 })}`,
      },
      active: {
        type: "switch",
        value: true,
      },
    };
    return data;
  }

  level_desc() {
    let data = {
      level: {
        type: "input",
        value: faker.string.alphanumeric({ length: 7, casing: "upper" }),
      },
      active: {
        type: "switch",
        value: true,
      },
    };
    return data;
  }

  sequenceDefinition() {
    let data = {
      department_type: {
        type: "dropdown",
        value: "HISTO",
      },
      prefix: {
        type: "input",
        value: faker.string.alpha({ length: 2, casing: "upper" }),
      },
      suffix: {
        type: "input",
        value: faker.string.alpha({ length: 2, casing: "upper" }),
      },
      length: {
        type: "input",
        value: `${faker.number.int({ min: 1, max: 9 })}`,
      },
      step: {
        type: "input",
        value: "1",
      },

      date_format: {
        type: "dropdown",
        value: "YY",
      },
      active: {
        type: "switch",
        value: true,
      },
    };
    return data;
  }

  unit_of_measure() {
    let data = {
      name: {
        type: "input",
        value: faker.science.unit().name + "/cm",
      },
      abbreviation: {
        type: "input",
        value: faker.hacker.abbreviation(),
      },
      description: {
        type: "input",
        value: faker.lorem.sentence(),
      },
      active: {
        type: "switch",
        value: true,
      },
    };

    return data;
  }

  dept() {
    let data = {
      prefix: {
        type: "input",
        value: faker.string.alpha({ length: 2, casing: "upper" }),
      },
      display_order: {
        type: "input",
        value: `${faker.number.int({ min: 10, max: 99 })}`,
      },
    };

    return data;
  }

  container() {
    let data = {
      name: {
        type: "input",
        value: faker.lorem.words(2) + " container",
      },
      abbreviation: {
        type: "input",
        value: faker.string.alphanumeric(7),
      },
      description: {
        type: "input",
        value: faker.lorem.sentence(),
      },
      active: {
        type: "switch",
        value: true,
      },
    };
    return data;
  }

  method() {
    let data = {
      name: {
        type: "input",
        value: Date.now() + " Method",
      },

      analyzers: {
        type: "dropdown",
        value: "",
      },
      description: {
        type: "textarea",
        value: faker.lorem.sentence(),
      },
      accredited: {
        type: "switch",
        value: true,
      },
      active: {
        type: "switch",
        value: true,
      },
    };

    return data;
  }

  organism() {
    let data = {
      name: {
        type: "ckeditor",
        value: faker.lorem.words(2) + " Organism",
      },

      abbreviation: {
        type: "input",
        value: faker.string.alpha({ length: 7, casing: "upper" }),
      },
      description: {
        type: "textarea",
        value: faker.lorem.sentence(),
      },
      active: {
        type: "switch",
        value: true,
      },
      no_growth: {
        type: "switch",
        value: false,
      },
      display_order: {
        type: "input",
        value: `${faker.number.int({ min: 10, max: 99 })}`,
      },
    };

    return data;
  }

  pickListResult() {
    let data = {
      department: {
        type: "dropdown",
        value: null,
      },
      test_name: {
        type: "dropdown",
        value: null,
      },
      test: {
        type: "dropdown",
        value: null,
      },
      active: {
        type: "switch",
        value: true,
      },
      name: {
        type: "input",
        value: faker.lorem.sentence(),
      },
    };

    return data;
  }

  antibioticGroup() {
    let data = {
      name: {
        type: "input",
        value: faker.lorem.words(2) + " antibiotic group",
      },
      abbreviation: {
        type: "input",
        value: faker.string.alpha({ length: 7, casing: "upper" }),
      },
      display_order: {
        type: "input",
        value: `${faker.number.int({ min: 1, max: 999 })}`,
      },
      description: {
        type: "textarea",
        value: faker.lorem.sentence(),
      },
      active: {
        type: "switch",
        value: true,
      },
    };

    return data;
  }

  anitibiotic() {
    let data = {
      name: {
        type: "input",
        value: faker.lorem.words(1) + " antibiotic",
      },
      abbreviation: {
        type: "input",
        value: faker.string.alpha({ length: 7, casing: "upper" }),
      },
      organism: {
        type: "dropdown",
        value: "",
      },
      antibiotic_group: {
        type: "dropdown",
        value: "",
      },
      description: {
        type: "textarea",
        value: faker.lorem.sentence(),
      },
      active: {
        type: "switch",
        value: true,
      },
    };

    return data;
  }

  category() {
    let data = {
      name: {
        value: faker.lorem.words(2) + " category",
        type: "input",
      },
      abbreviation: {
        value: faker.string.alpha({ length: 7, casing: "upper" }),
        type: "input",
      },
      description: {
        value: faker.lorem.sentence(),
        type: "textarea",
      },
      active: {
        value: true,
        type: "switch",
      },
    };
    return data;
  }

  specimen() {
    let data = {
      name: {
        type: "input",
        value: Date.now() + " Specimen",
      },
      abbreviation: {
        type: "input",
        value: faker.string.alpha({ length: 5, casing: "upper" }),
      },
      description: {
        value: faker.lorem.sentence(),
        type: "textarea",
      },
      active: {
        value: true,
        type: "switch",
      },
      prefix: {
        type: "input",
        value: faker.string.alpha({ length: 5, casing: "upper" }),
      },
    };

    return data;
  }

  analyzer() {
    let data = {
      name: {
        value: Date.now() + " analyzer",
        type: "input",
      },
      abbreviation: {
        value: faker.string.alpha({ length: 7, casing: "upper" }),
        type: "input",
      },
      manufacturer: {
        value: faker.vehicle.manufacturer(),
        type: "input",
      },
      model_number: {
        value: "MODEL" + faker.number.int({ min: 111, max: 999 }),
        type: "input",
      },
      description: {
        value: faker.lorem.sentence(),
        type: "textarea",
      },
      active: {
        value: true,
        type: "switch",
      },
    };

    return data;
  }

  analyzerConfig() {
    let data = {
      analyzer: {
        type: "dropdown",
        value: "",
      },
      protocol: {
        serial: {
          comport: {
            type: "dropdown",
            value: "COM1",
          },
          parity: {
            type: "dropdown",
            value: "Odd",
          },
          baudrate: {
            type: "dropdown",
            value: "1200",
          },
          stopbits: {
            type: "dropdown",
            value: "1",
          },
          databites: {
            type: "dropdown",
            value: "5",
          },
          handbits: {
            type: "dropdown",
            value: "None",
          },
        },
        network: {
          hostip: {
            type: "input",
            value: faker.internet.ipv4(),
          },
          portno: {
            type: "input",
            value: faker.internet.port(),
          },
          analyzerip: {
            type: "input",
            value: faker.internet.ipv4(),
          },
          mode: {
            type: "dropdown",
            value: "Server",
          },
        },
        filebased: {
          filepath: faker.image.url(),
        },
      },
      description: {
        type: "textarea",
        value: faker.lorem.sentence(),
      },
      active: {
        type: "switch",
        value: true,
      },
    };
    return data;
  }
  analyzerMapping() {
    let data = {
      department: {
        type: "dropdown",
        value: null,
      },
      testname: {
        type: "dropdown",
        value: null,
      },
      test: {
        type: "dropdown",
        value: null,
      },
      analyteCode: {
        type: "dropdown",
        value: null,
      },
      analyzer: {
        type: "dropdown",
        value: null,
      },
    };
    return data;
  }

  reagent() {
    let reag = faker.science.chemicalElement().name;

    let data = {
      analyzer: {
        type: "dropdown",
        value: null,
      },
      name: {
        type: "input",
        value: reag,
      },
      alias_name: {
        type: "input",
        value: reag + `#${faker.science.chemicalElement().symbol}`,
      },
      reagent_type: {
        type: "dropdown",
        value: "Liquid Basis",
      },
      unit: {
        type: "dropdown",
        value: "Unit",
      },
    };
    return data;
  }

  endnote() {
    let data = {
      endnote: {
        type: "input",
        value: faker.lorem.sentence(),
      },
      abbreviation: {
        type: "input",
        value: faker.string.alpha({ length: 7, casing: "upper" }),
      },
      active: {},
      default: {},
      department: {
        type: "dropdown",
        value: null,
      },
      testname: {
        type: "dropdown",
        value: null,
      },
    };

    return data;
  }

  reportFooter() {
    let data = {
      department: {
        type: "dropdown",
        value: null,
      },
      testname: {
        type: "dropdown",
        value: null,
      },
      footertype_5: {
        type: "dropdown",
        value: "Userwise",
      },
      userState_5: {
        type: "dropdown",
        value: "VERIFIED",
      },
    };

    return data;
  }

  analyteCode() {
    let data = {
      analyte_code: {
        type: "input",
        value: faker.string.alphanumeric({ length: 7, casing: "upper" }),
      },
      alias_name: {
        type: "input",
        value: faker.string.alphanumeric({ length: 7, casing: "upper" }),
      },
    };
    return data;
  }

  comment() {
    let data = {
      name: {
        value: faker.lorem.words(2) + " comment",
        type: "input",
      },
      abbreviation: {
        value: faker.string.alpha({ length: 7, casing: "upper" }),
        type: "input",
      },
      comment: {
        value: faker.lorem.sentence(),
        type: "textarea",
      },
      active: {
        value: true,
        type: "switch",
      },
    };
    return data;
  }

  labTemplate() {
    let data = {
      department: "HAEMATOLOGY",
      test_name: "HB",
      cpt_code: faker.number.int({ min: 111, max: 9999 }),
      container: " ",
      methods: "amita method",
      default_method: " ",
      category: " ",
      specimen: " ",
      specimen_volume: faker.number.int({ min: 1, max: 99 }),
      display_order: faker.number.int({ min: 1, max: 99 }),
      culture: "",
      confidential: "",
      uoms: "/cumm",
      analyzer: "CA600",
      report_footer: "",
      endnote: "",
    };
    return data;
  }

  parameterRangeSetup() {
    let data = {
      test: faker.lorem.word() + " test",
    };
    return data;
  }

  findingTitles() {
    let data = {
      name: {
        type: "ckeditor",
        value: "",
      },
      department_type: {
        type: "dropdown",
        value: ["RADIO", "HISTO"],
      },
      display_order: {
        type: "input",
        value: `${faker.number.int({ min: 10, max: 99 })}`,
      },
    };
    return data;
  }

  reportFormat() {
    let data = {
      department_id: {
        type: "dropdown",
        value: "",
      },
      active: {
        type: "switch",
        value: true,
      },
      name: {
        type: "input",
        value: Date.now() + " Report Format",
      },
      test_name_id: {
        type: "dropdown",
        value: "",
      },
      gender: {
        type: "dropdown",
        value: "All",
      },
      default: {},
    };
    return data;
  }

  test() {
    let nl = faker.number.int({ min: 50, max: 100 });
    let nh = faker.number.int({ min: 101, max: 999 });
    let data = {
      name: {
        type: "input",
        value: Date.now() + " Test",
      },
      abbreviation: {
        type: "input",
        value: faker.string.alpha({ length: 7, casing: "upper" }),
      },
      result_type: {
        type: "radio",
        value: "numeric",
      },
      test_description: {
        type: "textarea",
        value: faker.lorem.sentence(),
      },
      gender: {
        type: "dropdown",
        value: "Both",
      },
      age_from: {
        type: "input",
        value: "0",
      },

      age_to: {
        type: "input",
        value: "120",
      },
      normal_low: {
        type: "input",
        value: nl,
      },
      normal_high: {
        type: "input",
        value: nh,
      },
      critical_low: {
        type: "input",
        value: faker.number.int({ min: 10, max: 40 }),
      },
      critical_high: {
        type: "input",
        value: faker.number.int({ min: 1000, max: 9999 }),
      },
      display_range: {
        type: "textarea",
        value: `${nl} - ${nh}`,
      },
    };
    return data;
  }
  option() {
    let data = {
      display_name: {
        type: "input",
        value: faker.lorem.sentence(),
      },
      loinc_code: {
        type: "input",
        value: faker.number.int({ min: 111, max: 999 }),
      },
      reporting_days: {
        type: "input",
        value: faker.number.int({ min: 1, max: 2 }),
      },
      no_of_barcode: {
        type: "input",
        value: faker.number.int({ min: 1, max: 2 }),
      },

      unaccepted_condition: {
        type: "textarea",
        value: faker.lorem.sentence(),
      },
      instruction: {
        type: "textarea",
        value: faker.lorem.sentence(),
      },
      interpretation: {
        type: "textarea",
        value: faker.lorem.sentence(),
      },
    };
    return data;
  }
  
}

// tests or parameter
export function test(dept, testname, result) {
  let nh = `${faker.number.int({ min: 10, max: 99 })}`;
  let nl = `${faker.number.int({ min: 10, max: 99 })}`;

  let data = {
    department_id: 1,
    test_name_id: 854,
    result_type: result,
    name: Date.now() + " Test",
    abbreviation: faker.string.alpha({ length: 7, casing: "upper" }),
    uom_id: null,
    decimal_precision: `${faker.number.int({ min: 10, max: 99 })}`,
    display_order: `${faker.number.int({ min: 10, max: 99 })}`,
    test_description: faker.lorem.sentence(),
    delta_deviation: `${faker.number.int({ min: 10, max: 99 })}`,
    default_value: `${faker.number.int({ min: 10, max: 99 })}`,
    active: true,
    show_flag: false,
    hide_unit_ref: false,
    mandatory: false,
    dc_test_count: false,
    type: null,
    age_to_type: "Years",
    reference_ranges: [
      {
        id: null,
        critical_high: `${faker.number.int({ min: 10, max: 99 })}`,
        critical_low: `${faker.number.int({ min: 10, max: 99 })}`,
        normal_high: nh,
        normal_low: nl,
        age_to: "120",
        age_to_type: "Years",
        age_from: "0",
        age_from_type: "Years",
        display_range: `${nl}-${nh}`,
        active: true,
        gender: "Both",
      },
    ],
  };

  //department
  cy.readFile(dept).then((dat) => {
    data.department_id = dat.id;
  });
  //testname
  cy.readFile(testname).then((dat) => {
    data.test_name_id = dat.id;
  });
  return { data: data };
}
