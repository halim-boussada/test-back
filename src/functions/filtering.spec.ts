import filterByString from "./filtering";

describe("testing filter function", function () {
  let countries1 = require("../../data");
  let countries2 = require("../../data");

  it("filterByString with 'ry' query should output same result length", function () {
    console.log(countries1);

    const output = filterByString(countries1, "ry");
    expect(output.length).toEqual(2);
    console.log(output.length);
  });

  it("filterByString with 'xyxx' query should output same result length", function () {
    const output = filterByString(countries2, "xx");
    expect(output.length).toEqual(0);
  });
});
