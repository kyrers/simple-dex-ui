import { mediaQueries } from "@/styles/media";
import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

export const DashboardWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: ${theme.spacing.xl};
  padding: ${theme.spacing.lg};
  flex-wrap: wrap;

  ${mediaQueries.tablet} {
    gap: ${theme.spacing.lg};
    padding: ${theme.spacing.sm};
  }
`;
