const { formatCurrency, getCoins, } = require("../src/js/money-functions");

describe("formatCurrency", () => {
  it("0 becomes $0.00", () => {
    expect(formatCurrency(0)).toBe("$0.00");
  });

  it("1 becomes $1.00", () => {
    expect(formatCurrency(1)).toBe("$1.00");
  });

  it("1.5 becomes $1.50", () => {
    expect(formatCurrency(1.5)).toBe("$1.50");
  });

  it("0.01 becomes $0.01", () => {
    expect(formatCurrency(0.01)).toBe("$0.01");
  });

  it("527.6789 becomes $527.68", () => {
    expect(formatCurrency(527.6789)).toBe("$527.68");
  });

  it("-1 becomes -$1.00", () => {
    expect(formatCurrency(-1)).toBe("-$1.00");
  });

  it("-37 becomes -$37.00", () => {
    expect(formatCurrency(-37)).toBe("-$37.00");
  });

  it("35678243252 becomes $35678243252.00", () => {
    expect(formatCurrency(35678243252)).toBe("$35678243252.00");
  });
});

describe("getCoins", () => {
  it("32 cents in coins", () => {
    expect(getCoins(32)).toStrictEqual({
      quarters: 1,
      dimes: 0,
      nickels: 1,
      pennies: 2
  });
  });

  it("10 cents in coins", () => {
    expect(getCoins(10)).toStrictEqual({
      quarters: 0,
      dimes: 1,
      nickels: 0,
      pennies: 0
  });
  });

  it("27 cents in coins", () => {
    expect(getCoins(27)).toStrictEqual({
      quarters: 1,
      dimes: 0,
      nickels: 0,
      pennies: 2
  });
  });

  it("68 cents in coins", () => {
    expect(getCoins(68)).toStrictEqual({
      quarters: 2,
      dimes: 1,
      nickels: 1,
      pennies: 3
  });
  });
});