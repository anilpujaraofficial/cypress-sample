import Form from "@helpers/utils/form";
import Button from "@helpers/utils/button";
import AlertMessage from "@helpers/utils/alertMessage";
import TablePage from "@helpers/utils/table";
import { Investigation } from "@helpers/faker/lab";
import {
  LevelDesc,
  LotNumber,
  QualityControlMasterXpathAssert,
} from "pages/main/investigation/labSetup/qualityControlMaster";
import { CommonPageObj } from "@pageObject/commonPageObj/commonPageObj";

let form = new Form();
let button = new Button();
let alert = new AlertMessage();
let tableP = new TablePage();
let qcmasterData = new Investigation();
let lotnoXpathAssertion = new LotNumber();
let levelXpathAssertion = new LevelDesc();
let qcmaster = new QualityControlMasterXpathAssert();
let commonPageObj = new CommonPageObj();

export class QualityControlMasterObj {}
export class lotNumberObj {
  createLotnumber(filePath) {
    let lotnoData = qcmasterData.lot_number();
    button.clickButton(lotnoXpathAssertion.button().lotnumber);

    cy.task("checkFileExists", filePath).then((bool) => {
      if (!bool) {
        button.clickButton(lotnoXpathAssertion.button().add);
        form.inputField(
          lotnoXpathAssertion.form().name,
          lotnoData.lot_no.value
        );
        button.clickSwitch(
          lotnoXpathAssertion.form().active,
          qcmasterData.lot_number().active.value
        );
        button.clickButton(lotnoXpathAssertion.button().save);
        alert.alertMessage(lotnoXpathAssertion.alert().create);
        cy.writeFile(filePath, lotnoData);
      }
    });
  }
  searchLotnumber(filePath) {
    button.clickButton(lotnoXpathAssertion.button().lotnumber);
    cy.readFile(filePath).then((data) => {
      form.inputField(lotnoXpathAssertion.list().search, data.lot_no.value);
      tableP.tableBody(lotnoXpathAssertion.list().table_td, data.lot_no.value);
    });
  }
  updateLotnumber(filePath) {
    let lotnoData = qcmasterData.lot_number();
    button.clickButton(lotnoXpathAssertion.button().lotnumber);
    cy.readFile(filePath).then((data) => {
      form.inputField(lotnoXpathAssertion.list().search, data.lot_no.value);
      button.clickButton(lotnoXpathAssertion.list().action);
      button.clickWithContain(
        lotnoXpathAssertion.list().view_update_archive,
        "Edit"
      );
      form.inputField(lotnoXpathAssertion.form().name, lotnoData.lot_no.value);
      button.clickSwitch(
        lotnoXpathAssertion.form().active,
        qcmasterData.lot_number().active.value
      );
      button.clickButton(lotnoXpathAssertion.button().save);
      alert.alertMessage(lotnoXpathAssertion.alert().update);
      cy.writeFile(filePath, lotnoData);
    });
  }

  viewLotnumber(filePath) {
    button.clickButton(lotnoXpathAssertion.button().lotnumber);
    cy.readFile(filePath).then((data) => {
      form.inputField(lotnoXpathAssertion.list().search, data.lot_no.value);
      button.clickButton(lotnoXpathAssertion.list().action);
      button.clickWithContain(
        lotnoXpathAssertion.list().view_update_archive,
        "View"
      );
      commonPageObj.verifyInputFieldValue(
        lotnoXpathAssertion.form().name,
        data.lot_no.value
      );
    });
  }
  archiveLotnumber(filePath) {
    button.clickButton(lotnoXpathAssertion.button().lotnumber);
    cy.readFile(filePath).then((data) => {
      form.inputField(lotnoXpathAssertion.list().search, data.lot_no.value);
      button.clickButton(lotnoXpathAssertion.list().action);

      button.clickWithContain(
        lotnoXpathAssertion.list().view_update_archive,
        "Archive"
      );
      button.clickWithContain(lotnoXpathAssertion.list().ok_cancel, "OK");
      alert.alertMessage(lotnoXpathAssertion.alert().archive);
    });
  }
}
export class levelDescObj {
  createLevelDesc(filePath) {
    let levelData = qcmasterData.level_desc();
    button.clickButton(levelXpathAssertion.button().leveldesc);

    cy.task("checkFileExists", filePath).then((bool) => {
      if (!bool) {
        button.clickButton(levelXpathAssertion.button().add);
        form.inputField(levelXpathAssertion.form().name, levelData.level.value);
        button.clickSwitch(
          levelXpathAssertion.form().active,
          qcmasterData.level_desc().active.value
        );
        button.clickButton(levelXpathAssertion.button().save);
        alert.alertMessage(levelXpathAssertion.alert().create);
        cy.writeFile(filePath, levelData);
      }
    });
  }
  searchLevelDesc(filePath) {
    button.clickButton(levelXpathAssertion.button().leveldesc);
    cy.readFile(filePath).then((data) => {
      form.inputField(levelXpathAssertion.list().search, data.level.value);
      tableP.tableBody(levelXpathAssertion.list().table_td, data.level.value);
    });
  }
  updateLevelDesc(filePath) {
    let levelData = qcmasterData.level_desc();
    button.clickButton(levelXpathAssertion.button().leveldesc);
    cy.readFile(filePath).then((data) => {
      form.inputField(levelXpathAssertion.list().search, data.level.value);
      button.clickButton(levelXpathAssertion.list().action);
      button.clickWithContain(
        levelXpathAssertion.list().view_update_archive,
        "Edit"
      );
      form.inputField(levelXpathAssertion.form().name, levelData.level.value);
      button.clickSwitch(
        levelXpathAssertion.form().active,
        qcmasterData.level_desc().active.value
      );
      button.clickButton(levelXpathAssertion.button().save);
      alert.alertMessage(levelXpathAssertion.alert().update);
      cy.writeFile(filePath, levelData);
    });
  }

  viewLevelDesc(filePath) {
    button.clickButton(levelXpathAssertion.button().leveldesc);
    cy.readFile(filePath).then((data) => {
      form.inputField(levelXpathAssertion.list().search, data.level.value);
      button.clickButton(levelXpathAssertion.list().action);
      button.clickWithContain(
        levelXpathAssertion.list().view_update_archive,
        "View"
      );
      commonPageObj.verifyInputFieldValue(
        levelXpathAssertion.form().name,
        data.level.value
      );
    });
  }
  archiveLotnumber(filePath) {
    button.clickButton(levelXpathAssertion.button().leveldesc);
    cy.readFile(filePath).then((data) => {
      form.inputField(levelXpathAssertion.list().search, data.level.value);
      button.clickButton(levelXpathAssertion.list().action);

      button.clickWithContain(
        levelXpathAssertion.list().view_update_archive,
        "Archive"
      );
      button.clickWithContain(levelXpathAssertion.list().ok_cancel, "OK");
      alert.alertMessage(levelXpathAssertion.alert().archive);
    });
  }
}
