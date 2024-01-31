import styled from "styled-components";

export const HeaderStyle = styled.header`
  width: 100%;
  height: 4.5rem;
  /* background-color: #949292; */
  background-color: #d2d2d2;
  padding: 0 4%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  box-shadow: 0px 2px 15px #696969ab;

  .linkLogo {
    width: 4rem;
  }

  .linkLogo img {
    width: 4rem;
    /* width: 5%; */
    /* mix-blend-mode: color-burn; */
  }

  nav {
    display: flex;
    gap: 1.4rem;
  }

  .navLinkPages {
    font-family: "Roboto";
    font-size: 1.3rem;
    color: #000;
    text-decoration: none;
    text-transform: capitalize;
  }

  .navLinkPages:hover {
    border-bottom: 1px solid #000;
  }

  .active {
    border-bottom: 1px solid #000;
  }
`;

export const WrapperWalletPerson = styled.div`
  display: flex;
  gap: 0.5rem;

  .person,
  .wallet {
    color: #000;
    font-size: 1.5rem;
    transition: all 0.2s ease;

    &:hover {
      color: #fff;
    }
  }

  .wallet {
    position: relative;
    width: 2rem;
  }

  .numberProducts {
    position: absolute;
    top: 5px;
    right: 0;

    width: 1rem;
    height: 1rem;
    border-radius: 50%;

    background-color: #ff1616a9;
    font-size: 0.7rem;
    color: #fff;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
