import React, { Component } from 'react';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import './Calculator.css';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      value: 0
    };
  }
  handleClickButton(buttonValue) {
    if (typeof buttonValue === 'number') {
      this.setState({
        value: (this.state.value === 0)? buttonValue: this.state.value * 10 + buttonValue
      });
      return ;
    }
    
    switch(buttonValue) {
      case 'C': this.setState({value: 0});
        break;
    }
  }
  render() {
    return (
      <div className='calculator'>
        <div className='calculator__display'> {this.state.value} </div>
        <Grid className='calculator__buttons'>
          <Row> 
            <Col xs={6} className='calculator__button'><Button onClick={() => this.handleClickButton('C')}>CLR</Button></Col>
            <Col xs={6} className='calculator__button'><Button onClick={() => this.handleClickButton('C')}>√</Button></Col>
          </Row>
          <Row> 
            <Col xs={3} className='calculator__button'><Button onClick={() => this.handleClickButton(7)}>7</Button></Col>
            <Col xs={3} className='calculator__button'><Button onClick={() => this.handleClickButton(8)}>8</Button></Col>
            <Col xs={3} className='calculator__button'><Button onClick={() => this.handleClickButton(9)}>9</Button></Col>
            <Col xs={3} className='calculator__button'><Button onClick={() => this.handleClickButton('+')}>+</Button></Col>
          </Row>
          <Row>
            <Col xs={3} className='calculator__button'><Button onClick={() => this.handleClickButton(4)}>4</Button></Col>
            <Col xs={3} className='calculator__button'><Button onClick={() => this.handleClickButton(5)}>5</Button></Col>
            <Col xs={3} className='calculator__button'><Button onClick={() => this.handleClickButton(6)}>6</Button></Col>
            <Col xs={3} className='calculator__button'><Button onClick={() => this.handleClickButton('-')}>-</Button></Col>
          </Row>
          <Row>
            <Col xs={3} className='calculator__button'><Button onClick={() => this.handleClickButton(1)}>1</Button></Col>
            <Col xs={3} className='calculator__button'><Button onClick={() => this.handleClickButton(2)}>2</Button></Col>
            <Col xs={3} className='calculator__button'><Button onClick={() => this.handleClickButton(3)}>3</Button></Col>
            <Col xs={3} className='calculator__button'><Button onClick={() => this.handleClickButton('*')}>*</Button></Col>
          </Row>
          <Row>
            <Col xs={3} className='calculator__button'><Button onClick={() => this.handleClickButton(0)}>0</Button></Col>
            <Col xs={3} className='calculator__button'><Button onClick={() => this.handleClickButton('.')}>.</Button></Col>
            <Col xs={3} className='calculator__button'><Button onClick={() => this.handleClickButton('/')}>/</Button></Col>
            <Col xs={3} className='calculator__button'><Button onClick={() => this.handleClickButton('=')}>=</Button></Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Calculator;
