import styled from "@emotion/styled";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 1px solid white;
  border-radius: 5px;
  padding: 20px;
  text-align: center;
  width: 100%;
  max-width: 400px;

  h1 {
    margin: 0;
    font-size: 1.5rem;
  }

  h3 {
    margin: 0;
    font-size: 1.1rem;
  }

  @media (max-width: 768px) {
    padding: 15px;
    gap: 15px;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  gap: 10px;
  width: 100%;

  input {
    border: 1px solid transparent;
    border-radius: 5px;
    padding: 8px;
    flex: 1;
    min-width: 0;
    font-size: 1rem;
  }

  button {
    cursor: pointer;
    min-width: 80px;
    padding: 8px 16px;
    border: 1px solid transparent;
    border-radius: 5px;
    background: coral;
    font-size: 1rem;
    white-space: nowrap;

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;

    button {
      width: 100%;
    }
  }
`;
