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
  padding: 10,
  margin: 10,
  borderRadius: 4,
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

  const onSubmitHandler = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log(calculatorState);
    //Form submission happens here
    //calculate the result
    console.log("Goo");
    const price = calculateDeliveryPrice(calculatorState);
    setResult(price);
  };

  //TODO: validation in input(float, neg)

  //TODO: FormControl > <div> with flex-display:column etc
  return (
    <CalculatorWrapper>
      <MyDiv>Delivery calculator</MyDiv>
      <FormControl>
        <CartInput
          numberValue={calculatorState.cartValue}
          valueName="cartValue"
          inputChangeHandler={inputChangeHandler}
        />
        <DistanceInput
          numberValue={calculatorState.distanceMeters}
          valueName="distanceMeters"
          inputChangeHandler={inputChangeHandler}
        />
        <ItemsInput
          numberValue={calculatorState.itemsAmount}
          valueName="itemsAmount"
          inputChangeHandler={inputChangeHandler}
        />
        <DateInput
          timeValue={calculatorState.time}
          valueName="time"
          inputChangeHandler={inputChangeHandler}
        />
        <SubmitButton onSubmitHandler={onSubmitHandler} />
        <ResultText result={result} />
      </FormControl>
    </CalculatorWrapper>
  );
};
