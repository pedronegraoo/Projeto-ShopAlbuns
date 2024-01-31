import styled from "styled-components";

export const SectionHome = styled.section`
  height: 100%;
  padding: 0 4%;

  margin-top: 1rem;

  h1 {
    font-family: "Roboto";
    text-align: center;
    margin-bottom: 1rem;
  }
`;

export const ContentSection = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-top: 1px solid black;

  .titleContent {
    font-family: "Roboto";
    margin-top: 2rem;
  }

  .linkAlbum,
  .linkArtist {
    font-family: "Roboto";
    font-size: 1.4rem;
    text-decoration: none;
    margin-block: 2rem;
    color: #ff1616a9;
  }
`;

export const WrapperCard = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  place-items: center;
  gap: 2rem;

  margin-top: 1.5rem;
`;
