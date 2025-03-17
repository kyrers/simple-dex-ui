import styled from "@emotion/styled";
import { BaseStyledForm } from "../cards.styles";

export const SwapStyledForm = styled(BaseStyledForm)`
  flex-direction: column;
  gap: 15px;

  button {
    width: 100%;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  button {
    width: auto;
    height: auto;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 10px;
`;
