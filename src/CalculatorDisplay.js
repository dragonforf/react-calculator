import React from "react";

const CalculatorDisplay = ({ children, ...props }) => {
  return (
    <div className={`calculator-display`} {...props}>
      {children}
    </div>
  );
};

export default CalculatorDisplay;
