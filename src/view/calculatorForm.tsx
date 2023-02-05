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
import { errorInterface } from "./errorInterface";
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

  const errorData: errorInterface = {
    cartError: "",
    distanceError: "",
    itemsError: "",
    timeError: "",
  };

  const [errorState, setErrorState] = useState<errorInterface>(errorData);

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCalculatorState({ ...calculatorState, [name]: value });
  };

  const renewCartValidation = () => {
    validateCalculator(calculatorState);
  };

  const validateCalculator = (calcState: CalculatorInput) => {
    setErrorState(errorData);
    if (calcState.cartValue <= 0) {
      setErrorState((oldErrorState) => ({
        ...oldErrorState,
        cartError: "cart error",
      }));
    }
    // if (!Number.isInteger(calcState.itemsAmount)) {
    //   setErrorState((oldErrorState) => ({
    //     ...oldErrorState,
    //     itemsError: "items error",
    //   }));
    // }
  };
  const onSubmitHandler = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log(calculatorState);
    //Form submission happens here
    //calculate the result
    console.log("Goo");
    validateCalculator(calculatorState);
    const price = calculateDeliveryPrice(calculatorState);
    setResult(price);
  };

  return (
    <CalculatorWrapper>
      <MyTitle>Delivery calculator</MyTitle>
      <FormControl>
        <CartInput
          numberValue={calculatorState.cartValue}
          valueName="cartValue"
          inputChangeHandler={inputChangeHandler}
          renewCartValidation={renewCartValidation}
        />
        <ErrorText message={errorState.cartError} />
        <DistanceInput
          numberValue={calculatorState.distanceMeters}
          valueName="distanceMeters"
          inputChangeHandler={inputChangeHandler}
          renewCartValidation={renewCartValidation}
        />
        <ItemsInput
          numberValue={calculatorState.itemsAmount}
          valueName="itemsAmount"
          inputChangeHandler={inputChangeHandler}
          renewCartValidation={renewCartValidation}
        />
        <ErrorText message={errorState.itemsError} />
        <DateInput
          timeValue={calculatorState.time}
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
