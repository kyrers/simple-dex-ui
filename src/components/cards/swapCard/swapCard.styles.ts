import { theme } from "@/styles/theme";
import styled from "@emotion/styled";
import { BaseStyledForm } from "../cards.styles";

export const SwapStyledForm = styled(BaseStyledForm)`
  flex-direction: column;
  gap: ${theme.spacing.md};

  button {
    width: 100%;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  gap: ${theme.spacing.sm};
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
  gap: ${theme.spacing.sm};
`;
