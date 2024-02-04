import styled from "styled-components";
import breakpoints from "../../styles/responsive/breakpoints";

export const WrapperTableCartMobile = styled.div`
  table {
    width: 100%;
  }

  table tbody tr {
    display: flex;
    border-top: 1px solid #cccccc;
  }

  table tbody tr td {
    font-family: "Outfit";
  }

  table tbody tr td:nth-child(2) {
    width: 60%;
    text-transform: capitalize;

    div:nth-child(1) {
      margin-top: 1rem;
    }

    div {
      display: flex;
      margin-left: 1rem;
    }

    div p {
      margin: 0;
    }

    div span {
      font-weight: bold;
    }
  }

  table tbody tr td:nth-child(1) {
    width: 10rem;
  }

  table .imgProduct {
    width: 100%;
    object-fit: cover;
  }

  table tbody tr td:nth-child(3) {
    width: 2rem;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }

  table tbody tr td button {
    color: #000;
    border: none;
    background-color: transparent;
  }

  .emptyCart {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .imgEmptyCart {
      font-size: 7rem;
    }

    p {
      font-size: 1.5rem;
      font-weight: bold;
    }
  }

  @media ${breakpoints.sm} {
    table tbody tr td:nth-child(2) div h5 {
      font-size: 1.2rem;
    }

    table tbody tr td:nth-child(2) div p {
      font-size: 0.9rem;
    }

    table tbody tr td button {
      font-size: 0.9rem;
    }

    .emptyCart {
      .imgEmptyCart {
        font-size: 6rem;
      }

      p {
        font-size: 1.3rem;
        font-weight: bold;
      }
    }
  }

  @media ${breakpoints.extrasm} {
    table tbody tr td:nth-child(2) div h5 {
      font-size: 1.1rem;
    }

    table tbody tr td:nth-child(2) div p {
      font-size: 0.8rem;
    }
  }
`;
