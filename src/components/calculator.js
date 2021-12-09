import React, { Component } from 'react';
import InputButton from './input';
import calculate from '../logic/calculate';
import '../index.css';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  render() {
    const handleCursor = (clickName) => {
      const name = clickName.target.innerText;
      const { total, next, operation } = calculate(this.state, name);
      this.setState({ total, next, operation });
    };
    const { total, next, operation } = this.state;

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
  }
}

export default Calculator;
