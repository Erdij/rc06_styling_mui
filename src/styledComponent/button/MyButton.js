import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) => (props.buttonColor ? "blue" : "purple")};
  border: none;
  margin: 2px;
  color: #fff;
  padding: 12px 25px;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  font-size: 18px;
`;
