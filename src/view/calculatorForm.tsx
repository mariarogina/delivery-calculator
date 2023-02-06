import React from "react";
import { useState, useEffect } from "react";
import { FormControl } from "@mui/material";
import { DateInput } from "./dateInput";
import { ResultText } from "./resultText";
import { SubmitButton } from "./submitButton";
import { CartInput } from "./number_inputs/cartInput";
import { DistanceInput } from "./number_inputs/distanceInput";
import { ItemsInput } from "./number_inputs/itemsInput";
import { CalculatorInput } from "../logic/definitions";
import { calculateDeliveryPrice } from "../logic/calculator";
import { ErrorText } from "./errorText";
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

const MyDiv = styled("div")({
  color: "black",
  backgroundColor: "aliceblue",
  margin: 10,
  marginLeft: 20,
  fontWeight: "600",
  fontSize: "20px",
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
    itemsAmount: 0,
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

  const validateItemsAmount = () => {
    if (
      !Number.isInteger(calculatorState.itemsAmount) ||
      calculatorState.itemsAmount <= 0
    ) {
      alert("Items amount should be a positive integer");
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
    validateDate();
    const price = calculateDeliveryPrice(calculatorState);
    setResult(price);
    setCalculatorState(formData);
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
          validateItemsAmount={validateItemsAmount}
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
