import { CalculatorInput } from "./definitions";

export function calculateDeliveryPrice(a: CalculatorInput): number | null {
  let total_sum: number = 0;

  //calculate distance addition
  function calculateDistance(): number | null {
    if (a.distanceMeters <= 0 || a.cartValue < 0 || a.itemsAmount == 0) {
      return null;
    } else if (a.distanceMeters <= 1000) {
      return 2;
    } else if (a.distanceMeters > 1000) {
      let result = 2 + Math.ceil((a.distanceMeters - 1000) / 500);
      return result;
    } else {
      return 12345;
    }
  }

  let distance: number | null = calculateDistance();

  //calculate items amount
  function calculateItems(): number | null {
    return 0;
  }

  let items_amount: number | null = calculateItems();

  //calculate Friday rush

  //free delivery for more than 100 eur order
  if (a.cartValue > 100) {
    return 0;
  } else {
    if (distance) {
      let result = total_sum + distance;

      // max delivery 15
      if (result > 15) {
        return 15;
      }
      return result;
    } else {
      return null;
    }
  }
}
