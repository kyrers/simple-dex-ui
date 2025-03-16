import useToken from "@/hooks/useToken";
import TokenAContract from "@/contracts/TokenA.json";
import TokenBContract from "@/contracts/TokenB.json";
import { DashboardWrapper } from "./styles";
import TokenCard from "../cards/token/tokenCard";
import SwapCard from "../cards/swap/swapCard";

export default function Dashboard() {
  const {
    balance: tokenABalance,
    isMinting: isMintingTokenA,
    mint: mintTokenA,
  } = useToken({
    contractAddress: process.env
      .NEXT_PUBLIC_TOKEN_A_CONTRACT_ADDRESS as `0x${string}`,
    contractABI: TokenAContract.abi,
  });

  const {
    balance: tokenBBalance,
    isMinting: isMintingTokenB,
    mint: mintTokenB,
  } = useToken({
    contractAddress: process.env
      .NEXT_PUBLIC_TOKEN_B_CONTRACT_ADDRESS as `0x${string}`,
    contractABI: TokenBContract.abi,
  });

  return (
    <DashboardWrapper>
      <TokenCard
        title="Token A"
        balance={tokenABalance}
        isMinting={isMintingTokenA}
        mint={mintTokenA}
      />
      <TokenCard
        title="Token B"
        balance={tokenBBalance}
        isMinting={isMintingTokenB}
        mint={mintTokenB}
      />
      <SwapCard tokenABalance={tokenABalance} tokenBBalance={tokenBBalance} />
    </DashboardWrapper>
  );
}
