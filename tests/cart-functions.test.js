const { calculateChange, isSufficientPayment, calculateTotal, addItem, removeItem, } = require("../src/js/cart-functions");

describe("calculateChange", () => {
  it("total 5, pays 6, change 1", () => {
    expect(calculateChange(5, 6)).toBe(1);
  });

  it("total 12.30, pays 13.03, change 0.73", () => {
    expect(calculateChange(12.3, 13.03)).toBeCloseTo(0.73);
  });

  it("total 20.01, pays 20, change 0.01", () => {
    expect(calculateChange(20.01, 20)).toBeCloseTo(-0.01);
  });
});

describe("isSufficientPayment", () => {
  it("total 5, pays 6, true", () => {
    expect(isSufficientPayment(5, 6)).toBe(true);
  });

  it("total 10, pays 7, false", () => {
    expect(isSufficientPayment(10, 7)).toBe(false);
  });

  it("total 3, pays 3, true", () => {
    expect(isSufficientPayment(3, 3)).toBe(true);
  });
});

describe("calculateTotal", () => {
  it("1 item, 4.99, total 4.99", () => {
    let items = [
      {
        name: "Peanut Butter",
        price: 4.99,
      },
    ];
    expect(calculateTotal(items)).toBeCloseTo(4.99);
  });

  it("3 items, 4.99 + 12.99 + 0.03, total 16.52", () => {
    let items = [
      {
        name: "Bread",
        price: 3.50,
      },

      {
        name: "Eggs",
        price: 12.99,
      },

      {
        name: "Bag",
        price: 0.03,
      },
    ];
    expect(calculateTotal(items)).toBeCloseTo(16.52);
  });

  it("0 items, total 0.00", () => {
    let items = [];
    expect(calculateTotal(items)).toBeCloseTo(0);
  });

  it("2 items, 3.50 + 4.00, total 7.50", () => {
    let items = [
      {
        name: "Bread",
        price: 3.50,
      },

      {
        name: "Apples",
        price: 4.00,
      }
    ];
    expect(calculateTotal(items)).toBeCloseTo(7.50);
  });
});

describe("addItem", () => {
  it("adding 1 item to empty array", () => {
    let items = [];
    addItem(items, "Beans", 3);
    expect(items).toStrictEqual([
      {
        name: "Beans",
        price: 3,
      },
    ]);
  });

  it("adding 2nd item to array of 1", () => {
    let items = [
      {
        name: "Beans",
        price: 3,
      },
    ];
    addItem(items, "Sugar", 2);
    expect(items).toStrictEqual([
      {
        name: "Beans",
        price: 3,
      },

      {
        name: "Sugar",
        price: 2,
      },
    ]);
  });

  it("adding 4th item to array of 3", () => {
    let items = [
      {
        name: "Beans",
        price: 3,
      },

      {
        name: "Sugar",
        price: 2,
      },

      {
        name: "Beer",
        price: 6,
      },
    ];
    addItem(items, "Bread", 3);
    expect(items).toStrictEqual([
      {
        name: "Beans",
        price: 3,
      },

      {
        name: "Sugar",
        price: 2,
      },

      {
        name: "Beer",
        price: 6,
      },

      {
        name: "Bread",
        price: 3,
      },
    ]);
  });
});

describe("removeItem", () => {
  it("remove first item from cart of 3", () => {
    let items = [
      {
        name: "Beans",
        price: 3,
      },

      {
        name: "Sugar",
        price: 2,
      },

      {
        name: "Beer",
        price: 6,
      },
    ];
    removeItem(items, 0);
    expect(items).toStrictEqual([
      {
        name: "Sugar",
        price: 2,
      },

      {
        name: "Beer",
        price: 6,
      },
    ]);
  });

  it("remove last item from cart of 3", () => {
    let items = [
      {
        name: "Beans",
        price: 3,
      },

      {
        name: "Sugar",
        price: 2,
      },

      {
        name: "Beer",
        price: 6,
      },
    ];
    removeItem(items, 2);
    expect(items).toStrictEqual([
      {
        name: "Beans",
        price: 3,
      },

      {
        name: "Sugar",
        price: 2,
      },
    ]);
  });

  it("remove middle item from cart of 3", () => {
    let items = [
      {
        name: "Beans",
        price: 3,
      },

      {
        name: "Sugar",
        price: 2,
      },

      {
        name: "Beer",
        price: 6,
      },
    ];
    removeItem(items, 1);
    expect(items).toStrictEqual([
      {
        name: "Beans",
        price: 3,
      },

      {
        name: "Beer",
        price: 6,
      },
    ]);
  });

  it("remove only item from cart", () => {
    let items = [
      {
        name: "Beans",
        price: 3,
      },
    ];
    removeItem(items, 0);
    expect(items).toStrictEqual([]);
  });
});
