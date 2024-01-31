import styled from "styled-components";

export const Section = styled.section`
  .btnModal {
    /* width: 8.5rem; */
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
`;

export const ModalFooter = styled.footer`
  .btnClosed {
    text-decoration: none;
    color: #ff1616a9;
  }
`;
