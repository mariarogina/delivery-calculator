import { calculatorInput } from "./definitions";

export function calculateDeliveryPrice(a: calculatorInput): number | null {
  if (
    a.distanceMeters <= 0 ||
    a.cartValue < 0 ||
    a.itemsAmount == 0 
  ) {
    return null;
  } else if (a.distanceMeters <= 1000) {
    return 2;
  } else {
    return 12345
  }

}
