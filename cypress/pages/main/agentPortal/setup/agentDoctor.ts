class AgentDoctorSelectors {
  button() {
    return {
      add: "button[data-cy='Add']",
      save: "button[data-cy='savebutton']",
    };
  }

  form(val: string) {
    switch (val) {
      case "specialization":
        return `#specilization`;
      default:
        return `#${val}`;
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
      create: "Agent Doctor Created",
      update: "Agent Doctor Updated",
      archive: "Agent Doctor Archived Successfully",
    };
  }

  form_validation() {
    console.log("first");
  }
}

export default AgentDoctorSelectors;
