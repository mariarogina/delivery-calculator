import React from "react";
import { styled } from "@mui/system";

const MyResult = styled("div")({
  color: "black",
  backgroundColor: "aliceblue",
  borderRadius: 4,
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
        <MyResult>RESULT:{props.result} </MyResult>
      ) : (
        <MyResult>RESULT: </MyResult>
      )}
    </MyDiv>
  );
};
