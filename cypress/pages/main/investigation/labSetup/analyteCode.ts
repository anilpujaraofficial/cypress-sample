class AnalyteCodeXpathAssertion {
  button() {
    return {
      add: "button[data-cy='Add']",
      save: "button[data-cy='Save']",
    };
  }
  form() {
    return {
      analyte_code: "input[data-cy='analyte_code']",
      alias_name: "input[data-cy='alias_name']",
    };
  }
  list() {
    return {
      search: "input[data-cy='Search']",
      table_td: "tbody tr:last-child td",
      view: ["Action", "View"],
      update: ["Action", "Edit"],
      archive: ["Action", "Archive"],
    };
  }
  alert() {
    return {
      create: "Analyte Code Created",
      update: "Analyte code updated successfully",
      archive: "Analyte code archived successfully",
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
  delete_confirm() {
    return {
      xpath: {
        confirm_text: "div.ant-popconfirm-message-text",
        ok: "div.ant-popconfirm-buttons button",
        cancel: "div.ant-popconfirm-buttons button",
      },
      value: {
        confirm_text: "Are you sure you want to archive?",
        ok: "OK",
        cancel: "Cancel",
      },
    };
  }
}

export default AnalyteCodeXpathAssertion;
