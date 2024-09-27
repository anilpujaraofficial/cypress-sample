import { faker } from "@faker-js/faker/locale/ne";

let middleName = ["Bahadur", "Kumar"];

let name = {
  fname: faker.person.firstName(),
  mname: middleName[Math.floor(Math.random() * middleName.length)],
  lname: faker.person.lastName(),
  full_name: faker.person.firstName() + faker.person.lastName(),
};

export default name;
