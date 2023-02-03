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

  it("cart value", () => {
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
})

// describe("max fee", () => {
//   it("cart value", () => {
//     expect(
//       calculateDeliveryPrice({
//         cartValue: 15,
//         distanceMeters: 1000,
//         itemsAmount: 2,
//         time: new Date("2022-03-02T00:02:02.000Z"),
//       })
//     ).toStrictEqual(2);
//   });
// })

describe("free delivery", () => {
  it("cart value > 100 means free delivery", () => {
        expect(
          calculateDeliveryPrice({
            cartValue: 101,
            distanceMeters: 1000,
            itemsAmount: 2,
            time: new Date("2022-03-02T00:02:02.000Z"),
          })
        ).toStrictEqual(0);
      });
})

// describe("friday", () => {
  // it("cart value", () => {
    //     expect(
    //       calculateDeliveryPrice({
    //         cartValue: 15,
    //         distanceMeters: 1000,
    //         itemsAmount: 2,
    //         time: new Date("2022-03-02T00:02:02.000Z"),
    //       })
    //     ).toStrictEqual(2);
    //   });
// })

export {};
