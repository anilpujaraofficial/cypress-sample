class FiscalYearSelectors {
  button() {
    return {
      add: "button[data-cy='Add']",
      save: "button[data-cy='Save']",
    };
  }

  form(val: string) {
    switch (val) {
      case "year":
        return `input[data-cy='year']`;
      default:
        return `button[data-cy='${val}']`;
    }
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

  alert() {
    return {
      create: "Fiscal year created",
      update: "Successfully updated fiscal year.",
      archive: "Fiscal year archived successfully",
    };
  }

  form_validation() {
    console.log("first");
  }
}

export default FiscalYearSelectors;
