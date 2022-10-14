import counting from "./counting";

describe("testing counting function", function () {
  let countries1 = require("../../data");
  it("counting with should output same result", function () {
    expect(counting([...countries1])[0].name).toEqual("Uzuzozne [1]");
  });
});
