import { faker } from "@faker-js/faker";

const randomName = faker.name.fullName(); // Rowan Nikolaus
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz

console.log(randomName);
console.log(randomEmail);
