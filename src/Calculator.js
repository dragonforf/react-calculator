import React, { useState } from "react";
import CalculatorDisplay from "./CalculatorDisplay";
import CalculatorKey from "./CalculatorKey";

const Calculator = () => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [numberInMemory, setNumberInMemory] = useState(0);
  const [operatorInMemory, setOperatorInMemory] = useState(0);

  const updateCurrentNumber = number => {
    let theNumber = currentNumber + number.toString();
    if(theNumber.length>1 && Number(theNumber[0]) === 0){
      theNumber = theNumber.slice(1);
    }
    if(theNumber.length >= 6){
      theNumber = theNumber.slice(0, 6);
    }
    setCurrentNumber(theNumber);
  };

  const applyOperator = operator => {
    if(operator === 5){
      setCurrentNumber(0);
      setNumberInMemory(0);
      setOperatorInMemory(0);
    }
    else if(operator === 6){
      setCurrentNumber(currentNumber * -1);
    }
    if(operator === 0){
      if(operatorInMemory !== 0){
        let a=Number(numberInMemory), b=Number(currentNumber);
        if(operatorInMemory === 1)
          setCurrentNumber(a + b);
        else if(operatorInMemory === 2)
          setCurrentNumber(a - b);
        else if(operatorInMemory === 3)
          setCurrentNumber(a * b);
        else if(operatorInMemory === 4)
          setCurrentNumber(a / b);
        else if(operatorInMemory === 7)
          alert("Percent");
      }
    }
    else{
      setNumberInMemory(currentNumber);
      setOperatorInMemory(operator);
      setCurrentNumber(0);
    }
  }

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
            <CalculatorKey onClick={() => applyOperator(5)} className="key-clear">AC</CalculatorKey>
            <CalculatorKey onClick={() => applyOperator(6)} className="key-sign">±</CalculatorKey>
            <CalculatorKey onClick={() => applyOperator(7)} className="key-percent">%</CalculatorKey>
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
          <CalculatorKey onClick={() => applyOperator(4)} className="key-divide">÷</CalculatorKey>
          <CalculatorKey onClick={() => applyOperator(3)} className="key-multiply">×</CalculatorKey>
          <CalculatorKey onClick={() => applyOperator(2)} className="key-subtract">−</CalculatorKey>
          <CalculatorKey onClick={() => applyOperator(1)} className="key-add">+</CalculatorKey>
          <CalculatorKey onClick={() => applyOperator(0)} className="key-equals">=</CalculatorKey>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
