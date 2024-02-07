import styled from "styled-components";

export const DivTableCart = styled.div`
  width: 100%;
  height: 100%;

  font-family: "Roboto";
  position: relative;

  table thead tr {
    border-bottom: 1px solid #cccccc;
  }

  table tbody tr {
    border-bottom: 1px solid #cccccc;
  }

  table tbody tr:last-child {
    border-bottom: none;
  }

  table tr th:nth-child(1) {
    text-align: start;
  }

  table tr th {
    font-family: "Roboto";
    width: 9rem;
    font-size: 1.2rem;
    text-align: center;
  }

  table tr td {
    width: 4rem;
    font-family: "Outfit";
    vertical-align: top;
    text-align: center;
  }

  table .imgProduct {
    width: 50%;
    object-fit: cover;
  }

  table tbody tr td:nth-child(1) {
    width: 20rem;
    display: flex;
    text-transform: capitalize;

    div {
      width: 50%;
      padding-top: 1rem;
    }
  }

  table tbody tr td button {
    /* color: #bbbbbb; */
    color: #000;
    border: none;
    background-color: transparent;
  }

  .emptyCart {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    td {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .imgEmptyCart {
      font-size: 7rem;
    }

    p {
      font-size: 1.5rem;
      font-weight: bold;
    }
  }
`;
