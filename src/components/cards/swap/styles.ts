import styled from "@emotion/styled";
import { BaseCardWrapper, BaseStyledForm } from "../styles";

export const SwapCardWrapper = styled(BaseCardWrapper)`
  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export const SwapStyledForm = styled(BaseStyledForm)`
  flex-direction: column;
  gap: 15px;

  select {
    border: 1px solid transparent;
    border-radius: 5px;
    padding: 8px;
    font-size: 1rem;
    background: white;
    cursor: pointer;
  }

  button {
    width: 100%;
  }
`;
