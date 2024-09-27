//!patient Administration
let patientSetup =
  "cypress/fixtures/TestData/patientAdministration/patientSetup";
let pa = "cypress/fixtures/TestData/patientAdministration/pa";
let billing = "cypress/fixtures/TestData/patientAdministration/billing";

export let patientAdministration = {
  patientSetup: {
    // !
    bank_dir: patientSetup + "/bank/",
    bank: patientSetup + "/bank/bank.json",
    // !
    referralFrom_dir: patientSetup + "/referralFrom/",
    referralFrom: patientSetup + "/referralFrom/referralFrom.json",

    // !
    referralSources_dir: patientSetup + "/referralSources/",
    referralSources: patientSetup + "/referralSources/referralSources.json",

    // !
    registrationDynamicView_dir: patientSetup + "/registrationDynamicView/",
    registrationDynamicView:
      patientSetup + "/registrationDynamicView/registrationDynamicView.json",

    // !
    camps_dir: patientSetup + "/camps/",
    camps: patientSetup + "/camps/camps.json",

    // !
    salutation_dir: patientSetup + "/salutation/",
    salutation: patientSetup + "/salutation/salutation.json",

    // !
    communities_dir: patientSetup + "/communities/",
    communities: patientSetup + "/communities/communities.json",
    // !

    registrationDynamicViewDetails: {
      registrationDynamicViewDetails_dir:
        patientSetup + "/registrationDynamicViewDetails/",
      registrationDynamicViewDetails:
        patientSetup +
        "/registrationDynamicViewDetails/registrationDynamicViewDetails.json",
      registrationViews:
        patientSetup + "/registrationDynamicViewDetails/registrationviews.json",
    },

    // !
    position_dir: patientSetup + "/position/",
    position: patientSetup + "/position/position.json",

    // !
    patientType_dir: patientSetup + "/patientType/",
    patientType: patientSetup + "/patientType/patientType.json",

    // !

    patientSystemTypes: {
      patientSystemTypes_dir: patientSetup + "/patientSystemTypes/",
      patientSystemTypes:
        patientSetup + "/patientSystemTypes/patientSystemTypes.json",
      patientType: patientSetup + "/patientSystemTypes/patientType.json",
    },

    // !
    relation_dir: patientSetup + "/relation/",
    relation: patientSetup + "/relation/relation.json",
    // !

    scheme: {
      schemes_dir: patientSetup + "/schemes/",
      schemes: patientSetup + "/schemes/schemes.json",
      community: patientSetup + "/schemes/community.json",
    },

    // !
    schemeWiseTestDiscounts: {
      schemeWiseTestDiscounts_dir: patientSetup + "/schemeWiseTestDiscounts/",
      schemeWiseTestDiscounts:
        patientSetup + "/schemeWiseTestDiscounts/schemeWiseTestDiscounts.json",

      schemes: patientSetup + "/schemeWiseTestDiscounts/schemes.json",

      patientType: patientSetup + "/schemeWiseTestDiscounts/patientType.json",
    },

    // !
    systemTypes_dir: patientSetup + "/systemTypes/",
    systemTypes: patientSetup + "/systemTypes/systemTypes.json",

    // !
    testNameCategories_dir: patientSetup + "/testNameCategories/",
    testNameCategories:
      patientSetup + "/testNameCategories/testNameCategories.json",

    // !
    testNameWithPrice: {
      testNameWithPrice_dir: patientSetup + "/testNameWithPrice/",
      testNameWithPrice:
        patientSetup + "/testNameWithPrice/testNameWithPrice.json",
      // patientType: patientSetup + "/testNameWithPrice/patientType.json",
      // category: patientSetup + "/testNameWithPrice/category.json",
      dept: patientSetup + "/testNameWithPrice/dept.json",
    },

    // !
    fractionSetup: {
      fractionSetup_dir: patientSetup + "/fractionSetup/",
      fractionSetup: patientSetup + "/fractionSetup/fractionSetup.json",
      patient_type: patientSetup + "/fractionSetup/patient_type.json",
    },
    //!
    positionWiseFractionSetup: {
      positionWiseFractionSetup_dir:
        patientSetup + "/positionWiseFractionSetup/",

      positionWiseFractionSetup:
        patientSetup +
        "/positionWiseFractionSetup/positionWiseFractionSetup.json",
    },

    vaccines_dir: patientSetup + "/vaccines/",
    vaccines: patientSetup + "/vaccines/vaccines.json",
  },
  pa: {
    patient_dir: pa + "/register/",
    patient: pa + "/register/register.json",
    scheme: pa + "/register/schemes.json",
  },
  billing: {
    billing: {
      billing_dir: billing + "/billing/",
      patient: billing + "/billing/patient.json",
      billing: billing + "/billing/billing.json",
      mul_billing: billing + "/billing/mul_billing.json",
      refundBilling: billing + "/billing/refundBillling.json",
      //deposit
      depositBilling: billing + "/billing/depositBilling.json",
      depositBilling1: billing + "/billing/depositBilling1.json",
      depositRefund: billing + "/billing/depositRefund.json",
      // credit/clearance
      credit_clearance_billing:
        billing + "/billing/credit_clearance_billing.json",
      credit_clearance: billing + "/billing/credit_clearance.json",
    },
  },
};
