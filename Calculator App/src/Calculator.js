// Calculator.js
import React, { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      display: '',
    };
  }

  handleClick = (value) => {
    this.setState((prevState) => ({
      display: prevState.display + value,
    }));
  };

  clear = () => {
    this.setState({ display: '' });
  };

  calculate = () => {
    try {
      this.setState({
        display: eval(this.state.display),
      });
    } catch (error) {
      this.setState({ display: 'Error' });
    }
  };

  render() {
    return (
      <div className="calculator">
        <div className="display">{this.state.display}</div>
        <div className="buttons">
          <button onClick={this.handleClick.bind(this, '1')}>1</button>
          <button onClick={this.handleClick.bind(this, '2')}>2</button>
          <button onClick={this.handleClick.bind(this, '3')}>3</button>
          <button onClick={this.handleClick.bind(this, '+')}>+</button>
          <button onClick={this.handleClick.bind(this, '4')}>4</button>
          <button onClick={this.handleClick.bind(this, '5')}>5</button>
          <button onClick={this.handleClick.bind(this, '6')}>6</button>
          <button onClick={this.handleClick.bind(this, '-')}>-</button>
          <button onClick={this.handleClick.bind(this, '7')}>7</button>
          <button onClick={this.handleClick.bind(this, '8')}>8</button>
          <button onClick={this.handleClick.bind(this, '9')}>9</button>
          <button onClick={this.calculate}>=</button>
          <button onClick={this.handleClick.bind(this, '0')}>0</button>
          <button onClick={this.clear}>C</button>
          <button onClick={this.handleClick.bind(this, '*')}>*</button>
          <button onClick={this.handleClick.bind(this, '/')}>/</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
