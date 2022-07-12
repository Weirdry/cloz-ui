import React from "react";
import styled from "styled-components"

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <Container>{props.label}</Container>;
};

export const Container = styled.div`
  display: flex;
  width: auto;
  height: auto;
  padding: 0.5rem;
  background-color: #000000;
  color: #ffffff;
  font-size: 2rem;
`

export default Button;