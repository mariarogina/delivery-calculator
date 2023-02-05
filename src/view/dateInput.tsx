import React from "react";
import { InputLabel, Input, FormControl, TextField } from "@mui/material";
import DateTimePicker from "react-datetime-picker";
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
  timeValue: Date;
  onChange: (value: Date) => void;
  // inputChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <MyDiv>
      <FormControl>
        <MyLabel>Date</MyLabel>
        <DateTimePicker onChange={props.onChange} value={props.timeValue} />
      </FormControl>
    </MyDiv>
  );
};
