import { investigation } from "@helpers/filePath/lab";
import { gotoMenuSubMenuFeatureSubFeature as navigation } from "@support/commands";
import { CommentObj } from "@pageObject/main/investigation/labSetup/commentObj";
const filePath = investigation.labSetup;
const commentObj = new CommentObj();
describe(
  "Investigation > Lab Setup > Comment",
  { tags: ["@labSetup", "@lab"] },
  () => {
    before(() => {
      Cypress.session.clearAllSavedSessions();
      cy.rmDir(filePath.comment_dir);
    });
    beforeEach(() => {
      cy.adminLogin();
      navigation(["Investigation", "Lab Setup", "Comment"]);
    });
    it("To validate that a user is able to create comment", () => {
      commentObj.createComment(filePath.comment);
    });
    it("To validate that a user is able to search comment", () => {
      commentObj.searchComment(filePath.comment);
    });
    it("To validate that a user able to view comment", () => {
      commentObj.commentView(filePath.comment);
    });
    it("To validate that a user is able to edit comment", () => {
      commentObj.updatecomment(filePath.comment);
    });

    it("To validate that a user is able to  archive comment", () => {
      commentObj.deletecomment(filePath.comment);
    });
  }
);
