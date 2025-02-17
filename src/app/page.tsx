"use client";

import useTokenA from "@/hooks/useTokenA";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

export default function Home() {
  const { isConnected } = useAccount();
  const { userBalance } = useTokenA();

  return (
    <div>
      <ConnectButton />
      {!isConnected ? (
        <h2>Connect wallet</h2>
      ) : (
        <p>Token A Balance: {userBalance}</p>
      )}
    </div>
  );
}
