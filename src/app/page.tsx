"use client";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { ConnectButtonWrapper, PageWrapper } from "./page.styles";
import Dashboard from "@/components/dashboard/dashboard";

export default function Home() {
  const { isConnected } = useAccount();

  return (
    <PageWrapper>
      <ConnectButtonWrapper>
        <ConnectButton />
      </ConnectButtonWrapper>

      {!isConnected ? (
        <h2>Please connect a wallet to continue</h2>
      ) : (
        <Dashboard />
      )}
    </PageWrapper>
  );
}
