import React from "react";
import { InputLabel, Input, FormControl } from "@mui/material";
import { NumberInput } from "../numberInput";
import { styled } from "@mui/system";

const MyLabel = styled("p")({
  color: "black",
  backgroundColor: "aliceblue",
  margin: "10px",
  marginBottom: 0,
  fontWeight: "600",
});

export const CartInput = (props: {
  numberValue: number;
  valueName: string;
  inputChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <FormControl sx={{ m: 1 }}>
      <MyLabel>Cart</MyLabel>
      <NumberInput
        numberValue={props.numberValue}
        valueName={props.valueName}
      />
    </FormControl>
  );
};
