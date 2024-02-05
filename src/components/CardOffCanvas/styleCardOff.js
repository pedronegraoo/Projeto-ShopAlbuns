import styled from "styled-components";
import breakpoints from "../../styles/responsive/breakpoints";

export const CardOffCanvas = styled.div`
  width: 100%;
  height: 7rem;
  padding: 0.5rem;
  margin-top: 0.5rem;

  background-color: #fff;
  border: 1px solid #cccccc;
  border-radius: 0.2rem;

  display: flex;
  gap: 1rem;

  img {
    width: 35%;
    object-fit: cover;
  }

  .detailsAlbum {
    width: 50%;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  div h6 {
    font-family: "Roboto";
    margin-top: 0.5rem;
  }

  .priceAlbum {
    font-family: "Outfit";
    font-weight: bold;
    color: #3b9765;
  }

  .priceInput {
    width: 100%;

    display: flex;
    align-items: center;
    // justify-content: space-around;
    gap: 1.5rem;

    p {
      margin: 0;
    }
  }

  @media ${breakpoints.md} {
  }
`;

export const BtnTrash = styled.button`
  color: #bbbbbb;
  border: none;
  background-color: transparent;

  transition: all 0.2s ease;

  &:hover {
    color: #cccccc;
  }
`;
