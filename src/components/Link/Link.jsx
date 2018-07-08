import React, { Component } from "react";
import styled from "styled-components";

const StyledLink = styled.a`
  color: ${props => (props.active ? "pink" : "#fff")};
  font: 300 14px/24px "Roboto";
  padding-right: 33px;
  border-right: 1px dotted #fff;
  &:hover {
    color: #8d8d8d;
    text-decoration: none;
  }
  &:last-child {
    border-right: none;
  }
`;

export default class Link extends Component {
  render() {
    return <StyledLink href={this.props.link}>{this.props.text}</StyledLink>;
  }
}
