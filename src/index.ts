import { counting, filterByString } from "./functions";

let countries = require("../data");

const filter = process.argv.find((arg) => arg.includes("--filter="));
const count = process.argv.find((arg) => arg.includes("--count"));

if (filter) {
  // goal 1 :
  filterByString(countries, filter.split("=")[1]);
}

if (count) {
  // goal 2 :
  counting(countries);
}

console.log(JSON.stringify(countries));
