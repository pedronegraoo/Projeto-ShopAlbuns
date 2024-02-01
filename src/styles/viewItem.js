import styled from "styled-components";
import breakpoints from "./responsive/breakpoints";

export const ContentViewProduct = styled.div`
  width: 100%;
  height: 35rem;

  display: flex;

  margin-block: 2rem 4rem;

  img {
    width: 50%;
    object-fit: cover;
  }

  @media ${breakpoints.md} {
    height: 100%;
    flex-direction: column;
    gap: 1rem;

    margin-block: 2rem 2rem;

    img {
      width: 100%;
    }
  }
`;

export const TitleViewProduct = styled.h2`
  font-family: "Roboto";

  @media ${breakpoints.bg} {
    font-size: 1.5rem;
  }

  @media ${breakpoints.extrasm} {
    font-size: 1.3rem;
  }
`;

export const WrapperInfoAlbums = styled.div`
  width: 50%;
  padding-inline: 3rem 0;

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

  @media ${breakpoints.bg} {
    padding-inline: 1.5rem 0;

    h2 {
      font-size: 1.5rem;
    }

    h3 {
      font-size: 1.4rem;
    }

    .price {
      font-size: 1.6rem;
    }

    .subtitle-price {
      font-size: 0.9rem;
    }
  }

  @media ${breakpoints.md} {
    width: 100%;
    padding-inline: 0;

    h2 {
      font-size: 1.8rem;
    }

    h3 {
      font-size: 1.6rem;
    }

    .price {
      font-size: 1.7rem;
    }

    .subtitle-price {
      font-size: 1rem;
    }
  }

  @media ${breakpoints.extrasm} {
    h2 {
      font-size: 1.5rem;
    }

    h3 {
      font-size: 1.4rem;
    }

    .price {
      font-size: 1.6rem;
    }

    .subtitle-price {
      font-size: 0.9rem;
    }
  }
`;

export const WrapperDescription = styled.div`
  height: 10rem;

  h4,
  .description,
  .year {
    font-family: "Roboto";
  }

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
