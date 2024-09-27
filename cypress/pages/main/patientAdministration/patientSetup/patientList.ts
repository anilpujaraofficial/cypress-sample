export function patientList() {
  return {
    xpath: {
      search: "input[placeholder='Search']",
      table_data: "tbody tr:nth-child(2) td:nth-child(2)",
    },
    value: {},
  };
}

export function buttons() {
  return {
    xpath: {
      add: "button[type='button']",
    },
    value: {
      add: "Add",
    },
  };
}

export function pagination() {
  return {
    xpath: {
      prev: "li[title='Previous Page']>div",
      next: "li[title='Next Page']>div",

      page1: "li[title='1']",
      page2: "li[title='2']",
      gotoPage: ".ant-pagination-options > div> input",

      show: ".ant-form-item-control-input .ant-select-selection-search input",
      count: "tbody tr.ant-table-row td:first-child",
    },
    value: {},
  };
}
