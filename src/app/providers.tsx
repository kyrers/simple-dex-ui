"use client";

import { globalStyles } from "@/styles/globalStyles";
import { Global } from "@emotion/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Global styles={globalStyles} />
      {children}
    </>
  );
}
