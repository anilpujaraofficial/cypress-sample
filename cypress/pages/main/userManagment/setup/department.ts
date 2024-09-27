class DepartmentSelectors {
  button() {
    return {
      add: "button[data-cy='Add']",
      save: "button[data-cy='savebutton']",
    };
  }

  form(val: string) {
    switch (val) {
      case "name":
        return `input[data-cy='name']`;
      case "code":
        return `input[data-cy='code']`;
      case "code_prefix":
        return `input[data-cy='code_prefix']`;
      case "display_order":
        return `input[data-cy='display_order']`;
      case "length":
        return `input[data-cy='length']`;
      case "type":
        return `input#type`;
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
      create: "Department created",
      update: "Department updated",
      archive: "Department deleted successfully",
    };
  }

  form_validation() {
    console.log("first");
  }
}

export default DepartmentSelectors;
