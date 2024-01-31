import styled from "styled-components";

export const DivTableCart = styled.div`
  width: 63%;
  font-family: "Roboto";

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
    width: 20rem;
    text-align: start;
  }

  table tr th {
    width: 9rem;
    text-align: center;
  }

  table tr td {
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
`;
