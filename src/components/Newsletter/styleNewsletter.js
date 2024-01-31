import styled from "styled-components";

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
    gap: 0.5rem;
  }
`;

// INPUT NEWSLETTER
export const InputNews = styled.input`
  width: 13.5rem;
  height: 2.2rem;
  padding: 0 15px;
  outline: none;
  border: none;
  border-radius: 1rem;

  &:focus {
    border: 1px solid #cccccc;
  }
`;

// BUTTON NEWSLETTER
export const ButtonNews = styled.button`
  width: 7rem;
  height: 2.2rem;
  border: none;
  border-radius: 1rem;
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
