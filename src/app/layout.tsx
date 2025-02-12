import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Simple Dex",
  description:
    "UI to interact with a simple example dex with a constant product formula",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
