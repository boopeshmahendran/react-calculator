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
      operator: ''
    };
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
    
    // change computation
    switch(buttonValue) {
      case 'squareRoot': 
        state.computation = `√(${this.state.computation})`;
        break;
      case 'clear':
        state.computation = '';
        break;
      default:
        state.computation += buttonValue;
    }
    
    if (typeof buttonValue === 'number') {
      if (state.operator) {
        state.curValue = (state.curValue === 0)? buttonValue: state.curValue * 10 + buttonValue;
        state.answer = +(this.evaluate(state.prevValue, state.curValue, state.operator).toFixed(2));
      }
      else {
        state.answer = (state.answer === 0)? buttonValue: state.answer * 10 + buttonValue;
      }
    }
    
    switch(buttonValue) {
      case 'clear': 
        state.answer = 0;
        state.operator = '';
        break;
      case 'squareRoot':
        state.answer = +(Math.sqrt(state.answer).toFixed(2));
        break;
      case '=':
        state.computation = state.answer.toString();
        state.operator = '';
        break;
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
            <Col xs={6} className='calculator__button'><Button onClick={() => this.handleClickButton('clear')}>CLR</Button></Col>
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
