import styled from "styled-components";
import breakpoints from "../../styles/responsive/breakpoints";

export const Playlist = styled.div`
  height: 100%;
  margin-top: 1rem;
  font-family: "Roboto";
  overflow: scroll;

  h4 {
    font-size: 1.5rem;
    color: #3b9765;
  }

  h5 {
    font-size: 1.4rem;
    text-transform: capitalize;
  }

  li {
    font-size: 1rem;
    width: 16rem;
    text-transform: capitalize;
    font-family: "Outfit";
    float: left;
  }

  @media ${breakpoints.bg} {
    h4 {
      font-size: 1.4rem;
    }
  }

  @media ${breakpoints.md} {
    h4 {
      font-size: 1.4rem;
    }
  }
`;
