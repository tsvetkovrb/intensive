import React, { Component } from "react";

import Title from "./components/Title";

import Row from "react-bootstrap/lib/Row";
import Grid from "react-bootstrap/lib/Grid";
import Col from "react-bootstrap/lib/Col";

import styled from "styled-components";

import "./App.css";

const Button = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;
  outline: none;
`;

class App extends Component {
  render() {
    return (
      <div className="home-page">
        <div className="home-page__wrap">
          <Button>Привет, я кнопка! </Button>
          <Title title="Роман" name="учусь писать на React" />
        </div>
      </div>
    );
  }
}

export default App;
