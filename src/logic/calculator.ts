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
  function calculateItems(): number {
    let result;
    //TODO: check if > 0
    if (a.itemsAmount >= 5 && a.itemsAmount <= 12) {
      result = (a.itemsAmount - 4) * 0.5;
    } else if (a.itemsAmount > 12) {
      result = (a.itemsAmount - 4) * 0.5 + 1.2;
    } else {
      result = 0;
    }

    return result;
  }

  let items_amount: number = calculateItems();

  //calculate Friday surcharge
  //(3pm to 7pm UTC on Fridays multiplies total sum * 1.2)

  function calculateFridaySurcharge(): number {
    let result = 0;
    if (
      a.time.getUTCDay() == 5 &&
      a.time.getUTCHours() > 15 &&
      a.time.getUTCHours() < 19
    ) {
      result *= 1.2;
    } else {
      result *= 1;
    }
    return result;
  }

  //free delivery for more than 100 eur order
  if (a.cartValue > 100) {
    return 0;
  } else {
    if (distance) {
      let result = total_sum + distance + items_amount;
      // max delivery 15
      if (result > 15) {
        return 15;
      } else {
        //friday
        if (
          a.time.getUTCDay() == 5 &&
          a.time.getUTCHours() >= 15 &&
          a.time.getUTCHours() < 19
        ) {
          result *= 1.2;
        } else {
          result *= 1;
        }
        return result;
      }
    } else {
      return null;
    }
  }
}
