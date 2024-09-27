class EmployeeSelectors {
  button() {
    return {
      add: "button[data-cy='Add']",
      save: "button[data-cy='Save']",
    };
  }

  form(val: string) {
    switch (val) {
      case "gender":
        return `#gender`;
      case "department_id":
        return `#department_id`;
      case "designation_id":
        return `#designation_id`;
      case "position_id":
        return `#position_id`;
      case "type":
        return `#type`;
      case "create_user":
        return `button[data-cy='create_user']`;
      default:
        return `input[data-cy='${val}']`;
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
      create: "Employee created",
      update: "Employee updated",
      archive: "Employee Archived Successfully",
    };
  }

  form_validation() {
    console.log("first");
  }
}

export default EmployeeSelectors;
