import styled from "styled-components";

export const ContentViewProduct = styled.div`
  width: 100%;
  height: 35rem;

  display: flex;

  margin-block: 2rem 4rem;

  img {
    width: 50%;
    object-fit: cover;
  }
`;

export const TitleViewProduct = styled.h2`
  font-family: "Roboto";
`;

export const WrapperInfoAlbums = styled.div`
  width: 50%;
  padding-inline: 3rem;

  display: flex;
  flex-direction: column;

  h2 {
    font-weight: bold;
    text-transform: uppercase;
  }

  h3 {
    font-family: "Roboto";
    text-transform: capitalize;
  }

  .price {
    font-size: 1.7rem;
    font-family: "Outfit";
    font-weight: bold;
    color: #3b9765;
    margin: 1rem 0 0 0;
  }
`;

export const WrapperDescription = styled.div`
  height: 10rem;
  font-family: "Roboto";

  h4 {
    font-weight: bold;
  }

  .description {
    font-size: 1rem;
  }

  .year {
    font-weight: bold;
  }
`;
