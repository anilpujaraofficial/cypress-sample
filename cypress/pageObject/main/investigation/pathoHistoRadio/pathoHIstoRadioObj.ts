import { faker } from "@faker-js/faker";
import { bill, patient } from "@helpers/faker/pa";
import AlertMessage from "@helpers/utils/alertMessage";
import Button from "@helpers/utils/button";
import Form from "@helpers/utils/form";
import TablePage from "@helpers/utils/table";
import { APIObj } from "@pageObject/apiObj/apiObj";
import { CommonPageObj } from "@pageObject/commonPageObj/commonPageObj";
import {
  pathoHistoRadioXpathAssertion as pathoX,
  histoRadioXpathAssertion as histoX,
} from "@pages/main/investigation/pathology/pathology";
import { getEnvVariables } from "@support/commands";

let form = new Form();
let button = new Button();
let alert = new AlertMessage();
let tableP = new TablePage();
let commonPageObj = new CommonPageObj();
let apiObj = new APIObj();
//!pathology
export class PathologyObj {
  addDependency(filePath) {
    apiObj.createAPI(
      getEnvVariables("apiUrl") + "/pa/register",
      patient().data,
      filePath.patient
    );
    apiObj.createAPI(
      getEnvVariables("apiUrl") + "/pa/billing",
      bill(filePath.patient).data,
      filePath.bill
    );
  }

  //   patientList

  searchPatient(filePath) {
    cy.readFile(filePath).then((data) => {
      form.inputField(pathoX.search, data.bill_no);
      cy.wait(500);
      cy.get(pathoX.get_labno).then((res) => {
        commonPageObj.verifyContain(pathoX.table_td, data.bill_no);
        data.lab_id = res[0].innerText;
        cy.writeFile(filePath, data);
      });
    });
  }

  verifyPatientInfo(bill, patient) {
    cy.readFile(bill).then((bill) => {
      form.inputField(pathoX.search, bill.bill_no);
      cy.readFile(patient).then((patient) => {
        let dat = [patient.name, patient.hospital_no, bill.bill_no];
        dat.forEach((item) => {
          tableP.tableBody(pathoX.table_td, item);
        });
      });
    });
  }

  //   sampleCollection

  collectSample(bill, patient, dept_type) {
    button.clickWithContain(
      pathoX.tab,
      pathoX.patho_histo_radio_tab.sampleCollection
    );

    cy.readFile(bill).then((data) => {
      cy.intercept(
        getEnvVariables("apiUrl") +
          `/labs/sample-collection/${data.lab_id}/${dept_type}`
      ).as("status");

      commonPageObj.typeAndEnter(pathoX.labno, data.lab_id);
      cy.readFile(patient).then((patient) => {
        commonPageObj.verifyInputFieldValue(
          pathoX.patientProfile.patient_name,
          patient.name
        );
        commonPageObj.verifyInputFieldValue(
          pathoX.patientProfile.permanent_address,
          patient.permanent_address
        );
        commonPageObj.verifyInputFieldValue(
          pathoX.patientProfile.mobile_no,
          patient.mobile_no
        );
      });
    });

    cy.wait("@status").then((res) => {
      if (
        res.response.body.data.patient_tests[2]?.[0].test_progress_status ==
          "2" ||
        res.response.body.data.patient_tests[3]?.[0].test_progress_status ==
          "3" ||
        res.response.body.data.patient_tests[4]?.[0].test_progress_status == "4"
      ) {
        cy.log("Sample Collected !!!");
      } else {
        button.clickButton(pathoX.sample_collect.bulk_collect);
        cy.wait(500);
        alert.alertMessage(pathoX.sample_collect.alert_message);
        cy.closeNewWindow();
      }
    });
  }

  //   labReceive
  labReceive(filePath, rule) {
    button.clickWithContain(
      pathoX.tab,
      pathoX.patho_histo_radio_tab.labReceive
    );

    cy.readFile(rule).then((res) => {
      res.forEach((item) => {
        if (
          (item.key === "sc_rule" && item.value === "sc_lr_dr") ||
          (item.key === "sc_rule" && item.value === "sc_lr")
        ) {
          cy.readFile(filePath).then((data) => {
            commonPageObj.typeAndEnter(pathoX.lab_receive.lab_id, data.lab_id);
            button.clickButton(pathoX.lab_receive.lab_receive);
            alert.alertMessage(pathoX.lab_receive.alert_message);
          });
        } else if (
          (item.key === "sc_rule" && item.value === "sc") ||
          (item.key === "sc_rule" && item.value === "sc_dr")
        ) {
          cy.log("Lab Received !!!");
        }
      });
    });
  }
  //
  departmentReceive(filePath, rule) {
    button.clickWithContain(
      pathoX.tab,
      pathoX.patho_histo_radio_tab.departmentReceive
    );

    cy.readFile(rule).then((res) => {
      res.forEach((item) => {
        if (
          (item.key === "sc_rule" && item.value === "sc_lr_dr") ||
          (item.key === "sc_rule" && item.value === "sc_dr")
        ) {
          cy.readFile(filePath).then((data) => {
            commonPageObj.typeAndEnter(pathoX.dept_receive.lab_id, data.lab_id);
            button.clickButton(pathoX.dept_receive.dept_receive);
            alert.alertMessage(pathoX.dept_receive.alert_message);
          });
        } else if (
          (item.key === "sc_lr" && item.value === "sc") ||
          (item.key === "sc_lr" && item.value === "sc_lr")
        ) {
          cy.log("Department Received !!!");
        }
      });
    });
  }
  //   resultEntry || verification

  resultEntry(bill) {
    button.clickWithContain(
      pathoX.tab,
      pathoX.patho_histo_radio_tab.resultEntry
    );
    cy.readFile(bill).then((data) => {
      commonPageObj.typeAndEnter(pathoX.labno, data.lab_id);
    });
    form.inputField(
      pathoX.resultEntry.value,
      faker.number.int({ min: 10, max: 99 })
    );
    button.clickButton(pathoX.button.save);
    cy.wait(500);
    alert.alertMessage(pathoX.resultEntry.result_entry_success);
  }
  verification(bill, rule) {
    button.clickWithContain(
      pathoX.tab,
      pathoX.patho_histo_radio_tab.verification
    );
    this.searchPatient(bill);

    cy.readFile(bill).then((data) => {
      button.clickWithContain(pathoX.verification.lab_id, data.lab_id);
    });

    cy.readFile(rule).then((res) => {
      res.forEach((item) => {
        if (item.key === "d_v" && item.value === "0") {
          button.clickButton(pathoX.button.verify);
          cy.wait(500);
          alert.alertMessage(pathoX.verification.verify_success);
        } else if (item.key === "d_v" && item.value === "1") {
          button.clickButton(pathoX.button.verify);
          cy.wait(500);
          alert.alertMessage(pathoX.verification.verify_success);
          button.clickButton(pathoX.verification.select_all);

          button.clickButton(pathoX.button.authorize);
          cy.wait(500);
          alert.alertMessage(pathoX.verification.authorize_success);
        }
      });
    });
  }

  //   dispatch

  dispatch(bill, patient) {
    button.clickWithContain(pathoX.tab, pathoX.patho_histo_radio_tab.dispatch);
    cy.readFile(bill).then((data) => {
      commonPageObj.typeAndEnter(pathoX.labno, data.lab_id);
    });
    cy.readFile(patient).then((patient) => {
      commonPageObj.verifyInputFieldValue(
        pathoX.patientProfile.patient_name,
        patient.name
      );
      commonPageObj.verifyInputFieldValue(
        pathoX.patientProfile.permanent_address,
        patient.permanent_address
      );
      commonPageObj.verifyInputFieldValue(
        pathoX.patientProfile.mobile_no,
        patient.mobile_no
      );
    });
  }
  //   sampleDiscard
  //   analyzerResult
  //   rejectTest || cancelTest

  testReject(bill) {
    button.clickWithContain(
      pathoX.tab,
      pathoX.patho_histo_radio_tab.rejectTest
    );
    cy.readFile(bill).then((data) => {
      commonPageObj.typeAndEnter(pathoX.labno, data.lab_id);
    });

    commonPageObj.verifyContain(
      pathoX.reject.heading,
      pathoX.reject.heading_text
    );

    form.inputField(pathoX.reject.remarks, faker.lorem.sentence());
    button.clickButton(pathoX.reject.reject);
    alert.alertMessage(pathoX.reject.alert);
  }

  testCancel(bill, patient, dept_type) {
    this.collectSample(bill, patient, dept_type);
    button.clickWithContain(
      pathoX.tab,
      pathoX.patho_histo_radio_tab.cancelTest
    );
    cy.readFile(bill).then((data) => {
      commonPageObj.typeAndEnter(pathoX.labno, data.lab_id);
    });

    commonPageObj.verifyContain(
      pathoX.cancel.heading,
      pathoX.cancel.heading_text
    );

    form.inputField(pathoX.cancel.remarks, faker.lorem.sentence());

    button.clickButton(pathoX.cancel.cancel);
    alert.alertMessage(pathoX.cancel.alert);
  }

  //   reportUpload
}

//!histo or radio
export class HistoRadioObj {
  resultEntry(bill) {
    button.clickWithContain(
      pathoX.tab,
      pathoX.patho_histo_radio_tab.resultEntry
    );
    cy.readFile(bill).then((data) => {
      commonPageObj.typeAndEnter(pathoX.labno, data.lab_id);
    });

    button.clickButton(pathoX.button.save);
    alert.alertMessage(histoX.result_entry_or_verification.alert);
  }
  verification(bill, rule) {
    button.clickWithContain(
      pathoX.tab,
      pathoX.patho_histo_radio_tab.verification
    );
    cy.readFile(bill).then((data) => {
      commonPageObj.typeAndEnter(pathoX.labno, data.lab_id);
    });

    cy.readFile(rule).then((res) => {
      res.forEach((item) => {
        if (item.key === "d_v" && item.value === "0") {
          button.clickButton(pathoX.button.verify);
          cy.wait(500);
          alert.alertMessage(pathoX.verification.verify_success);
        } else if (item.key === "d_v" && item.value === "1") {
          button.clickButton(pathoX.button.verify);
          cy.wait(500);
          alert.alertMessage(pathoX.verification.verify_success);
          button.clickButton(pathoX.verification.select_all);

          button.clickButton(pathoX.button.authorize);
          cy.wait(500);
          alert.alertMessage(pathoX.verification.authorize_success);
        }
      });
    });
  }
  dispatch(bill, patient) {}
}
