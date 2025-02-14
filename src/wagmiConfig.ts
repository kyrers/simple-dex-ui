import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { hardhat } from "viem/chains";

if (!process.env.NEXT_PUBLIC_REOWN_PROJECT_ID) {
  throw new Error("No reown ID available via env vars");
}

export const wagmiConfig = getDefaultConfig({
  appName: "Simple Dex",
  projectId: process.env.NEXT_PUBLIC_REOWN_PROJECT_ID,
  chains: [hardhat],
  ssr: true,
});
