import styled from "styled-components";

export const TitleCart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  border-bottom: 1px solid #cccccc;

  h5 {
    font-family: "Roboto";
    text-transform: uppercase;
  }
`;

export const SectionCart = styled.section`
  height: 100%;
  display: flex;
  justify-content: space-between;

  margin-top: 3rem;
`;

export const DivInfoCart = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
