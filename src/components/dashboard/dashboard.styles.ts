import { mediaQueries } from "@/styles/media";
import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: ${theme.spacing.xl};
  padding: ${theme.spacing.lg};

  ${mediaQueries.tablet} {
    gap: ${theme.spacing.lg};
    padding: ${theme.spacing.sm};
  }
`;

export const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: ${theme.spacing.lg};
  padding-bottom: ${theme.spacing.sm};
  border-bottom: 1px solid ${theme.colors.border};
  width: 100%;

  button {
    background: none;
    border: none;
    cursor: pointer;
    color: ${theme.colors.text};
    padding: ${theme.spacing.sm} ${theme.spacing.md};
    font-size: 16px;
    transition: opacity 0.2s ease;

    &.active {
      font-weight: bold;
      border-bottom: 1px solid ${theme.colors.primary};
    }

    &:hover {
      opacity: 0.8;
    }

    &:focus {
      outline: none;
    }
  }

  ${mediaQueries.tablet} {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    padding: 0 ${theme.spacing.sm} ${theme.spacing.sm};

    &::-webkit-scrollbar {
      display: none;
    }

    button {
      padding: ${theme.spacing.xs} ${theme.spacing.sm};
      font-size: 14px;
      white-space: nowrap;
    }
  }

  ${mediaQueries.mobile} {
    justify-content: flex-start;
  }
`;
