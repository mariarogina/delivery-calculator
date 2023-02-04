import React from "react";
import { styled } from "@mui/system";

const MyButton = styled("button")({
  color: "black",
  backgroundColor: "aliceblue",
  padding: 8,
  borderRadius: 4,
  fontWeight: "600",
});

const MyDiv = styled("div")({
  color: "black",
  backgroundColor: "aliceblue",
  margin: 10,
  marginLeft: 20,
});

export const SubmitButton = (props: {
  onSubmitHandler: (event: React.FormEvent<HTMLFormElement>) => void;
}) => {
  return (
    <MyDiv>
      <MyButton> Submit </MyButton>
    </MyDiv>
  );
};
