import React, { Component } from 'react';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import './Calculator.css';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      prevValue: 0,
      curValue: 0,
      answer: 0,
      computation: '',
      operator: '+'
    }
  }
  
  resetCalc(state) {
    state.prevValue = 0;
    state.curValue = 0;
    state.answer = 0;
    state.computation = '';
    state.operator = '+';
  }
  
  evaluate(a, b, operator) {
    switch (operator) {
      case '+': return a + b;
      case '-': return a - b;
      case '*': return a * b;
      case '/': return a / b;
    }
  }
  
  handleClickButton(buttonValue) {
    let state = Object.assign({}, this.state);
    let operators = ['+', '-', '*', '/'];
    
    if (operators.indexOf(buttonValue) >= 0) {
      // if last character is operator, return
      if (operators.indexOf(state.computation.slice(-1)) >= 0) return;
      
      state.prevValue = state.answer;
      state.curValue = 0;
      state.answer = 0;
      state.operator = buttonValue;
    }
    
    if (typeof buttonValue === 'number') {
        state.curValue = state.curValue * 10 + buttonValue;
        state.answer = +(this.evaluate(state.prevValue, state.curValue, state.operator).toFixed(2));
    }
    
    switch(buttonValue) {
      case 'clear': 
        this.resetCalc(state);
        break;
      case 'squareRoot':
        state.answer = +(Math.sqrt(state.answer).toFixed(2));
        state.computation = `√(${this.state.computation})`;
        break;
      case '=':
        let answer = state.answer;
        this.resetCalc(state);
        state.answer = state.curValue = answer;
        state.computation = answer.toString();
        break;
      default:
        state.computation += buttonValue;
    }
      
    this.setState(state);
  }
  
  
  render() {
    return (
      <div className='calculator'>
        <div className='calculator__display'>
            {this.state.answer}
          <div className='calculator__display__computation'>
            {this.state.computation}
          </div>
        </div>
        <Grid className='calculator__buttons'>
          <Row> 
            <Col xs={6} className='calculator__button'><Button onClick={() => this.handleClickButton('clear')}>C</Button></Col>
            <Col xs={3} className='calculator__button'><Button onClick={() => this.handleClickButton('squareRoot')}>√</Button></Col>
            <Col xs={3} className='calculator__button'><Button onClick={() => this.handleClickButton('+')}>+</Button></Col>
          </Row>
          <Row> 
            <Col xs={3} className='calculator__button'><Button onClick={() => this.handleClickButton(7)}>7</Button></Col>
            <Col xs={3} className='calculator__button'><Button onClick={() => this.handleClickButton(8)}>8</Button></Col>
            <Col xs={3} className='calculator__button'><Button onClick={() => this.handleClickButton(9)}>9</Button></Col>
            <Col xs={3} className='calculator__button'><Button onClick={() => this.handleClickButton('-')}>-</Button></Col>
          </Row>
          <Row>
            <Col xs={3} className='calculator__button'><Button onClick={() => this.handleClickButton(4)}>4</Button></Col>
            <Col xs={3} className='calculator__button'><Button onClick={() => this.handleClickButton(5)}>5</Button></Col>
            <Col xs={3} className='calculator__button'><Button onClick={() => this.handleClickButton(6)}>6</Button></Col>
            <Col xs={3} className='calculator__button'><Button onClick={() => this.handleClickButton('*')}>*</Button></Col>
          </Row>
          <Row>
            <Col xs={3} className='calculator__button'><Button onClick={() => this.handleClickButton(1)}>1</Button></Col>
            <Col xs={3} className='calculator__button'><Button onClick={() => this.handleClickButton(2)}>2</Button></Col>
            <Col xs={3} className='calculator__button'><Button onClick={() => this.handleClickButton(3)}>3</Button></Col>
            <Col xs={3} className='calculator__button'><Button onClick={() => this.handleClickButton('/')}>/</Button></Col>
          </Row>
          <Row>
            <Col xs={3} className='calculator__button'><Button onClick={() => this.handleClickButton(0)}>0</Button></Col>
            <Col xs={9} className='calculator__button'><Button onClick={() => this.handleClickButton('=')}>=</Button></Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Calculator;
