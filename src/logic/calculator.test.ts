import { calculateDeliveryPrice } from "./calculator";

describe("calculator", () => {
  describe("wrong data", () => {
    //all numerical data is 0
    it("wrong all data", () => {
      expect(
        calculateDeliveryPrice({
          cartValue: 0,
          distanceMeters: 0,
          itemsAmount: 0,
          time: new Date(),
        })
      ).toStrictEqual(null);
    });

    //incorrect distance test only
    it("separate wrong values", () => {
      expect(
        calculateDeliveryPrice({
          cartValue: 10,
          distanceMeters: 0,
          itemsAmount: 10,
          time: new Date(),
        })
      ).toStrictEqual(null);
      //incorrect product amount only
      expect(
        calculateDeliveryPrice({
          cartValue: 10,
          distanceMeters: 10,
          itemsAmount: 0,
          time: new Date(),
        })
      ).toStrictEqual(null);
      //incorrect cart value only
      expect(
        calculateDeliveryPrice({
          cartValue: -10,
          distanceMeters: 10,
          itemsAmount: 2,
          time: new Date(),
        })
      ).toStrictEqual(null);
    });
  });

  //distance calculation
  describe("distance calculation", () => {
    it("distance below and over 1000", () => {
      expect(
        calculateDeliveryPrice({
          cartValue: 15,
          distanceMeters: 1000,
          itemsAmount: 2,
          time: new Date("2022-03-02T00:02:02.000Z"),
        })
      ).toStrictEqual(2);
      expect(
        calculateDeliveryPrice({
          cartValue: 15,
          distanceMeters: 1001,
          itemsAmount: 2,
          time: new Date("2022-03-02T00:02:02.000Z"),
        })
      ).toStrictEqual(3);
      expect(
        calculateDeliveryPrice({
          cartValue: 15,
          distanceMeters: 1499,
          itemsAmount: 2,
          time: new Date("2022-03-02T00:02:02.000Z"),
        })
      ).toStrictEqual(3);
      expect(
        calculateDeliveryPrice({
          cartValue: 15,
          distanceMeters: 1501,
          itemsAmount: 2,
          time: new Date("2022-03-02T00:02:02.000Z"),
        })
      ).toStrictEqual(4);
      expect(
        calculateDeliveryPrice({
          cartValue: 15,
          distanceMeters: 6000,
          itemsAmount: 2,
          time: new Date("2022-03-02T00:02:02.000Z"),
        })
      ).toStrictEqual(12);
      expect(
        calculateDeliveryPrice({
          cartValue: 15,
          distanceMeters: 9000,
          itemsAmount: 2,
          time: new Date("2022-03-02T00:02:02.000Z"),
        })
      ).toStrictEqual(15);
    });
  });
});

describe("items amount", () => {
  it("amount less than 5", () => {
    expect(
      calculateDeliveryPrice({
        cartValue: 15,
        distanceMeters: 1000,
        itemsAmount: 2,
        time: new Date("2022-03-02T00:02:02.000Z"),
      })
    ).toStrictEqual(2);
  });
  it("amount more than 5", () => {
    expect(
      calculateDeliveryPrice({
        cartValue: 15,
        distanceMeters: 1000,
        itemsAmount: 5,
        time: new Date("2022-03-02T00:02:02.000Z"),
      })
    ).toStrictEqual(2.5);
  });
  it("amount more than 5 less than 12", () => {
    expect(
      calculateDeliveryPrice({
        cartValue: 15,
        distanceMeters: 1000,
        itemsAmount: 6,
        time: new Date("2022-03-02T00:02:02.000Z"),
      })
    ).toStrictEqual(3);
  });
  it("amount more than 12", () => {
    expect(
      calculateDeliveryPrice({
        cartValue: 15,
        distanceMeters: 1000,
        itemsAmount: 13,
        time: new Date("2022-03-02T00:02:02.000Z"),
      })
    ).toStrictEqual(7.7);
    expect(
      calculateDeliveryPrice({
        cartValue: 15,
        distanceMeters: 1000,
        itemsAmount: 30,
        time: new Date("2022-03-02T00:02:02.000Z"),
      })
    ).toStrictEqual(15);
  });
});

describe("15 eur is maximum fee", () => {
  it("returns 15", () => {
    expect(
      calculateDeliveryPrice({
        cartValue: 20,
        distanceMeters: 9000,
        itemsAmount: 4,
        time: new Date("2022-03-02T00:02:02.000Z"),
      })
    ).toStrictEqual(15);
  });
});

describe("maximum delivery is 15", () => {
  it("total delivery sum calculated less than 15", () => {
    expect(
      calculateDeliveryPrice({
        cartValue: 15,
        distanceMeters: 1000,
        itemsAmount: 2,
        time: new Date("2022-03-02T00:02:02.000Z"),
      })
    ).toStrictEqual(2);
  });
  it("total sum calculated more than 15 due to distance", () => {
    expect(
      calculateDeliveryPrice({
        cartValue: 15,
        distanceMeters: 20000,
        itemsAmount: 2,
        time: new Date("2022-03-02T00:02:02.000Z"),
      })
    ).toStrictEqual(15);
  });
  it("total sum calculated more than 15 due to item amount", () => {
    expect(
      calculateDeliveryPrice({
        cartValue: 15,
        distanceMeters: 20000,
        itemsAmount: 40,
        time: new Date("2022-03-02T00:02:02.000Z"),
      })
    ).toStrictEqual(15);
  });
});

describe("free delivery", () => {
  it("cart value > 100 means free delivery", () => {
    expect(
      calculateDeliveryPrice({
        cartValue: 99,
        distanceMeters: 1000,
        itemsAmount: 2,
        time: new Date("2022-03-02T00:02:02.000Z"),
      })
    ).not.toBe(0);
    expect(
      calculateDeliveryPrice({
        cartValue: 101,
        distanceMeters: 1000,
        itemsAmount: 2,
        time: new Date("2022-03-02T00:02:02.000Z"),
      })
    ).toStrictEqual(0);
  });
});

describe("friday surcharge", () => {
  it("not friday not peak hours", () => {
    expect(
      calculateDeliveryPrice({
        cartValue: 15,
        distanceMeters: 1000,
        itemsAmount: 2,
        time: new Date("2023-01-28T11:02:02.000Z"),
      })
    ).toStrictEqual(2);
  });
  it("not friday peak hours", () => {
    expect(
      calculateDeliveryPrice({
        cartValue: 15,
        distanceMeters: 1000,
        itemsAmount: 2,
        time: new Date("2023-01-28T17:02:02.000Z"),
      })
    ).toStrictEqual(2);
  });
  it("friday not peak hours", () => {
    expect(
      calculateDeliveryPrice({
        cartValue: 15,
        distanceMeters: 1000,
        itemsAmount: 2,
        time: new Date("2023-01-27T10:02:02.000Z"),
      })
    ).toStrictEqual(2);
  });
  it("friday peak hours", () => {
    expect(
      calculateDeliveryPrice({
        cartValue: 15,
        distanceMeters: 1000,
        itemsAmount: 2,
        time: new Date("2023-01-27T17:02:02.000Z"),
      })
    ).toStrictEqual(2.4);
  });
});

export {};
