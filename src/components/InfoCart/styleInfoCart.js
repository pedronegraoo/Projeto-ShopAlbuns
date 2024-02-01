import styled from "styled-components";
import breakpoints from "../../styles/responsive/breakpoints";

export const WrapperInfo = styled.div`
  height: 6rem;
  border: 1px solid #cccccc;
  border-radius: 0.2rem;
  padding: 1rem 1.5rem;

  p {
    margin-bottom: 0.2rem;
    font-family: "Outfit";
    font-size: 0.8rem;
    font-weight: bold;
    text-transform: uppercase;
  }

  div {
    display: flex;
    align-items: center;
  }

  input {
    width: 12rem;
    height: 1.8rem;
    margin-right: 0.5rem;
    outline: none;
    padding-left: 0.4rem;
    font-size: 0.8rem;
    border: 1px solid #cccccc;
    border-radius: none;

    &:focus {
      border: 1px solid #000;
    }
  }

  button {
    width: 4.5rem;
    height: 1.8rem;

    font-family: "Outfit";
    font-size: 0.8rem;
    text-transform: uppercase;
    background-color: transparent;
    border: 1px solid #000;
    color: #000;

    transition: all 0.2s ease;

    &:hover {
      background-color: #000;
      color: #fff;
    }
  }

  @media ${breakpoints.bg} {
    width: 19rem;

    input {
      width: 10rem;
    }
  }

  @media ${breakpoints.sm} {
    width: 100%;

    div {
      justify-content: space-between;
    }

    input {
      width: 16rem;
    }
  }

  @media ${breakpoints.extrasm} {
    input {
      width: 13rem;
    }
  }
`;
