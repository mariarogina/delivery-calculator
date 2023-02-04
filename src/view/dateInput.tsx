import React from "react";
import { InputLabel, Input, FormControl } from "@mui/material";
import { styled } from "@mui/system";

const MyLabel = styled("p")({
  color: "black",
  backgroundColor: "aliceblue",
  margin: 10,
  marginBottom: 0,
  fontWeight: "600",
});

const MyDiv = styled("div")({
  color: "black",
  backgroundColor: "aliceblue",
  margin: 10,
});

const MyInput = styled("input")({
  color: "black",
  backgroundColor: "aliceblue",
  padding: 8,
  margin: 10,
  borderRadius: 4,
  borderColor: "black",
});

export const DateInput = (props: {
  valueName: string;
  inputChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <MyDiv>
      <FormControl>
        <MyLabel>Date</MyLabel>
        <MyInput
          id="number"
          type="date"
          name={props.valueName}
          autoComplete="123"
          value="null"
        ></MyInput>
      </FormControl>
    </MyDiv>
  );
};
