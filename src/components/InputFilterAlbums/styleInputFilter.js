import styled from "styled-components";
import breakpoints from "../../styles/responsive/breakpoints";

export const Input = styled.input`
  width: 13.5rem;
  height: 2.4rem;
  padding: 0 15px;
  outline: none;
  border: none;
  border-radius: 0.5rem;
  background-color: #8080807c;

  @media ${breakpoints.md} {
    width: 40%;
  }
`;
