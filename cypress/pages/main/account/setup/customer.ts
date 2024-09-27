class CustomerSelectors {
  button() {
    return {
      add: "button[data-cy='Add']",
      save: "button[data-cy='Save']",
    };
  }

  form(val: string) {
    switch (val) {
      case "code":
        return `#code`;
      case "country":
        return `#country_id`;
      case "state":
        return `#state_id`;
      case "district":
        return `#district_id`;
      case "municipality":
        return `#vdcmcpt_id`;
      case "pan_number":
        return `#pan_number`;
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
      create: "Customer created",
      update: "Successfully updated customer.",
      archive: "Customer archived successfully",
    };
  }

  form_validation() {
    console.log("first");
  }
}

export default CustomerSelectors;
