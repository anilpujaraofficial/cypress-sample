//! User Managment
let setup = "cypress/fixtures/TestData/agentPortal/setup";

let ap = "cypress/fixtures/TestData/agentPortal";

export let agentPortal = {
  setup: {
    agent_doctor: {
      agent_doctor_dir: setup + "/agentDoctor/",
      agent_doctor: setup + "/agentDoctor/agentDoctor.json",
    },
  },
  patient_list: {
    patient: ap + "/patientList/patientList.json",
    bill: ap + "/patientList/bill.json",
  },
};
