import styled from "styled-components";
import breakpoints from "../../styles/responsive/breakpoints";

export const DivTitle = styled.div`
  h2 {
    font-family: "Roboto";
  }

  @media ${breakpoints.md} {
    h2 {
      font-size: 1.5rem;
    }
  }

  @media ${breakpoints.sm} {
    h2 {
      font-size: 1.3rem;
    }
  }
`;
