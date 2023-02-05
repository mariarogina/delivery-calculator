import React from "react";
import { styled } from "@mui/system";

const MyInput = styled("input")({
  color: "black",
  backgroundColor: "aliceblue",
  padding: 8,
  margin: 10,
  borderRadius: 4,
  borderColor: "black",
});

export const NumberInput = (props: {
  numberValue: number;
  valueName: string;
  inputChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  renewCartValidation: () => void;
}) => {
  return (
    <div>
      <MyInput
        id="number"
        type="number"
        autoComplete="123"
        value={props.numberValue}
        name={props.valueName}
        onChange={props.inputChangeHandler}
        onBlur={() => {
          props.renewCartValidation();
        }}
      />
    </div>
  );
};
