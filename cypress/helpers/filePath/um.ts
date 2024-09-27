//! User Managment
let setup = "cypress/fixtures/TestData/userManagment/setup";
let userSetup = "cypress/fixtures/TestData/userManagment/userSetup";

export let userManagment = {
  setup: {
    designation: {
      designation_dir: setup + "/designation/",
      designation: setup + "/designation/designation.json",
    },
    position: {
      position_dir: setup + "/position/",
      position: setup + "/position/position.json",
    },
    department: {
      department_dir: setup + "/department/",
      department: setup + "/department/department.json",
    },
    employee: {
      employee_dir: setup + "/emp/",
      employee: setup + "/emp/emp.json",
      position: setup + "/emp/position.json",
      department: setup + "/emp/department.json",
      designation: setup + "/emp/designation.json",
    },
    org: {
      org_dir: setup + "/org/",
      org: setup + "/org/org.json",
      login: setup + "/org/login.json",
    },
    suborg: {
      suborg_dir: setup + "/suborg/",
      suborg: setup + "/suborg/suborg.json",
      login: setup + "/suborg/login.json",
    },
  },
  userSetup: {
    user: {
      user_dir: userSetup + "/user/",
      user: userSetup + "/user/user.json",
      role: userSetup + "/user/role.json",
      department: userSetup + "/user/department.json",
    },
    role: {
      role_dir: userSetup + "/role/",
      role: userSetup + "/role/role.json",
    },
  },
};
