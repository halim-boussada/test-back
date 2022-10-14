"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const counting_1 = __importDefault(require("./counting"));
describe("testing counting function", function () {
    let countries1 = require("../../data");
    it("counting with should output same result", function () {
        expect((0, counting_1.default)([...countries1])[0].name).toEqual("Uzuzozne [1]");
    });
});
