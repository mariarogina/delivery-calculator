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

const MyDiv = styled("div")({
  margin: 10,
  color: "red",
});
export const CalculatorForm = () => {
  const formData: CalculatorInput = {
    cartValue: 0,
    distanceMeters: 1,
    itemsAmount: 1,
    time: new Date(),
  };

  const [calculatorState, setCalculatorState] =
    useState<CalculatorInput>(formData);

  const [result, setResult] = useState<number | null>(null);
  const [dateError, setDateError] = useState<boolean>(false);

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCalculatorState({ ...calculatorState, [name]: value });
  };

  const validateItemsAmount = () => {
    if (!Number(calculatorState.itemsAmount)) {
      alert("Items amount should be an integer");
    }
  };

  const validateDate = () => {
    if (calculatorState.time.getTime() <= new Date().getTime()) {
      setDateError(true);
      return false;
    } else {
      setDateError(false);
      return true;
    }
  };
  const onSubmitHandler = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log(calculatorState);
    //calculate the result
    console.log("Goo");
    validateDate();
    const price: number | null = calculateDeliveryPrice(calculatorState);
    if (price !== null && price > 0) {
      const submitDate = validateDate();
      setResult(price);
      submitDate && setCalculatorState(formData);
    } else {
      setResult(0);
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
          validateItemsAmount={validateItemsAmount}
        />
        <DateInput
          timeValue={calculatorState.time}
          onFocus={() => {
            setDateError(false);
          }}
          onChange={(newDate) =>
            setCalculatorState({
              ...calculatorState,
              time: newDate,
            })
          }
        />
        {dateError && <MyDiv>Date should be in the future</MyDiv>}
        <SubmitButton onSubmitHandler={onSubmitHandler} />

        <ResultText result={result} />
      </FormControl>
    </CalculatorWrapper>
  );
};
