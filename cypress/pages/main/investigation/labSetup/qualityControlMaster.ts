export class QualityControlMasterXpathAssert {}

export class LotNumber {
  button() {
    return {
      lotnumber: "div:nth-child(4) > button:nth-child(1) > span:nth-child(2)",
      add: "div.ant-modal-content button[data-cy='Add']",
      save: "div.ant-modal-content button[data-cy='savebutton']",
    };
  }
  form() {
    return {
      name: "div.ant-modal-content input#lot_no",
      active: "div.ant-modal-content button[id='active']",
    };
  }
  list() {
    return {
      search: "div.ant-modal-content input[data-cy='Search']",
      table_td: "div.ant-modal-content tbody tr:last-child td",
      action: "div.ant-modal-content tbody td:nth-child(4) svg",
      view_update_archive: "ul.ant-dropdown-menu li",
      ok_cancel: "div.ant-popconfirm-buttons button  span",
    };
  }
  alert() {
    return {
      create: "Lot Successfully Created",
      update: "Lot Successfully Updated",
      archive: "Lot Successfully Archived",
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
export class LevelDesc {
  button() {
    return {
      leveldesc: "div:nth-child(5) > button:nth-child(1) > span:nth-child(2)",
      add: "div.ant-modal-content button[data-cy='Add']",
      save: "div.ant-modal-content button[data-cy='savebutton']",
    };
  }
  form() {
    return {
      name: "div.ant-modal-content input#level",

      active: "div.ant-modal-content button[id='active']",
    };
  }
  list() {
    return {
      search: "div.ant-modal-content input[data-cy='Search']",
      table_td: "div.ant-modal-content tbody tr:last-child td",
      action: "div.ant-modal-content tbody td:nth-child(4) svg",
      view_update_archive: "ul.ant-dropdown-menu li",
      ok_cancel: "div.ant-popconfirm-buttons button  span",
    };
  }
  alert() {
    return {
      create: "Level Successfully Created",
      update: "Level Successfully Updated",
      archive: "Level Successfully Archived",
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
