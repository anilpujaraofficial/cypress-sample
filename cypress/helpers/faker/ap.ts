import { faker } from "@faker-js/faker";

export class AgentPortal {
  agentDoctor() {
    let data = {
      name: {
        type: "input",
        value: faker.person.fullName(),
      },

      qualification: {
        type: "input",
        value: "Phd.",
      },
      specialization: {
        type: "input",
        value: "Specialization",
      },
      nmc: {
        type: "input",
        value: "78907",
      },
      nhpc: {
        type: "input",
        value: "26744",
      },
    };

    return data;
  }
}
