import React from 'react';

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

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = (buttonName) => {
    this.setState((state) => {
      const { total } = state;

      // change total to 0 if it is null to prevent error
      return calculate({ ...state, total: total ?? 0 }, buttonName);
    });
  };

  render() {
    const { total, next, operation } = this.state;

    const updateInputValue = () => {
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
              onClick={() => this.handleClick(buttonName)}
            >
              {buttonName}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default Calculator;
