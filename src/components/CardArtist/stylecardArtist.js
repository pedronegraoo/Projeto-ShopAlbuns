import styled from "styled-components";
import breakpoints from "../../styles/responsive/breakpoints";

export const Card = styled.div`
  width: 23rem;
  height: 20rem;

  background-color: #000000d2;
  /* background-color: #000000b0; */
  color: white;
  border-radius: 0.5rem;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

  overflow: hidden;

  img {
    width: 100%;
    height: 50%;
    object-fit: cover;
  }

  @media ${breakpoints.md} {
    width: 100%;
  }
`;

export const ContentCard = styled.div`
  height: 50%;

  display: flex;
  justify-content: space-between;
  padding: 1rem;

  position: relative;

  .name-artist {
    font-size: 2.1rem;
    font-family: "Bebas Neue";
    letter-spacing: 1px;

    margin-bottom: 1.7rem;
  }

  div p {
    font-family: "Roboto";
    margin: 0;
  }

  .linkSaibaMais {
    width: 6rem;
    height: 3rem;

    background-color: #fff;
    color: #000;

    font-family: "Roboto";
    font-size: 1rem;
    /* text-transform: uppercase; */
    border: none;
    border-radius: 2rem;
    text-decoration: none;

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    bottom: 28px;
    right: 15px;

    transition: all 0.2s ease;

    &:hover {
      /* background-color: #000000d2; */
      /* background-color: #ff000070; */
      background-color: #3b9765;
      color: #fff;
    }
  }

  @media ${breakpoints.sm} {
    .name-artist {
      font-size: 1.9rem;
    }

    div p {
      font-size: 0.9rem;
    }

    .linkSaibaMais {
      width: 5.5rem;
      height: 2.7rem;

      font-size: 1rem;
    }
  }
`;
