import React, { Component } from 'react';
import '../index.css';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="main-container">
        <div className="display">{0}</div>
        <div className="calculator-btn">
          <input type="button" value="AC" className="c-btn" />
          <input type="button" value="+/-" className="c-btn" />
          <input type="button" value="%" className="c-btn" />
          <input type="button" value="&divide;" className="c-btn orange" />
          <input type="button" value="7" className="c-btn" />
          <input type="button" value="8" className="c-btn" />
          <input type="button" value="9" className="c-btn" />
          <input type="button" value="X" className="c-btn orange" />
          <input type="button" value="4" className="c-btn" />
          <input type="button" value="5" className="c-btn" />
          <input type="button" value="6" className="c-btn" />
          <input type="button" value="-" className="c-btn orange" />
          <input type="button" value="1" className="c-btn" />
          <input type="button" value="2" className="c-btn" />
          <input type="button" value="3" className="c-btn" />
          <input type="button" value="+" className="c-btn orange" />
          <input type="button" value="0" className="c-btn double" />
          <input type="button" value="." className="c-btn" />
          <input type="button" value="3" className="c-btn orange" />
        </div>
      </div>
    );
  }
}

export default Calculator;
