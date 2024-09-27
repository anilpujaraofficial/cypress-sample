class UserSelectors {
  button() {
    return {
      add: "button[data-cy='Add']",
      save: "button[data-cy='savebutton']",
    };
  }

  form(val: string) {
    switch (val) {
      case "password":
        return `#password`;
      case "password_confirmation":
        return `#password_confirmation`;
      case "department":
        return `label.ant-checkbox-wrapper`;
      case "role":
        return `label.ant-checkbox-wrapper`;
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
      create: "User created",
      update: "User Updated",
      archive: "User Archived Successfully",
    };
  }

  form_validation() {
    console.log("first");
  }
}

export default UserSelectors;
