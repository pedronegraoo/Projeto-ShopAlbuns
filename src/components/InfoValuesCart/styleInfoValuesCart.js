import styled from "styled-components";

export const WrapperFinalizar = styled.div`
  height: 11rem;
  padding: 1.5rem;

  font-family: "Outfit";
  text-transform: uppercase;
  border: 1px solid #cccccc;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  .btn-finalizar-bottom {
    width: 100%;
    height: 2.3rem;
    background-color: #000;
    color: #fff;
    border: none;
    border-radius: 0.2rem;

    font-size: 0.8rem;
    font-family: "Outfit";
    text-align: center;
    text-transform: uppercase;

    transition: all 0.2s ease;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const WrapperValues = styled.div`
  margin-bottom: 0.7rem;

  div {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 2rem;

    margin-bottom: 0.5rem;

    p {
      margin: 0;
      font-size: 0.9rem;
    }
  }
`;
