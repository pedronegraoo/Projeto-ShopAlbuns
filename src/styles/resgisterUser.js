import styled from "styled-components";

export const WrapperLinkBackPage = styled.div`
  /* background-color: green; */
  margin-top: 3rem;

  .linkBackPage {
    color: #000;
    font-size: 1.5rem;
    text-decoration: none;
  }
`;

export const WrapperForm = styled.section`
  height: 100%;

  margin-top: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormRegister = styled.form`
  width: 23rem;
  height: 35rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  font-family: "Roboto";

  h3 {
    text-transform: capitalize;
    font-weight: bold;
  }

  .contentForm {
    label {
      font-size: 1rem;
      margin-bottom: 0.3rem;
    }

    input {
      width: 100%;
      height: 2.2rem;
      padding: 0 0.5rem;
      outline: none;
      border: 1px solid #80808057;
      border-radius: 0.3rem;

      &:focus {
        border: 1px solid #000;
      }
    }

    .messageError {
      visibility: hidden;
      margin-block: 0.5rem 0;
      color: red;
    }
  }

  .contentBirthday {
    label {
      width: 100%;
      font-size: 1rem;
      margin-bottom: 0.3rem;
    }

    .inputsBirthday {
      display: flex;
      gap: 0.5rem;

      .inputDay,
      .inputMonth {
        width: 2.5rem;
      }

      .inputYear {
        width: 3.5rem;
      }

      .inputDay,
      .inputMonth,
      .inputYear {
        height: 2.2rem;
        padding: 0 0.5rem;
        outline: none;
        border-radius: 0.3rem;
        border: 1px solid #80808057;

        &:focus {
          border: 1px solid #000;
        }
      }
    }
  }

  button {
    color: #fff;
    background-color: #000;
    border: none;
    border-radius: 0.3rem;
    padding: 0.7rem;
    cursor: pointer;

    font-size: 1rem;
    text-transform: uppercase;

    &:hover {
      opacity: 0.9;
    }
  }
`;
