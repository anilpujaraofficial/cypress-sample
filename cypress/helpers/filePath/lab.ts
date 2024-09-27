let labSetup = "cypress/fixtures/TestData/investigation/labSetup";
let patho = "cypress/fixtures/TestData/investigation";
export let investigation = {
  labSetup: {
    emp: {
      emp_dir: labSetup + "/emp/",
      um_emp: labSetup + "/emp/umemp.json",
      lab_emp: labSetup + "/emp/labemp.json",
    },

    //!
    dept: {
      dept_dir: labSetup + "/dept/",
      um_dept: labSetup + "/dept/umdept.json",
      lab_dept: labSetup + "/dept/labdept.json",
    },

    sequenceDefinition_dir: labSetup + "/sequenceDefinition/",
    sequenceDefinition:
      labSetup + "/sequenceDefinition/sequenceDefinition.json",

    //!
    uoms_dir: labSetup + "/uoms/",
    uoms: labSetup + "/uoms/uoms.json",
    // !
    container_dir: labSetup + "/container/",
    container: labSetup + "/container/container.json",
    //!
    method: {
      method_dir: labSetup + "/method/",
      method: labSetup + "/method/method.json",
      analyzer: labSetup + "/method/analyzer.json",
    },

    //!
    organism_dir: labSetup + "/organism/",
    organism: labSetup + "/organism/organism.json",

    //!
    pickListResult: {
      pickListResult_dir: labSetup + "/pickListResult/",
      pickListResult: labSetup + "/pickListResult/pickListResult.json",
      dept: labSetup + "/pickListResult/dept.json",
      testname: labSetup + "/pickListResult/testname.json",
      testnameCat: labSetup + "/pickListResult/testnameCat.json",
      test: labSetup + "/pickListResult/test.json",
      dept_id: labSetup + "/pickListResult/dept_id.json",
    },

    analyzerMapping: {
      analyzerMapping_dir: labSetup + "/analyzerMapping/",
      analyzerMapping: labSetup + "/analyzerMapping/analyzerMapping.json",
      dept: labSetup + "/analyzerMapping/dept.json",
      testname: labSetup + "/analyzerMapping/testname.json",
      testnameCat: labSetup + "/analyzerMapping/testnameCat.json",
      test: labSetup + "/analyzerMapping/test.json",
      dept_id: labSetup + "/analyzerMapping/dept_id.json",
      analyzer: labSetup + "/analyzerMapping/analyzer.json",
      analyteCode: labSetup + "/analyzerMapping/analyteCode.json",
    },

    //!
    antibioticGroup_dir: labSetup + "/antibioticGroup/",
    antibioticGroup: labSetup + "/antibioticGroup/antibioticGroup.json",
    // !
    antibiotic: {
      antibiotic_dir: labSetup + "/antibiotic/",
      antibiotic: labSetup + "/antibiotic/antibiotic.json",
      organism: labSetup + "/antibiotic/organism.json",
      antibiotic_group: labSetup + "/antibiotic/abg.json",
    },
    // !
    specimen_dir: labSetup + "/specimen/",
    specimen: labSetup + "/specimen/specimen.json",

    // !
    category_dir: labSetup + "/category/",
    category: labSetup + "/category/category.json",

    // !
    analyzer_dir: labSetup + "/analyzer/",
    analyzer: labSetup + "/analyzer/analyzer.json",

    qcmaster: {
      qcmaster_dir: labSetup + "/qcmasster/",
      lot_num: labSetup + "/qcmasster/lotnum.json",
      level_desc: labSetup + "/qcmasster/level.json",
    },

    reagent: {
      reagent_dir: labSetup + "/reagent/",
      reagent: labSetup + "/reagent/reagent.json",
      analyzer: labSetup + "/reagent/analyzer.json",
    },
    // !
    analyzerConfiguration: {
      analyzerConfiguration_dir: labSetup + "/analyzerConfiguration/",
      analyzerConfiguration:
        labSetup + "/analyzerConfiguration/analyzerConfiguration.json",
      analyzer: labSetup + "/analyzerConfiguration/analyzer.json",
    },

    // !
    testNameAntibiotic: {
      testNameAntibiotic_dir: labSetup + "/testNameAntibiotic/",
      testNameAntibiotic:
        labSetup + "/testNameAntibiotic/testNameAntibiotic.json",
      organism: labSetup + "/testNameAntibiotic/organism.json",
      antibiotic_group: labSetup + "/testNameAntibiotic/antibiotic_group.json",
    },

    // !
    endnote: {
      endnote_dir: labSetup + "/endnote/",
      endnote: labSetup + "/endnote/endnote.json",
      dept: labSetup + "/endnote/dept.json",
      testname: labSetup + "/endnote/testname.json",
      testnameCat: labSetup + "/endnote/testnameCat.json",
      dept_id: labSetup + "/endnote/dept_id.json",
      category: labSetup + "/endnote/category.json",
    },
    // !
    comment_dir: labSetup + "/comment/",
    comment: labSetup + "/comment/comment.json",
    //
    analyteCode_dir: labSetup + "/analyteCode/",
    analyteCode: labSetup + "/analyteCode/analyteCode.json",

    findingTitles: {
      findingTitles_dir: labSetup + "/findingTitles/",
      findingTitles: labSetup + "/findingTitles/findingTitles.json",
    },
    reportFooter: {
      reportFooter_dir: labSetup + "/reportFooter/",
      reportFooter: labSetup + "/reportFooter/reportFooter.json",
      dept: labSetup + "/reportFooter/dept.json",
      testname: labSetup + "/reportFooter/testname.json",
      testnameCat: labSetup + "/reportFooter/testnameCat.json",
      dept_id: labSetup + "/reportFooter/dept_id.json",
    },
    reportFormat: {
      reportFormat_dir: labSetup + "/reportFormat/",
      reportFormat: labSetup + "/reportFormat/reportFormat.json",
      dept: labSetup + "/reportFormat/dept.json",
      testname: labSetup + "/reportFormat/testname.json",
      testnameCat: labSetup + "/reportFormat/testnameCat.json",
      dept_id: labSetup + "/reportFormat/dept_id.json",
    },

    labTem: {
      labTem_dir: labSetup + "/labTem/",
      dept: labSetup + "/labTem/dept.json",
      testname: labSetup + "/labTem/testname.json",
      test: labSetup + "/labTem/test.json",
      option: labSetup + "/labTem/option.json",
      endnote: labSetup + "/labTem/endnote.json",
      testnameCat: labSetup + "/labTem/testnameCat.json",
      dept_id: labSetup + "/labTem/dept_id.json",
    },
  },
  patho_histo_radio: {
    patho_dir: patho + "/patho/",
    patient: patho + "/patho/patient.json",
    bill: patho + "/patho/bill.json",
    rule: patho + "/patho/rule.json",
  },
};
