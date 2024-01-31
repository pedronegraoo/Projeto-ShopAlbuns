import styled from "styled-components";

export const FooterStyle = styled.footer`
  width: 100%;
  height: 32rem;
  /* padding: 1.5rem 4%; */
  padding: 3.5rem 4%;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  background-color: #000000de;
  color: #fff;

  // CONTENT BOTTOM

  .content-bottom {
    display: flex;
    justify-content: space-between;
  }

  .content-bottom div h5 {
    font-family: "Roboto";
    font-weight: bold;
    color: #fff;

    margin-bottom: 1rem;
  }

  .content-bottom div ul,
  .content-info-marca ul {
    list-style-type: none;
    padding: 0;
  }

  .content-bottom div ul li {
    font-family: "Roboto";

    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 0.3rem;
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
`;

export const ContentTop = styled.div`
  display: flex;
  justify-content: space-evenly;

  font-family: "Roboto";

  .redesSociais {
    display: flex;
    justify-content: center;
    gap: 0.7rem;
    margin-bottom: 0.3rem;
  }

  .redesSociais a {
    color: #fff;
    font-size: 1.5rem;

    transition: all 0.3s ease;
  }

  .redesSociais a:hover {
    scale: 1.15;
    text-shadow: 0px 2px 4px #fff;
  }

  div h5 {
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
`;
