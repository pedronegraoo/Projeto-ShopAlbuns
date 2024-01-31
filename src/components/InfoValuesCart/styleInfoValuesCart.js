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
