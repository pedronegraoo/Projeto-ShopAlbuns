import styled from "styled-components";
import breakpoints from "../../styles/responsive/breakpoints";

export const Card = styled.div`
  width: 30rem;
  /* width: 24rem; */
  height: 15rem;

  display: flex;

  border-radius: 0.5rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -50px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -90px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  img {
    width: 50%;

    object-fit: cover;
    border-radius: 0.5rem 0 0 0.5rem;
  }

  @media ${breakpoints.sm} {
    width: 100%;
    height: 16rem;
  }
`;

export const ContentCard = styled.div`
  width: 50%;
  height: 100%;
  padding: 1.2rem;

  position: relative;

  .name-album {
    font-size: 2rem;
    font-family: "Bebas Neue";
    letter-spacing: 1px;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  div p {
    font-family: "Roboto";
    margin: 0;
  }

  div p span {
    font-size: 1.1rem;
    font-family: "Outfit";
    font-weight: bold;
    text-transform: capitalize;
  }

  .buttonBuy {
    width: 7rem;
    height: 2.5rem;
    border: none;
    border-radius: 0.5rem;

    background-color: #1b1a1a;
    color: #fff;
    font-family: "Roboto";
    font-size: 1rem;
    text-transform: uppercase;
    text-decoration: none;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 20px;
    right: 20px;

    transition: all 0.2s ease;

    &:hover {
      /* background-color: #a71919; */
      background-color: #3b9765;
      color: #fff;
    }
  }

  @media ${breakpoints.sm} {
    /* padding: 1.1rem 0.5rem; */
    padding: 1.1rem 0.7rem;

    .name-album {
      font-size: 1.8rem;
      margin-bottom: 0.7rem;
    }
  }

  @media ${breakpoints.extrasm} {
    .name-album {
      margin-bottom: 0.5rem;
    }

    .buttonBuy {
      width: 6rem;
      height: 2.2rem;

      font-size: 0.9rem;
    }
  }
`;
