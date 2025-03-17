import { theme } from "./theme";

export const mediaQueries = {
  mobile: `@media (max-width: ${theme.breakpoints.mobile})`,
  tablet: `@media (max-width: ${theme.breakpoints.tablet})`,
  desktop: `@media (max-width: ${theme.breakpoints.desktop})`,
} as const;
