import { useCallback } from "react";
import TokenAContract from "@/contracts/TokenA.json";
import TokenBContract from "@/contracts/TokenB.json";
import { TOKEN_A_ADDRESS, TOKEN_B_ADDRESS } from "@/utils/constants";
import useToken from "@/hooks/useToken";
import useDex from "@/hooks/useDex";
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
    refetch: refetchTokenA,
  } = useToken({
    contractAddress: TOKEN_A_ADDRESS,
    contractABI: TokenAContract.abi,
  });

  const {
    balance: tokenBBalance,
    isMinting: isMintingTokenB,
    mint: mintTokenB,
    refetch: refetchTokenB,
  } = useToken({
    contractAddress: TOKEN_B_ADDRESS,
    contractABI: TokenBContract.abi,
  });

  const { isAddingLiquidity, addLiquidity } = useDex();

  const refetchBalances = useCallback(async () => {
    await refetchTokenA();
    await refetchTokenB();
  }, [refetchTokenA, refetchTokenB]);

  const handleAddLiquidity = async (amountA: number, amountB: number) => {
    await addLiquidity(amountA, amountB);
    await refetchBalances();
  };

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
        isAddingLiquidity={isAddingLiquidity}
        addLiquidity={handleAddLiquidity}
      />
      <RemoveLiquidityCard lpTokenBalance={0} />
      <SwapCard tokenABalance={tokenABalance} tokenBBalance={tokenBBalance} />
    </DashboardWrapper>
  );
}
