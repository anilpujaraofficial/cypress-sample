export class LabTemplateXpathAssertion {
  button() {
    return {
      save: "button[data-cy='Save']",
      add: "button[data-cy='addbutton']",
      endnote: "#endnote",
      option_save: ".ant-tabs-content-holder button[data-cy='savebutton']",
      endnote_add: ".ant-tabs-content-holder .flex.justify-end.w-full button",
      endnote_save: '.col-span-12 > [data-cy="savebutton"]',
    };
  }
  form(result_type) {
    return {
      name: "input[data-cy='name']",
      abbreviation: "input[data-cy='abbreviation']",
      test_description: "textarea[data-cy='test_description']",
      decimal_precision: "input[data-cy='decimal_precision']",
      default_value: "input[data-cy='default_value']",
      delta_deviation: "input[data-cy='delta_deviation']",
      result_type: `input[value='${result_type}']`,
      display_order: ".ant-modal-content #display_order",
      gender: ".ant-modal-content #aftgndr1",
      age_from: ".ant-modal-content #aftrq1",
      age_to: ".ant-modal-content #at1",
      normal_low: ".ant-modal-content #nl1",
      normal_high: ".ant-modal-content #Nh1",
      critical_low: ".ant-modal-content #cl1",
      critical_high: ".ant-modal-content #ch1",
      display_range: ".ant-modal-content #dr1",
    };
  }
  tab() {
    return {
      tab: "div.ant-tabs-nav-list div>div",
      prs: "Parameter Range Setup",
      option: "Options",
      EndNote: "End Note",
    };
  }
  list() {
    return {
      search: "input[data-cy='Search']",
      table_td: "tbody tr:last-child td",
      testname: "tbody.ant-table-tbody tr:nth-child(2) td:nth-child(2)",
    };
  }
  option() {
    return {
      display_name: "input[data-cy='display_name']",
      loinc_code: "input[data-cy='loinc_code']",
      reporting_days: "input[data-cy='reporting_days']",
      no_of_barcode: "input[data-cy='no_of_barcode']",
      unaccepted_condition: "textarea[data-cy*='unaccepted_condition']",
      instruction: "textarea[data-cy='instruction']",
      interpretation: "textarea[data-cy='interpretation']",
    };
  }
  endnote() {
    return {
      abbreviation: "#abbreviation_1",
    };
  }
  alert() {
    return {
      update: "Parameter Range created",
      endnote_add: "End Note created",
    };
  }

  form_validation() {
    return {
      xpath: "",
      empty_comment: "This name field is required",
      empty_abbr: "This abbreviation field is required",
      abbr_more_than_25_char:
        "The abbreviation field must not be greater than 25 characters.",
    };
  }
}
