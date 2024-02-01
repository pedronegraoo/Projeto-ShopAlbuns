import styled from "styled-components";
import breakpoints from "./responsive/breakpoints";

export const ContainerCardsAlbums = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
  /* grid-template-columns: repeat(auto-fit, minmax(380px, 1fr)); */
  place-items: center;
  gap: 3rem;

  margin-top: 2rem;

  @media ${breakpoints.md} {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;

export const DivTitleInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
