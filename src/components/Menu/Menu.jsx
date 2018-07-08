import React, { Component } from "react";

import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";

import styled from "styled-components";

const Repair = styled.div`
  color: #464646;
  font-size: 18px;
  font-weight: 300;
  line-height: 22px;
`;

const WorkTime = styled.div`
  color: #2a2a2a;
  font-size: 12px;
  font-weight: 300;
  line-height: 24px;

  span {
    display: block;
    font-weight: 700;
    font-size: 21px;
    color: #464646;
  }
`;

const Calls = styled.div`
  color: #2a2a2a;
  font-size: 12px;
  font-weight: 300;
  line-height: 24px;

  span {
    display: block;
    font-weight: 700;
    font-size: 21px;
    color: #464646;
  }
`;

const CallButton = styled.button`
  width: 176px;
  height: 48px;
  background-color: #3f7cdb;
  border-radius: 25px;
  color: #fff;
  font: 400 14px/22px "Roboto";
  border: 2px solid #3f7cdb;
  transition: 0.3s;
  &:hover {
    background-color: transparent;
    color: #3f7cdb;
    border: 2px solid #3f7cdb;
    font-weight: 700;
  }
`;

class Adress extends Component {
  render() {
    return <span>{this.props.addr}</span>;
  }
}

class TelNumber extends Component {
  render() {
    return <span>{this.props.tel}</span>;
  }
}

export default class Menu extends Component {
  render() {
    return (
      <Row>
        <Col lg={3}>
          <Repair>Ремонт айфонов в сервисном центре и на выезде</Repair>
        </Col>
        <Col lg={3} lgOffset={1}>
          <WorkTime>
            Пн-пт с 10 до 20, сб, вс с 11 до 18
            <Adress addr="Ленинская, 301" />
          </WorkTime>
        </Col>
        <Col lg={3}>
          <Calls>
            Звонки принимаются 24 часа
            <TelNumber tel="8 (999) 000-00-00" />
          </Calls>
        </Col>
        <Col lg={2}>
          <CallButton> Заказать звонок! </CallButton>
        </Col>
      </Row>
    );
  }
}
