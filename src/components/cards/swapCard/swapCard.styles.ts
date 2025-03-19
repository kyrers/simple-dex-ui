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
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};
  flex: 1;
  width: 100%;
  position: relative;
`;

export const InputRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  width: 100%;

  input {
    flex: 1;
  }

  h3 {
    min-width: 70px;
  }
`;

export const SwapButton = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  transform: translateY(-50%);
  width: 70px !important;
  height: 20px;

  &:hover {
    background: ${theme.colors.primary};
    border-color: ${theme.colors.primary};
  }
`;
