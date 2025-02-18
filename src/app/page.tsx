"use client";

import useTokenA from "@/hooks/useTokenA";
import useTokenB from "@/hooks/useTokenB";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

export default function Home() {
  const { isConnected } = useAccount();
  const { balance: tokenABalance } = useTokenA();
  const { balance: tokenBBalance } = useTokenB();

  return (
    <div>
      <ConnectButton />
      {!isConnected ? (
        <h2>Connect wallet</h2>
      ) : (
        <>
          <p>Token A Balance: {tokenABalance}</p>
          <p>Token B Balance: {tokenBBalance}</p>
        </>
      )}
    </div>
  );
}
