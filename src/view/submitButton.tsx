import React from "react";
import { styled } from "@mui/system";

const MyButton = styled("button")({
  color: "white",
  backgroundColor: "#009DE0",
  padding: 10,
  borderRadius: 4,
  fontFamily: "Arial, sans-serif",
  fontWeight: 400,
  fontSize: "12px",
  border: "none",
  width: 240,
  marginBottom: 10,
});
const ResetButton = styled("button")({
  color: "#009DE0",
  backgroundColor: "white",
  padding: 10,
  borderRadius: 4,
  fontFamily: "Arial, sans-serif",
  fontWeight: 400,
  fontSize: "12px",
  border: "2px solid #009DE0",
  width: 240,
});

const MyDiv = styled("div")({
  color: "black",
  backgroundColor: "aliceblue",
  margin: 10,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const SubmitButton = (props: {
  onSubmitHandler: (event: React.FormEvent<HTMLButtonElement>) => void;
  onResetHandler: () => void;
}) => {
  return (
    <MyDiv>
      <MyButton type="button" onClick={props.onSubmitHandler}>
        {" "}
        Calculate delivery price{" "}
      </MyButton>
      <ResetButton type="button" onClick={props.onResetHandler}>
        {" "}
        Reset form{" "}
      </ResetButton>
    </MyDiv>
  );
};
