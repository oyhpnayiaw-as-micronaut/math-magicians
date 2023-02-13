import React from 'react';
import './Calculator.css';

const Calculator = () => {
  const buttons = [
    'AC',
    '+/-',
    '%',
    '÷',
    '7',
    '8',
    '9',
    '×',
    '4',
    '5',
    '6',
    '-',
    '1',
    '2',
    '3',
    '+',
    '0',
    '.',
    '=',
  ];

  return (
    <div className="calculator">
      <div className="calculator-inner">
        <input type="text" placeholder="0" className="calculator-input" />
        {buttons.map((button) => (
          <button key={button} type="button" className="calculator-button">
            {button}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
