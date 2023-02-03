import { calculateDeliveryPrice } from "./calculator";

describe("calculator", () => {
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
    expect(
      calculateDeliveryPrice({
        cartValue: 10,
        distanceMeters: 10,
        itemsAmount: 0,
        time: new Date(),
      })
    ).toStrictEqual(null);
    expect(
      calculateDeliveryPrice({
        cartValue: -10,
        distanceMeters: 10,
        itemsAmount: 2,
        time: new Date(),
      })
    ).toStrictEqual(null);
  });

 

  it("cart value", () => {
    expect(
      calculateDeliveryPrice({
        cartValue: 15,
        distanceMeters: 1000,
        itemsAmount: 2,
        time: new Date("2022-03-02T00:02:02.000Z"),
      })
    ).toStrictEqual(2);
  });
});

export {};
