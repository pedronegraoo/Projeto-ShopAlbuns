import styled from "styled-components";
import breakpoints from "./responsive/breakpoints";

export const TitleCart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  border-bottom: 1px solid #cccccc;

  h5 {
    font-family: "Roboto";
    text-transform: uppercase;
  }

  @media ${breakpoints.sm} {
    h5 {
      font-size: 1.1rem;
    }
  }
  @media ${breakpoints.extrasm} {
    h5 {
      font-size: 1rem;
    }
  }
`;

export const SectionCart = styled.section`
  height: 100%;
  display: flex;

  margin-top: 3rem;

  .divTableCart {
    width: 100%;
  }

  .divTableCartMobile {
    display: none;
  }

  @media ${breakpoints.bg} {
    flex-direction: column;
    gap: 2rem;
  }

  @media ${breakpoints.md} {
    .divTableCart {
      display: none;
    }

    .divTableCartMobile {
      display: block;
    }
  }
`;

export const DivInfoCart = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media ${breakpoints.bg} {
    width: 100%;
  }
`;
