"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const counting = (arr) => {
    return arr.map((country) => {
        country.name = `${country.name} [${country.people.length}]`;
        country.people.forEach((people) => {
            people.name = `${people.name} [${people.animals.length}]`;
        });
        return country;
    });
};
exports.default = counting;
