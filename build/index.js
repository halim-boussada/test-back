"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions_1 = require("./functions");
let countries = require("../data");
const filter = process.argv.find((arg) => arg.includes("--filter="));
const count = process.argv.find((arg) => arg.includes("--count"));
if (filter) {
    // goal 1 :
    (0, functions_1.filterByString)(countries, filter.split("=")[1]);
}
if (count) {
    // goal 2 :
    (0, functions_1.counting)(countries);
}
console.log(JSON.stringify(countries));
