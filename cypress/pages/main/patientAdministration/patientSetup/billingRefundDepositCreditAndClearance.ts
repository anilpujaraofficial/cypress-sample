export function buttons() {
  return {
    xpath: {
      submit: "button[type='button'] > div",
      refund: ":nth-child(13) > :nth-child(1) > .ant-btn",
      save: ".justify-end > .ant-btn",

      search: "button[type='submit'] > div",
    },
    value: {
      sumbit: "Submit",
      refund: "Refund",
      save: "Save",
      search: "Search",
      credit_payment: "Credit Payment",
    },
  };
}

export function create_bill() {
  return {
    xpath: {
      hospitalNo: "#patient_id",
      memberID: "input[placeholder='Member No. :']",
      selectScheme: "#scheme_id",
      patientID: "input[placeholder='Inpatient ID :']",
      gen: "#patient_type_code",
      selectDepartment: "#department_id",
      ref_doctor: "#employee_id",
      global_search:
        ".col-span-9.w-full > div > div:first-child > div > div:first-child >div:first-child button",
      addIcon:
        "div:nth-child(1) > div:nth-child(10) > div:nth-child(1) >  button:nth-child(1)",
      adjust_deposit: "#adjust_deposit .ant-switch-inner",

      add_payment: "button[type='button'] > div",
      test_price:
        "form>div>div:nth-child(2)>div:nth-child(2)>div.w-full>div:first-child>div tbody tr:nth-child(2) td:nth-child(2):nth-child(5) div",
      select_test: {
        doc_code: "#rc_select_4",
        test_code: "#testcode",
        test_name: "#testname",
        select_test_name: "div.ant-select-item-option-content > div > span",
      },
      duplicate_title: ".ant-popover-title > div",
      pay_type: "#pay_type",
      title_credit: "div[title='CREDIT']",

      add: ":nth-child(3) > .ant-btn",
      save: ":nth-child(5) > .ant-btn",
      discount_per: "input[placeholder='Discount %']",
      total_price:
        ".patientlist.patient_list > div:nth-child(2) > div tbody tr:nth-child(2) td:nth-child(7)",
      net_total:
        ".patientlist.patient_list > div:nth-child(2) > div tbody tr:nth-child(2) td:nth-child(10)",
    },
    value: {
      add_payment: "Add Payment Method",
    },
  };
}

export function refund_billing() {
  return {
    xpath: {
      hospital_no: "input[placeholder='Hospital No']",
      name: "input[placeholder='Name']",
      age: "input[placeholder='Age']",
      prev: "#prev",
      bill_no: "tbody tr.ant-table-row td:nth-child(2)",
      remarks: "#remarks",
    },
    value: {},
  };
}

export function bill_deposit() {
  return {
    xpath: {
      hospital_no: "div[label='Hospital No :'] > div:last-child input",
      deposit_refund: "button[value='false'] span[class='ant-switch-inner']",
      deposite_type: "#deposit_type_id",
      amount: "#amount",
      depositer_name: "#depositer_name",
      remarks: "#remarks",
      prev_deposit_no:
        "div[class='sm:col-span-12 lg:col-span-3'] > div >div:nth-child(6)  input",

      table_data: "tbody tr.ant-table-row td",
      total: "div[class='sm:col-span-12 lg:col-span-5'] div:nth-child(2)",
      remaining_balance:
        "div[class='sm:col-span-12 lg:col-span-5'] div:nth-child(4)",
    },
    value: {
      hospital_no: "",
    },
  };
}

export function credit_clearance() {
  return {
    xpath: {
      hospital_no: "#hospital_no",
      due_amt: "tbody.ant-table-tbody tr:nth-child(2) td:nth-child(11)",
    },
    value: {},
  };
}
