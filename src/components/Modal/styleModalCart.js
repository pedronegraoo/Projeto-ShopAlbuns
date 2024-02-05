import styled from "styled-components";
import breakpoints from "../../styles/responsive/breakpoints";

export const WrapperModal = styled.div`
  .titleModal {
  }

  .bodyModal {
    h4 {
    }

    p {
    }
  }

  .footerModal {
    .btnClosed {
      text-decoration: none;
      color: #ff1616a9;
    }
  }
`;

export const Section = styled.section`
  .btnModal {
    width: 9rem;
    height: 2.3rem;
    background-color: #000;
    color: #fff;
    border: none;
    border-radius: 0.2rem;

    font-size: 0.8rem;
    font-family: "Outfit";
    text-transform: uppercase;

    transition: all 0.2s ease;

    &:hover {
      opacity: 0.8;
    }
  }

  @media ${breakpoints.sm} {
    .btnModal {
      width: 8.5rem;
      font-size: 0.7rem;
    }
  }

  @media ${breakpoints.extrasm} {
    .btnModal {
      width: 8rem;
      font-size: 0.7rem;
    }
  }
`;
