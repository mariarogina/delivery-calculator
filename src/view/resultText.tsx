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
  fontWeight: "600",
  fontSize: "20px",
});

export const ResultText = (props: { result: number | null }) => {
  return (
    <MyDiv>
      {props.result !== null ? (
        <MyResult>
          Delivery price:<Result>{props.result.toFixed(2)} </Result>
        </MyResult>
      ) : (
        <MyResult>Delivery price: </MyResult>
      )}
    </MyDiv>
  );
};
