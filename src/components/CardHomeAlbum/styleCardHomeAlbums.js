import styled from "styled-components";

export const CardAlbum = styled.div`
  width: 15rem;
  height: 20rem;

  /* background-color: #000000d2; */
  /* color: #fff; */
  background-color: #f2f1eb;
  color: #000;
  border-radius: 0.5rem;

  /* box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px; */
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  /* box-shadow: 0 2px 10px #000; */

  overflow: hidden;

  img {
    width: 100%;
    height: 70%;

    object-fit: cover;
    border-radius: 0.5rem 0.5rem 0 0;

    transition: all 0.3s ease;

    &:hover {
      scale: 1.05;
    }
  }

  div {
    width: 100%;
    height: 30%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h2 {
    font-size: 2rem;
    font-family: "Bebas Neue";
    letter-spacing: 2px;
    text-transform: uppercase;
    margin: 0;
  }

  p {
    font-size: 1rem;
    font-family: "Outfit";
    margin: 0;
  }
`;
