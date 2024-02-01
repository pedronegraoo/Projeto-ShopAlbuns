import styled from "styled-components";
import breakpoints from "../../styles/responsive/breakpoints";

export const WrapperNewsletter = styled.div`
  width: 100%;
  height: 10rem;
  padding: 1.5rem 4%;
  background-color: #cccccc;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-family: "Roboto";

  h3 {
    margin-bottom: 1rem;
  }

  .inputs-newsletter {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    .icon-btn-newsletter {
      display: none;
      align-items: center;
      justify-content: center;

      width: 2rem;
      height: 2rem;
      border: none;
      border-radius: 0.7rem;

      font-size: 0.8rem;
      color: #000000de;

      transition: all 0.3s ease;

      &:hover {
        color: #fff;
        background-color: #000000de;
      }
    }

    @media ${breakpoints.bg} {
      .btn-newsletter {
        display: none;
      }

      .icon-btn-newsletter {
        display: flex;
      }
    }
  }
`;

// INPUT NEWSLETTER
export const InputNews = styled.input`
  width: 13.5rem;
  height: 2.2rem;
  padding: 0 15px;
  outline: none;
  border: none;
  border-radius: 0.7rem;

  &:focus {
    border: 1px solid #cccccc;
  }

  @media ${breakpoints.bg} {
    width: 40%;
  }

  @media ${breakpoints.md} {
    font-size: 0.9rem;
  }

  @media ${breakpoints.md} {
    font-size: 0.8rem;
  }
`;

// BUTTON NEWSLETTER
export const ButtonNews = styled.button`
  width: 7rem;
  height: 2.2rem;
  border: none;
  border-radius: 0.7rem;
  text-transform: uppercase;

  font-size: 0.8rem;
  color: #000000de;
  font-weight: bold;
  font-family: "Roboto";

  transition: all 0.3s ease;

  &:hover {
    color: #fff;
    background-color: #000000de;
  }
`;
