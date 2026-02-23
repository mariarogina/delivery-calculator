import React from "react";
import { FormControl } from "@mui/material";
import DateTimePicker from "react-datetime-picker";
import { styled } from "@mui/system";

const MyLabel = styled("p")({
  color: "black",
  backgroundColor: "aliceblue",
  margin: 10,
  marginBottom: 0,
  fontWeight: 400,
});

const MyDiv = styled("div")({
  color: "black",
  backgroundColor: "aliceblue",
  "& .react-datetime-picker": {
    width: "auto",
    margin: 0,
    display: "block",
    padding: 0,
  },
  "& .react-datetime-picker__wrapper": {
    width: 240,
    margin: 10,
    boxSizing: "border-box",
    borderColor: "black",
    borderRadius: 4,
    backgroundColor: "aliceblue",
    minHeight: 40,
    padding: "0 6px",
  },
  "& .react-datetime-picker__inputGroup": {
    fontSize: 12,
  },
});

export const DateInput = (props: {
  timeValue: Date;
  onChange: (value: Date) => void;
  onFocus: () => void;
}) => {
  return (
    <MyDiv>
      <FormControl sx={{ m: 1 }}>
        <MyLabel>Date</MyLabel>
        <DateTimePicker
          onCalendarOpen={props.onFocus}
          onChange={props.onChange}
          value={props.timeValue}
        />
      </FormControl>
    </MyDiv>
  );
};
