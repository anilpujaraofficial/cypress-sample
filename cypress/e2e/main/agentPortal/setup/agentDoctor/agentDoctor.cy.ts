import { gotoMenuSubMenuFeatureSubFeature as nivigation } from "@support/commands";
import { agentPortal } from "@helpers/filePath/ap";
import AgentDoctorObj from "@pageObject/main/agentPortal/setup/agentDoctorObj";
const agentDoctor = new AgentDoctorObj();
const filePath = agentPortal.setup.agent_doctor;

describe(
  "Agent Portal > Setup > Agent Doctor",
  { tags: ["@apSetup", "@ap"] },
  () => {
    before(() => cy.rmDir(filePath.agent_doctor_dir));
    beforeEach(() => {
      cy.agentLogin();
      cy.get("span.whitespace-nowrap").click().wait(500);
      nivigation(["Setup", "Agent Doctor"]);
    });

    ["create", "search", "view", "update", "archive"].forEach((action) => {
      it(`Validate that a user is able to ${action} Agent Doctor`, () => {
        agentDoctor[`${action}AgentDoctor`](filePath.agent_doctor);
      });
    });
  }
);
