import { calculateDeliveryPrice } from "./calculator";

describe("calculator", () => {
  it("wrong data", () => {
    expect(
      calculateDeliveryPrice({
        cartValue: 0,
        distanceMeters: 0,
        itemsAmount: 0,
        time: new Date(),
      })
    ).toStrictEqual(null);
  });
});

export {};
