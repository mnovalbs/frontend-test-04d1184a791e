import { currencyFormatter } from "../formatter";

describe("currencyFormatter", () => {
  it("returns number with currency format", () => {
    expect(currencyFormatter(1234)).toBe("$1,234");
  });
});
