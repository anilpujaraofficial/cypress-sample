export let pathoHistoRadioXpathAssertion = {
  patho_histo_radio_tab: {
    patientList: "Patient List",
    sampleCollection: "Sample Collection",
    labReceive: "Lab Receive",
    departmentReceive: "Department Receive",
    resultEntry: "Result Entry",
    verification: "Verification",
    dispatch: "Dispatch",
    sampleDiscard: "Sample Discard",
    analyzerResult: "Analyzer Result",
    rejectTest: "Reject Test",
    cancelTest: "Cancel Test",
    reportUpload: "Report Upload",
  },
  tab: "div.ant-tabs-nav-list div>div",
  search: "input[data-cy='Search']",
  get_labno: "tbody.ant-table-tbody tr:nth-child(2) td:nth-child(3)> span",
  stat: "button[id='stat']",
  table_td: "tbody tr:nth-child(2) td",
  search_btn: "button[data-cy='Search']",
  labno: "input[id='labno']",

  sample_collect: {
    bulk_collect: "button[data-cy='Bulk Collect']",
    alert_message: "Sample Collected Successfully",
  },

  patientProfile: {
    patient_name: "input[id='patient_name']",
    current_age: "input[id='current_age']",
    permanent_address: "input[data-cy='permanent_address']",
    hospital_no: "input[data-cy='hospital_no']",
    mobile_no: "input[data-cy='mobile_no']",
    bill_date: "input[data-cy='bill_date']",
    bill_no: "input[data-cy='bill_no']",
    referral_doctor: "input[data-cy='referral_doctor']",
    patient_type: "input[data-cy='patient_type']",
    patient_from: "input[data-cy='patient_from']",
  },
  lab_receive: {
    lab_id: "input[id='lab_id']",
    lab_receive: ".flex.items-center.gap-2 button",
    alert_message: "Lab Received Successfully",
  },
  dept_receive: {
    lab_id: "input[id='lab_id']",
    dept_receive: ".flex.items-center.gap-2 button",
    alert_message: "Department Received Successfully",
  },
  reject: {
    heading: "p",
    heading_text: "Rejectable Tests",
    alert: "Sample Rejected Successfully",
    reject: "button[data-cy*='yellowbutton']",
    remarks: "input[placeholder$='Enter Remarks']",
  },
  cancel: {
    heading: "p",
    heading_text: "Cancelable Tests",
    alert: "Sample Canceled Successfully",
    cancel: "button[data-cy='deletebutton']",
    remarks: "input[placeholder$='Enter Remarks']",
  },
  resultEntry: {
    value: "tbody tr td:nth-child(3) input",
    result_entry_success: "Result Entry Updated Successfully",
    verify_success: "Result Verified Successfully",
    authorize_success: "Result Authorized Successfully",
  },
  verification: {
    lab_id: "td.ant-table-cell >span",
    verify_success: "Result Verified Successfully",
    authorize_success: "Result Authorized Successfully",
    select_all: "form thead input[aria-label='Select all']",
  },
  button: {
    hold: "button[data-cy='Hold']",
    verify: "button[data-cy='Verify']",
    preview: "button[data-cy='Preview']",
    save: "button[data-cy='Save']",
    authorize: "button[data-cy='Authorize']",
  },
};

export let histoRadioXpathAssertion = {
  result_entry_or_verification: {
    alert: "Result updated successfully",
  },
};
