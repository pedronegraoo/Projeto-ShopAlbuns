import styled from "styled-components";
import breakpoints from "../../styles/responsive/breakpoints";

export const BtnTop = styled.button`
  width: 3.5rem;
  height: 3.5rem;
  border: none;
  border-radius: 50%;
  background-color: #ccc;
  color: #000;
  font-size: 1.5rem;

  position: fixed;
  bottom: 1.5rem;
  right: 2rem;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.2s ease;

  .iconBtnToTop {
    color: #000;
  }

  &:hover {
    scale: 1.05;
  }

  @media ${breakpoints.sm} {
    width: 3rem;
    height: 3rem;
    font-size: 1.3rem;
  }
`;
