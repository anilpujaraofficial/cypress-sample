class FindingTitleXpathAssertion {
  button() {
    return {
      add: "button[data-cy='Add']",
      save: "button[type='submit']",
    };
  }
  form() {
    return {
      display_order: "input[data-cy='display_order']",
      department_type: "input[id='department_type']",
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
      create: "Finding Title created",
      update: "Finding Title updated",
      archive: "Finding Title Archived successfully",
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

export default FindingTitleXpathAssertion;
