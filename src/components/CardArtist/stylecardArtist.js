import styled from "styled-components";

export const Card = styled.div`
  width: 23rem;
  height: 20rem;
  border-radius: 0.5rem;

  background-color: #000000d2;
  /* background-color: #000000b0; */
  color: white;

  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

  img {
    width: 100%;
    height: 50%;

    object-fit: cover;
    border-radius: 0.5rem 0.5rem 0 0;
  }
`;

export const ContentCard = styled.div`
  height: 50%;

  display: flex;
  justify-content: space-between;
  padding: 1rem;

  position: relative;

  div h2 {
    font-size: 2.1rem;
    font-family: "Bebas Neue";
    letter-spacing: 1px;

    margin-bottom: 1.7rem;
  }

  div p {
    font-family: "Roboto";

    margin: 0;
  }

  .linkSaibaMais {
    width: 6rem;
    height: 3rem;

    background-color: #fff;
    color: #000;

    font-family: "Roboto";
    font-size: 1rem;
    /* text-transform: uppercase; */
    border: none;
    border-radius: 2rem;
    text-decoration: none;

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    bottom: 28px;
    right: 15px;

    transition: all 0.2s ease;

    &:hover {
      /* background-color: #000000d2; */
      /* background-color: #ff000070; */
      background-color: #3b9765;
      color: #fff;
    }
  }
`;
