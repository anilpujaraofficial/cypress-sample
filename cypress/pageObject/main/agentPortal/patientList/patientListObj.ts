import Form from "@helpers/utils/form";
import { CommonPageObj } from "@pageObject/commonPageObj/commonPageObj";
import { AgentPatientListTransaction as agentX } from "@pages/main/agentPortal/patientList/patientList";
let commonPageObj = new CommonPageObj();
let form = new Form();
export class AgentPatientListObj {
  searchPatient(bill) {
    cy.readFile(bill).then((data) => {
      form.inputField(agentX.patientList.search, data.bill_no);
    });
  }

  verifyPatientInfo(bill, patient) {
    cy.readFile(bill).then((dat) => {
      cy.readFile(patient).then((data) => {
        let info = [
          dat.bill_no,
          data.hospital_no,
          data.name,
          data.permanent_address,
        ];
        info.forEach((item) => {
          commonPageObj.verifyContain(agentX.patientList.table_data, item);
        });
      });
    });
  }
}
