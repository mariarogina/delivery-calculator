import React from "react";
import { styled } from "@mui/system";

const MyResult = styled("div")({
  color: "black",
  backgroundColor: "aliceblue",
  borderRadius: 4,
});
const Result = styled("span")({
  color: "blue",
});
const MyDiv = styled("div")({
  color: "black",
  backgroundColor: "aliceblue",
  margin: 10,
  marginLeft: 20,
  fontWeight: 400,
  fontSize: "20px",
});
const ResultTitle = styled("div")({
  marginBottom: 6,
});

export const ResultText = (props: { result: number | null }) => {
  return (
    <MyDiv>
      <ResultTitle>Your total cost will be equal to:</ResultTitle>
      {props.result !== null ? (
        <MyResult>
          Delivery price: <Result>{props.result.toFixed(2)} EUR</Result>
        </MyResult>
      ) : (
        <MyResult>Delivery price: -</MyResult>
      )}
    </MyDiv>
  );
};
