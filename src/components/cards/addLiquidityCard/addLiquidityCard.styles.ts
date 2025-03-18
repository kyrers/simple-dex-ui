import styled from "@emotion/styled";
import { BaseStyledForm } from "../cards.styles";
import { theme } from "@/styles/theme";

export const AddLiquidityStyledForm = styled(BaseStyledForm)`
  flex-direction: column;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};
  width: 100%;
`;
