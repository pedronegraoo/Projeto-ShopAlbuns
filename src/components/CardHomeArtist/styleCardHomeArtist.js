import styled from "styled-components";
import breakpoints from "../../styles/responsive/breakpoints";

export const CardArtist = styled.div`
  width: 15rem;
  height: 20rem;

  /* background-color: #000000d2; */
  /* color: #fff; */
  background-color: #f2f1eb;
  color: #000;
  border-radius: 0.5rem;

  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  overflow: hidden;

  img {
    width: 100%;
    height: 80%;

    object-fit: cover;
    border-radius: 0.5rem 0.5rem 0 0;

    transition: all 0.3s ease;

    &:hover {
      scale: 1.05;
    }
  }

  h2 {
    height: 20%;
    text-align: center;
    text-transform: uppercase;
    padding-top: 15px;

    font-size: 2.2rem;
    font-family: "Bebas Neue";
    letter-spacing: 2px;

    margin: 0;
  }

  @media ${breakpoints.bg} {
    h2 {
      font-size: 1.8rem;
    }
  }
`;
