import React from "react";
import { styled } from "@mui/system";

const MyButton = styled("button")({
  color: "white",
  backgroundColor: "#009DE0",
  padding: 10,
  borderRadius: 4,
  fontFamily: "Roboto",
  fontWeight: "bold",
  fontSize: "22px",
  border: "none",
});

const MyDiv = styled("div")({
  color: "black",
  backgroundColor: "aliceblue",
  margin: 10,
  marginLeft: 20,
});

export const SubmitButton = (props: {
  onSubmitHandler: (event: React.FormEvent<HTMLButtonElement>) => void;
}) => {
  return (
    <MyDiv>
      <MyButton onClick={props.onSubmitHandler}> Submit </MyButton>
    </MyDiv>
  );
};
