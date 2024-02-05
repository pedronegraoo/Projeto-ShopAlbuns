import styled from "styled-components";
import breakpoints from "../../styles/responsive/breakpoints";

export const Section = styled.section`
  .btnCanvas {
    width: 100%;
    height: 3.5rem;

    background-color: #3b9765;
    color: #fff;

    border: none;
    border-radius: 0.5rem;
    font-size: 1.2rem;
    font-family: "Roboto";
    text-transform: uppercase;

    transition: all 0.2s ease;

    &:hover {
      background-color: #000;
    }
  }

  @media ${breakpoints.bg} {
    .btnCanvas {
      height: 3.1rem;
    }
  }

  @media ${breakpoints.md} {
    .btnCanvas {
      height: 3.5rem;
    }
  }
`;

export const WrapperContentCanvas = styled.div`
  width: 100%;
  height: 100%;
`;

export const BodyCanvas = styled.div`
  width: 100%;
  height: 21rem;
  padding-inline: 1rem;
  overflow: auto;

  @media ${breakpoints.sm} {
    height: 29rem;
  }
`;

export const FooterCanvas = styled.footer`
  /* background-color: green; */
  width: 100%;
  height: 13rem;
  padding: 1rem;

  .linkCart {
    width: 100%;
    height: 3.5rem;
    margin-top: 1rem;

    background-color: #3b9765;
    color: #fff;

    display: flex;
    justify-content: center;
    align-items: center;

    border: none;
    border-radius: 0.2rem;
    font-size: 1.2rem;
    font-family: "Roboto";
    text-transform: uppercase;
    text-decoration: none;

    transition: all 0.2s ease;

    &:hover {
      background-color: #000;
    }
  }
`;

export const ResumoPedido = styled.div`
  width: 100%;
  height: 6rem;
  border-radius: 0.2rem;
  border: 1px solid #cccccc;

  h6 {
    height: 50%;
    font-family: "Roboto";
    font-weight: bold;
    padding: 10px;
    text-align: center;
    border-bottom: 1px solid #cccccc;

    margin: 0;
  }

  div {
    height: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 15px;
    font-family: "Outfit";
  }

  div p {
    margin: 0;
  }
`;
