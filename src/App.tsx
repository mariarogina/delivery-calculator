import React from "react";
import "./App.css";
import { CalculatorForm } from "./view/calculatorForm";
import { styled } from "@mui/system";

const AppWrap = styled("div")({
  display: "flex",
  justifyContent: "center",
});
function App() {
  return (
    <AppWrap>
      <CalculatorForm />
    </AppWrap>
  );
}

export default App;
