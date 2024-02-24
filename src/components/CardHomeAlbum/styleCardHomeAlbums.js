import styled from "styled-components";
import breakpoints from "../../styles/responsive/breakpoints";

export const CardAlbum = styled.div`
  width: 15rem;
  height: 20rem;

  /* background-color: #000000d2;
  color: #fff; */
  /* background-color: #f2f1eb; */
  color: #000;
  background-color: #fff;
  border-radius: 0.5rem;

  // box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  // bosx-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  /* box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px; */
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  overflow: hidden;

  img {
    width: 100%;
    height: 70%;
    object-fit: cover;

    transition: all 0.3s ease;

    &:hover {
      scale: 1.05;
    }
  }

  div {
    width: 100%;
    height: 30%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h2 {
    font-size: 2rem;
    font-family: "Bebas Neue";
    letter-spacing: 2px;
    text-transform: uppercase;
    margin: 0;
  }

  p {
    font-size: 1.2rem;
    font-family: "Outfit";
    margin: 0;
  }

  @media ${breakpoints.bg} {
    h2 {
      font-size: 1.8rem;
    }

    p {
      font-size: 1.1rem;
    }
  }

  @media ${breakpoints.sm} {
    h2 {
      font-size: 1.7rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;
