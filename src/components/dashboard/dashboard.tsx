import useToken from "@/hooks/useToken";
import TokenAContract from "@/contracts/TokenA.json";
import TokenBContract from "@/contracts/TokenB.json";
import { DashboardWrapper } from "./dashboard.styles";
import TokenCard from "../cards/tokenCard/tokenCard";
import SwapCard from "../cards/swapCard/swapCard";
import AddLiquidityCard from "../cards/addLiquidityCard/addLiquidityCard";
import RemoveLiquidityCard from "../cards/removeLiquidityCard/removeLiquidityCard";

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
      <AddLiquidityCard
        tokenABalance={tokenABalance}
        tokenBBalance={tokenBBalance}
      />
      <RemoveLiquidityCard lpTokenBalance={0} />
      <SwapCard tokenABalance={tokenABalance} tokenBBalance={tokenBBalance} />
    </DashboardWrapper>
  );
}
