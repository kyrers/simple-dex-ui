import { mediaQueries } from "@/styles/media";
import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

export const BaseCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.lg};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius};
  padding: ${theme.spacing.lg};
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

  ${mediaQueries.tablet} {
    padding: ${theme.spacing.md};
    gap: ${theme.spacing.md};
  }
`;

export const BaseStyledForm = styled.form`
  display: flex;
  gap: ${theme.spacing.sm};
  width: 100%;

  input {
    border: 1px solid transparent;
    border-radius: ${theme.borderRadius};
    padding: ${theme.spacing.xs};
    flex: 1;
    min-width: 0;
    font-size: 1rem;
  }

  button {
    cursor: pointer;
    padding: ${theme.spacing.xs} ${theme.spacing.md};
    border: 1px solid transparent;
    border-radius: ${theme.borderRadius};
    background: ${theme.colors.primary};
    font-size: 1rem;
    white-space: nowrap;

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  }

  ${mediaQueries.mobile} {
    flex-direction: column;

    button {
      width: 100%;
    }
  }
`;

export const LiquidityCardStyledForm = styled(BaseStyledForm)`
  flex-direction: column;
`;
