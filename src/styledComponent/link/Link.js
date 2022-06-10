import styled, { css } from "styled-components";

export default styled.a`
  padding: 20px;
  font-size: 2rem;
  transition: ease 0.25s all;
  text-decoration: none;
  color: black;
  ${(props) =>
    props.secondary &&
    css`
      background-color: grey;
      border-radius: 8px;
      padding: 8px;
    `}
  :hover {
    font-size: 3rem;
    opacity: 0.6;
  }
`;
