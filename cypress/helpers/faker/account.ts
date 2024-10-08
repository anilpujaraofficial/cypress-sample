import { faker } from "@faker-js/faker";

export default class Account {
  // fiscal year data
  fiscalYear() {
    let data = {
      year: {
        type: "input",
        value: generateFiscalYear(),
      },
      current_year: {
        type: "switch",
        value: false,
      },
      is_locked: {
        type: "switch",
        value: true,
      },
    };
    return data;
  }

  // customer data
  customer() {
    let data = {
      code: {
        type: "autogenerated",
      },
      name: {
        type: "input",
        value: faker.person.fullName(),
      },
      billing_name: {
        type: "input",
        value: faker.person.firstName(),
      },
      address: {
        type: "input",
        value: faker.location.streetAddress(),
      },
      city: {
        type: "input",
        value: faker.location.city(),
      },
      email: {
        type: "input",
        value: faker.internet.email(),
      },
      mobile_no: {
        type: "input",
        value: faker.phone.number("98########"),
      },
      country: {
        type: "dropdown",
        value: "Nepal",
      },
      state: {
        type: "dropdown",
        value: "BAGMATI",
      },
      district: {
        type: "dropdown",
        value: "Kathmandu",
      },
      municipality: {
        type: "dropdown",
        value: "TOKHA MUNICIPALITY",
      },
      credit_limit: {
        type: "input",
        value: 5000.0,
      },
      pan_number: {
        type: "input",
        value: faker.phone.number("#########"),
      },
      contact_person: {
        type: "input",
        value: faker.person.fullName(),
      },
      contact_person_mobile_no: {
        type: "input",
        value: faker.phone.number("98########"),
      },
    };
    return data;
  }
}

export const generateFiscalYear = () => {
  const num1 = `20${faker.number.int({ min: 10, max: 99 })}`;
  const num2 = parseInt(num1) + 1;
  return `${num1}/${num2}`;
};
