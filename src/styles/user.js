import styled from "styled-components";
import breakpoints from "./responsive/breakpoints";

export const WrapperFormUser = styled.div`
  height: 100%;

  margin-top: 5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormUser = styled.form`
  width: 30rem;
  height: 27rem;
  padding: 2rem;
  border-radius: 0.5rem;
  background-color: #ebebeb;
  /* background-color: #80808030; */

  display: flex;
  flex-direction: column;
  gap: 1rem;

  font-family: "Roboto";

  h3 {
    text-transform: capitalize;
    font-weight: bold;
  }

  div {
    label {
      font-size: 1rem;
      margin-bottom: 0.3rem;
    }

    input {
      width: 100%;
      height: 2.2rem;
      padding: 0 0.5rem;
      outline: none;
      border: 1px solid #80808057;
      border-radius: 0.3rem;

      &:focus {
        border: 1px solid #000;
      }
    }

    .messageError {
      visibility: hidden;
      margin-block: 0.5rem 0;
      color: red;
    }
  }

  button {
    width: 100%;
    color: #fff;
    background-color: #000;
    border: none;
    border-radius: 0.3rem;
    padding: 0.7rem;

    font-size: 1rem;
    text-transform: uppercase;
    margin-top: 0.5rem;

    &:hover {
      opacity: 0.9;
    }
  }

  @media ${breakpoints.md} {
    width: 100%;
  }
`;

export const WrapperButtonRegister = styled.section`
  width: 30rem;

  font-family: "Roboto";

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-size: 1.2rem;
    font-weight: bold;
    margin-top: 1rem;
  }

  .linkRegister {
    width: 100%;
    background-color: #3b9765;
    color: #fff;
    border: none;
    border-radius: 0.3rem;
    padding: 0.7rem;

    font-size: 1rem;
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;

    &:hover {
      opacity: 0.9;
    }
  }

  @media ${breakpoints.md} {
    width: 100%;
  }
`;
