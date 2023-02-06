import React from "react";
import { useState } from "react";
import { FormControl } from "@mui/material";
import { DateInput } from "./dateInput";
import { ResultText } from "./resultText";
import { SubmitButton } from "./submitButton";
import { CartInput } from "./number_inputs/cartInput";
import { DistanceInput } from "./number_inputs/distanceInput";
import { ItemsInput } from "./number_inputs/itemsInput";
import { CalculatorInput } from "../logic/definitions";
import { calculateDeliveryPrice } from "../logic/calculator";
import { styled } from "@mui/system";

const CalculatorWrapper = styled("div")({
  color: "black",
  backgroundColor: "aliceblue",
  padding: 30,
  margin: 10,
  borderRadius: 6,
  fontFamily: "Roboto",
  fontWeight: 800,
});

const MyTitle = styled("div")({
  fontSize: "26px",
  margin: 10,
  marginLeft: 20,
});

export const CalculatorForm = () => {
  const formData: CalculatorInput = {
    cartValue: 0,
    distanceMeters: 0,
    itemsAmount: 1,
    time: new Date(),
  };

  const [calculatorState, setCalculatorState] =
    useState<CalculatorInput>(formData);

  const [result, setResult] = useState<number | null>(null);

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCalculatorState({ ...calculatorState, [name]: value });
  };

  const validateCart = () => {
    if (calculatorState.cartValue <= 0) {
      alert("Cart values should be > 0");
    }
  };

  const validateDistance = () => {
    if (calculatorState.distanceMeters <= 0) {
      alert("Distance should be > 0");
    }
  };

  const validateDate = () => {
    if (calculatorState.time.getTime() <= new Date().getTime()) {
      alert("Date should be in the future");
    }
  };
  const onSubmitHandler = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log(calculatorState);
    //calculate the result
    console.log("Goo");
    // validateDate();
    const price: number | null = calculateDeliveryPrice(calculatorState);
    if (
      calculatorState.cartValue <= 0 ||
      calculatorState.distanceMeters <= 0 ||
      calculatorState.itemsAmount <= 0
    ) {
      alert("check your input fields");
      setResult(0);
    } else {
      if (price !== null && price > 0) {
        setResult(price);
        setCalculatorState(formData);
      } else {
        setResult(0);
      }
    }
  };

  //TODO: FormControl > <div> with flex-display:column etc
  return (
    <CalculatorWrapper>
      <MyTitle>Delivery calculator</MyTitle>
      <FormControl>
        <CartInput
          numberValue={calculatorState.cartValue}
          valueName="cartValue"
          inputChangeHandler={inputChangeHandler}
          validateCart={validateCart}
        />
        <DistanceInput
          numberValue={calculatorState.distanceMeters}
          valueName="distanceMeters"
          inputChangeHandler={inputChangeHandler}
          validateDistance={validateDistance}
        />
        <ItemsInput
          numberValue={calculatorState.itemsAmount}
          valueName="itemsAmount"
          inputChangeHandler={inputChangeHandler}
        />
        <DateInput
          timeValue={calculatorState.time}
          validateDate={validateDate}
          onChange={(newDate) =>
            setCalculatorState({
              ...calculatorState,
              time: newDate,
            })
          }
        />
        <SubmitButton onSubmitHandler={onSubmitHandler} />

        <ResultText result={result} />
      </FormControl>
    </CalculatorWrapper>
  );
};
