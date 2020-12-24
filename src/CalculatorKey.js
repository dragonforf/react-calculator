import React from "react";

const CalculatorKey = ({ className, ...props }) => (
  <button className={`calculator-key ${className}`} {...props} />
);

export default CalculatorKey;
