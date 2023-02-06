import React from "react";
import { InputLabel, Input, FormControl } from "@mui/material";
import { styled } from "@mui/system";

const MyInput = styled("input")({
  color: "black",
  backgroundColor: "aliceblue",
  padding: 8,
  margin: 10,
  borderRadius: 4,
  borderColor: "black",
});

const MyLabel = styled("p")({
  color: "black",
  backgroundColor: "aliceblue",
  margin: "10px",
  marginBottom: 0,
  fontWeight: "600",
});

export const DistanceInput = (props: {
  numberValue: number;
  valueName: string;
  inputChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  validateDistance: () => void;
}) => {
  return (
    <FormControl sx={{ m: 1 }}>
      <MyLabel>Distance</MyLabel>
      <MyInput
        id="number"
        type="number"
        autoComplete="123"
        value={props.numberValue}
        name={props.valueName}
        onChange={props.inputChangeHandler}
        onBlur={props.validateDistance}
      />
    </FormControl>
  );
};
