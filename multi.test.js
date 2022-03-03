const { multi } = require("./multi");

describe("Testing multi function", () => {
  it("Should exists", () => {
    expect(typeof multi).toBe("function");
  });
  it("Should return 6 for 2, 3", () => {
    expect(multi(2, 3)).toBe(6);
  });
  it("Should return 4 for 2, 2", () => {
    expect(multi(2, 2)).toBe(4);
  });
  it("Should not return 4 for 2, 3", () => {
    expect(multi(2, 3)).not.toBe(4);
  });
});
