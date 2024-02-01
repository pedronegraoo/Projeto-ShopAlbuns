import styled from "styled-components";

export const ContainerCards = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  place-items: center;
  gap: 2rem;

  margin-top: 2rem;
`;

export const DivTitleInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
