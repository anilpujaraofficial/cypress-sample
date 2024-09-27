// import { getEnvVariables } from "../../../../../../helpers/environment/environment";
// import { patientAdministration } from "@helpers/filePath/lab";
// import * as apiObj from "../../../../../../pageObject/apiObj/apiObj";
// import * as billingObj from "../../../../../../pageObject/main/patientAdministration/billingRefundDepositCreditAndClearanceObj";
// import * as APIFakerObj from "../../../../../../helpers/faker/apiFakerObj";
// const filePath = patientAdministration.billing.billing;

// describe(
//   "Billing || Refund Billing || Deposit Billing || Credit & Clearance ",
//   { tags: "@billing" },
//   () => {
//      before(() => {
Cypress.session.clearAllSavedSessions();
//       cy.rmDir(filePath.billing_dir);
//       cy.rmFile(filePath.mul_billing);
//     });
//     beforeEach(() => {
//       cy.adminLogin();

//       apiObj.createAPI(
//         getEnvVariables("apiUrl") + "/pa/register",
//         APIFakerObj.patientRegisterAPIFakerObj().data,
//         filePath.patient
//       );
//     });
//     it("Billing create", () => {
//       billingObj.gotoBillingPage();
//       billingObj.create_billing(filePath.patient, filePath.billing);
//     });
//     it("Refund billing", () => {
//       billingObj.gotoBillingRefundPage();
//       billingObj.refund_billing(
//         filePath.patient,
//         filePath.billing,
//         filePath.refundBilling
//       );
//     });
//     it("Verify scheme wise test discount", () => {
//       billingObj.gotoBillingPage();
//       billingObj.scheme_wise_test_discount(filePath.patient);
//     });

//     it("To verify add multiple test", () => {
//       billingObj.gotoBillingPage();
//       billingObj.add_multiple_test(filePath.patient, filePath.mul_billing);
//     });

//     it("To validate that a user is unable to add same test name", () => {
//       billingObj.gotoBillingPage();
//       billingObj.duplicate_test_name_is_not_add(filePath.patient);
//     });

//     it("Deposit billing ", () => {
//       billingObj.gotoBillinDepositePage();
//       billingObj.billing_deposit(
//         filePath.patient,
//         filePath.depositBilling,
//         "5000"
//       );
//     });
//     it("Adjust deposit : if deposit billing > billing amount", () => {
//       billingObj.gotoBillingPage();
//       billingObj.adjust_deposit_no_billing(filePath.patient);
//     });
//     it("Deposit refund", () => {
//       billingObj.gotoBillinDepositePage();
//       billingObj.deposit_refund(
//         filePath.patient,
//         filePath.depositBilling,
//         filePath.depositRefund
//       );
//     });

//     it("Adjust deposit : if deposit billing <= billing amount", () => {
//       billingObj.gotoBillinDepositePage();
//       billingObj.billing_deposit(
//         filePath.patient,
//         filePath.depositBilling1,
//         "500"
//       );
//       billingObj.gotoBillingPage();
//       billingObj.adjust_deposit_billing(
//         filePath.patient,
//         filePath.depositBilling1
//       );
//     });

//     it("Credit & Clearance", () => {
//       billingObj.gotoBillingPage();
//       billingObj.credit_clearance(
//         filePath.patient,
//         filePath.credit_clearance_billing,
//         filePath.credit_clearance
//       );
//     });
//   }
// );
