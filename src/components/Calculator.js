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
  render() {
    return (
      <div className='calculator'>
        <div className='calculator__display'> {this.state.value} </div>
        <Grid className='calculator__buttons'>
          <Row>
            <Col xs={3} className='calculator__button'><Button>7</Button></Col>
            <Col xs={3} className='calculator__button'><Button>8</Button></Col>
            <Col xs={3} className='calculator__button'><Button>9</Button></Col>
            <Col xs={3} className='calculator__button'><Button>+</Button></Col>
          </Row>
          <Row>
            <Col xs={3} className='calculator__button'><Button>4</Button></Col>
            <Col xs={3} className='calculator__button'><Button>5</Button></Col>
            <Col xs={3} className='calculator__button'><Button>6</Button></Col>
            <Col xs={3} className='calculator__button'><Button>-</Button></Col>
          </Row>
          <Row>
            <Col xs={3} className='calculator__button'><Button>1</Button></Col>
            <Col xs={3} className='calculator__button'><Button>2</Button></Col>
            <Col xs={3} className='calculator__button'><Button>3</Button></Col>
            <Col xs={3} className='calculator__button'><Button>*</Button></Col>
          </Row>
          <Row>
            <Col xs={3} className='calculator__button'><Button>0</Button></Col>
            <Col xs={3} className='calculator__button'><Button>.</Button></Col>
            <Col xs={3} className='calculator__button'><Button>/</Button></Col>
            <Col xs={3} className='calculator__button'><Button>=</Button></Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Calculator;
