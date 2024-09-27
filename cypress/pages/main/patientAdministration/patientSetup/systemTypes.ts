class SystemTypeModule {
  button() {
    return {
      add: "button[data-cy='Add']",
      save: "button[type='submit']",
    };
  }

  form() {
    return {
      name: "#name",
      code: "#code",
    };
  }

  systemtype_search() {
    return {
      search: "input[placeholder='Search']",
      table_data: "tbody tr:nth-child(2) td:nth-child(2)",
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

  invalid_feedback() {
    return {
      value: {
        empty_name: "This name field is required",
        name_more_than_100char:
          "The name field must not be greater than 100 characters.",
        empty_code: "This code field is required",
        code_more_than_5_char:
          "The code field must not be greater than 5 characters.",
      },
    };
  }

  alert() {
    return {
      create: "SystemType created",
      update: "Systemtype updated",
      archive: "SystemType deleted successfully",
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
export default SystemTypeModule;
