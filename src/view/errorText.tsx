import React from "react";

export const ErrorText = (props: { message: string }) => {
  return <div style={{ color: "red" }}>{props.message}</div>;
};
