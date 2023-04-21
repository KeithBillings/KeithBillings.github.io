// component that takes in child component and only renders it if the condition is true

import React from "react";

export default function OptionalComponent({ condition, children }) {
  if (typeof condition !== "boolean") {
    console.error("Condition must be a boolean");
  }

  return condition ? children : null;
}
