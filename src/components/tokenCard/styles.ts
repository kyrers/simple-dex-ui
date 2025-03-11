import styled from "@emotion/styled";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 1px solid white;
  border-radius: 5px;
  padding: 20px;
  text-align: center;
`;

export const StyledForm = styled.form`
  display: flex;
  gap: 10px;

  input {
    border: 1px solid transparent;
    border-radius: 5px;
    padding: 2px;
  }

  button {
    cursor: pointer;
    width: 50px;
    border: 1px solid transparent;
    border-radius: 5px;
    background: coral;
  }
`;
