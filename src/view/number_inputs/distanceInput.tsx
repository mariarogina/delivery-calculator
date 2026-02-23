import React from "react";
import { FormControl } from "@mui/material";
import { styled } from "@mui/system";

const MyInput = styled("input")({
  color: "black",
  backgroundColor: "aliceblue",
  width: 240,
  boxSizing: "border-box",
  padding: 8,
  margin: 10,
  borderRadius: 4,
  borderColor: "black",
  appearance: "textfield",
  "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
    WebkitAppearance: "none",
    margin: 0,
  },
});

const MyLabel = styled("p")({
  color: "black",
  backgroundColor: "aliceblue",
  margin: "10px",
  marginBottom: 0,
  fontWeight: 400,
});

export const DistanceInput = (props: {
  numberValue: number;
  valueName: string;
  inputChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const onFocusHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    if (Number(event.target.value) === 1) {
      event.target.value = "";
      props.inputChangeHandler(
        event as unknown as React.ChangeEvent<HTMLInputElement>
      );
    }
  };

  return (
    <FormControl sx={{ m: 1 }}>
      <MyLabel>Delivery distance (meters)</MyLabel>
      <MyInput
        id="distance-meters"
        type="number"
        autoComplete="off"
        placeholder="e.g. 1501"
        title="Enter the distance from your location to the delivery destination in meters."
        value={props.numberValue}
        min="1"
        name={props.valueName}
        onFocus={onFocusHandler}
        onChange={props.inputChangeHandler}
      />
    </FormControl>
  );
};
