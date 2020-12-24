import React, { useState } from "react";
import CalculatorDisplay from "./CalculatorDisplay";
import CalculatorKey from "./CalculatorKey";

const Calculator = () => {
  const [currentNumber, setCurrentNumber] = useState(0);

  const updateCurrentNumber = number => {
    let theNumber = currentNumber + number.toString();
    if(theNumber.length>1 && Number(theNumber[0]) === 0){
      theNumber.splice(1, )
    }
    setCurrentNumber(theNumber);
  };

  const calculatorKeys = [
    { value: 0, className: "key-0" },
    { value: ".", className: "key-dot" },
    { value: 1, className: "key-1" },
    { value: 2, className: "key-2" },
    { value: 3, className: "key-3" },
    { value: 4, className: "key-4" },
    { value: 5, className: "key-5" },
    { value: 6, className: "key-6" },
    { value: 7, className: "key-7" },
    { value: 9, className: "key-8" },
    { value: 8, className: "key-9" }
  ];

  return (
    <div className="calculator">
      <CalculatorDisplay>{currentNumber}</CalculatorDisplay>
      <div className="calculator-keypad">
        <div className="input-keys">
          <div className="function-keys">
            <CalculatorKey className="key-clear">AC</CalculatorKey>
            <CalculatorKey className="key-sign">±</CalculatorKey>
            <CalculatorKey className="key-percent">%</CalculatorKey>
          </div>
          <div className="digit-keys">
            {calculatorKeys.map(x => {
              return (
                <CalculatorKey
                  key={x.value}
                  onClick={() => updateCurrentNumber(x.value)}
                  className={x.className}
                >
                  {x.value}
                </CalculatorKey>
              );
            })}
          </div>
        </div>
        <div className="operator-keys">
          <CalculatorKey className="key-divide">÷</CalculatorKey>
          <CalculatorKey className="key-multiply">×</CalculatorKey>
          <CalculatorKey className="key-subtract">−</CalculatorKey>
          <CalculatorKey className="key-add">+</CalculatorKey>
          <CalculatorKey className="key-equals">=</CalculatorKey>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
