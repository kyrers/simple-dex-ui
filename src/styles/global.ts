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
    color: "white",
  },

  "button, input": {
    fontFamily: "inherit",
  },

  html: {
    scrollBehavior: "smooth",
  },

  ":focus": {
    outline: "2px solid coral",
    outlineOffset: "2px",
  },

  "button:focus-visible": {
    outline: "2px solid coral",
    outlineOffset: "2px",
  },

  "input:focus": {
    outline: "2px solid coral",
    outlineOffset: "2px",
  },
});
