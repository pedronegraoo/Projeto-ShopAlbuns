import styled from "styled-components";
import breakpoints from "../../styles/responsive/breakpoints";

export const FooterStyle = styled.footer`
  width: 100%;
  height: 100%;
  /* padding: 1.5rem 4%; */
  padding: 3.5rem 4% 0 4%;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  background-color: #000000de;
  color: #fff;

  @media ${breakpoints.sm} {
    padding: 2rem 4% 0 4%;
    gap: 1rem;
  }
`;

export const ContentTop = styled.div`
  display: flex;
  justify-content: space-evenly;

  font-family: "Roboto";

  .redesSociais {
    display: flex;
    gap: 0.7rem;
    margin-bottom: 0.7rem;
  }

  .redesSociais a {
    color: #fff;
    font-size: 1.5rem;
    display: flex;

    transition: all 0.3s ease;
  }

  .redesSociais a:hover {
    scale: 1.15;
    text-shadow: 0px 2px 4px #fff;
  }

  .title-footer {
    font-weight: bold;
    color: #fff;
    margin-bottom: 1rem;
  }

  div ul {
    list-style-type: none;
    padding: 0;
  }

  div ul li {
    cursor: pointer;
    margin-top: 0.5rem;
    transition: all 0.2s ease;
  }

  div ul li:hover {
    opacity: 0.7;
  }

  .divAtendimento {
    .iconWhatsapp,
    .iconEmail {
      margin-right: 0.5rem;
      font-size: 1.2rem;
    }
  }

  @media ${breakpoints.bg} {
    .redesSociais a {
      font-size: 1.3rem;
    }

    .title-footer {
      font-size: 1.2rem;
    }

    div ul li {
      font-size: 0.9rem;
    }
  }

  @media ${breakpoints.md} {
    .redesSociais a {
      font-size: 1.2rem;
    }

    .title-footer {
      font-size: 1rem;
    }

    div ul li {
      font-size: 0.8rem;
    }
  }

  @media ${breakpoints.sm} {
    flex-direction: column;

    .redesSociais a {
      font-size: 1.3rem;
    }

    .title-footer {
      font-size: 1.1rem;
    }

    div ul li {
      font-size: 0.9rem;
    }
  }

  /* @media ${breakpoints.extrasm} {
    .redesSociais a {
      font-size: 1.2rem;
    }

    .title-footer {
      font-size: 1rem;
    }

    div ul li {
      font-size: 0.8rem;
    }
  } */
`;

export const ContentBottom = styled.div`
  .title-footer {
    font-family: "Roboto";
    font-weight: bold;
    color: #fff;

    margin-bottom: 1rem;
  }

  @media ${breakpoints.bg} {
    .title-footer {
      font-size: 1.2rem;
    }

    img {
      width: 80%;
    }
  }

  @media ${breakpoints.md} {
    .title-footer {
      font-size: 1rem;
    }

    img {
      width: 70%;
    }
  }

  @media ${breakpoints.extrasm} {
    .title-footer {
      font-size: 0.9rem;
    }
  }
`;

export const ContentInfoMarca = styled.div`
  margin-top: 1rem;

  .content-info-marca ul {
    list-style-type: none;
    padding: 0;
  }

  .content-info-marca {
    text-align: center;
    color: #9e9595;
  }

  .content-info-marca h4 {
    font-family: "Roboto";
    text-transform: uppercase;
    font-size: 19px;
  }

  .content-info-marca ul li,
  .content-info-marca p {
    font-size: 9px;
    font-family: "Roboto";
  }

  @media ${breakpoints.bg} {
    .content-info-marca h4 {
      font-size: 17px;
    }

    .content-info-marca ul li,
    .content-info-marca p {
      font-size: 7px;
    }
  }

  @media ${breakpoints.sm} {
    .content-info-marca h4 {
      font-size: 16px;
    }

    .content-info-marca ul li,
    .content-info-marca p {
      font-size: 7px;
    }
  }
`;
