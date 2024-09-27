class ReagentXpathAssertion {
  button() {
    return {
      add: "button[data-cy='Add']",
      save: "button[data-cy='Save']",
    };
  }
  form() {
    return {
      analyzer: "#analyzer_id",
      alias_name: "input[data-cy='alias_name']",
      name: "input[data-cy='name']",
      reagent_type: "input[id='reagent_type']",
      unit: "input[id='unit']",
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
      create: null,
      update: "Reagent updated successfully",
      archive: "Reagent archived successfully",
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

export default ReagentXpathAssertion;
