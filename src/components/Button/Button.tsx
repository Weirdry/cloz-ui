import React from "react";
import styled from "styled-components"

export interface ButtonProps {
  label: string;
}

function Button (props: ButtonProps) {
  const { label } = props
  return <Container>{label}</Container>;
};

export const Container = styled.button`
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
  -moz-appearance: none;
  appearance: none;
  
  margin: 0;
  border: 0;
  
  display: flex;
  
  width: auto;
  height: auto;
  padding: 0.75rem 1.25rem;
  background-color: #000000;
  color: #ffffff;
  font-size: 1rem;
  cursor: pointer;
`

export default Button;