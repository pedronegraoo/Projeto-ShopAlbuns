import styled from "styled-components";

export const WrapperInputQuantity = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;

  button {
    height: 2rem;

    display: flex;
    align-items: center;

    background-color: transparent;
    border: none;
    outline: none;

    font-size: 1.5rem;
    color: #000;

    transition: all 0.1s ease;

    &:hover {
      color: #bbbbbb;
    }
  }

  input {
    width: 2.5rem;
    text-align: center;
    height: 2rem;
    outline: none;
    border: 1px solid #cccccc;
    border-radius: 0.3rem;
  }
`;
