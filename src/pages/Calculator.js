import React, { useState } from 'react';
import InputButton from '../components/input';
import calculate from '../logic/calculate';
import '../index.css';

const Calculator = () => {
  const [input, setInput] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleCursor = (clickName) => {
    const click = clickName.target.innerText;
    setInput(calculate(input, click));
  };
  const { total, next, operation } = input;

  const display = () => {
    if (next) {
      return next;
    }
    if (operation) {
      return operation;
    }
    if (total) {
      return total;
    }
    return 0;
  };
  return (
    <div className="main-container">
      <div className="calculator-do">
        <p>Let&apos;s do some mathematics!</p>
      </div>
      <div className="display">{display()}</div>
      <div className="calculator-btn">
        <InputButton value="AC" className="c-btn" click={handleCursor} />
        <InputButton value="+/-" className="c-btn" click={handleCursor} />
        <InputButton value="%" className="c-btn" click={handleCursor} />
        <InputButton value="÷" className="c-btn orange" click={handleCursor} />
        <InputButton value="7" className="c-btn" click={handleCursor} />
        <InputButton value="8" className="c-btn" click={handleCursor} />
        <InputButton value="9" className="c-btn" click={handleCursor} />
        <InputButton value="x" className="c-btn orange" click={handleCursor} />
        <InputButton value="4" className="c-btn" click={handleCursor} />
        <InputButton value="5" className="c-btn" click={handleCursor} />
        <InputButton value="6" className="c-btn" click={handleCursor} />
        <InputButton value="-" className="c-btn orange" click={handleCursor} />
        <InputButton value="1" className="c-btn" click={handleCursor} />
        <InputButton value="2" className="c-btn" click={handleCursor} />
        <InputButton value="3" className="c-btn" click={handleCursor} />
        <InputButton value="+" className="c-btn orange" click={handleCursor} />
        <InputButton value="0" className="c-btn double" click={handleCursor} />
        <InputButton value="." className="c-btn" click={handleCursor} />
        <InputButton value="=" className="c-btn orange" click={handleCursor} />
      </div>
    </div>
  );
};

export default Calculator;
