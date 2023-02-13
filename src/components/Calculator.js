import { useState } from 'react';

import './Calculator.css';

import calculate from '../logic/calculate';

const buttons = [
  'AC',
  '+/-',
  '%',
  '÷',
  '7',
  '8',
  '9',
  'x',
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

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    setState((prevState) => {
      const { total } = prevState;

      // change total to 0 if it is null to prevent error
      return calculate({ ...prevState, total: total ?? 0 }, buttonName);
    });
  };

  const updateInputValue = () => {
    const { total, next, operation } = state;

    if (operation) return `${total ?? '0'} ${operation} ${next ?? ''}`;

    if (next) return next;

    return total || 0;
  };

  return (
    <div className="calculator">
      <div className="calculator-inner">
        <input
          type="text"
          placeholder="0"
          className="calculator-input"
          value={updateInputValue()}
          disabled
        />
        {buttons.map((buttonName) => (
          <button
            key={buttonName}
            type="button"
            className="calculator-button"
            onClick={() => handleClick(buttonName)}
          >
            {buttonName}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
