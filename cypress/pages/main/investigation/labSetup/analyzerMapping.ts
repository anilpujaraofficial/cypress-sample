class AnalyzerMappingXpathAssertion {
  button() {
    return {
      add: "button[data-cy='Add']",
      save: "button[data-cy='savebutton']",
      add_child: "button[data-cy='addbutton']",
    };
  }
  form() {
    return {
      name: "textarea[data-cy='name']",
      department: "#department_id",
      test_name: "#test_name_id",
      test: "input[id='test_id']",
      analyte: "#analyte1",
      azer1: "#azer1",
      active: "button[data-cy='active']",
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
      create: "Analyzer mapped successfully",
      update: "Analyzer mapped successfully",
      archive: "Analyzer mapping archived successfully",
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

export default AnalyzerMappingXpathAssertion;
