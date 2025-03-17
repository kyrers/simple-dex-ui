import { mediaQueries } from "@/styles/media";
import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: ${theme.spacing.xxl};
  max-width: ${theme.breakpoints.desktop};
  margin: 0 auto;
  width: 100%;

  ${mediaQueries.tablet} {
    padding: ${theme.spacing.lg};
  }

  h2 {
    text-align: center;
    margin-top: ${theme.spacing.xxl};
  }
`;

export const ConnectButtonWrapper = styled.div`
  align-self: end;
  margin-bottom: ${theme.spacing.lg};

  ${mediaQueries.tablet} {
    align-self: center;
  }
`;
