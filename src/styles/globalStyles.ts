import { css } from "@emotion/react";

export const globalStyles = css({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },

  "html,body": {
    minHeight: "100vh",
    width: "100%",
    backgroundColor: "#121212",
  },
});
