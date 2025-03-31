import { useCallback, useState } from "react";
import {
  TOKEN_A_ADDRESS,
  TOKEN_A_ABI,
  TOKEN_B_ABI,
  TOKEN_B_ADDRESS,
} from "@/utils/constants";
import useToken from "@/hooks/useToken";
import useDex from "@/hooks/useDex";
import { DashboardContainer, TabContainer } from "./dashboard.styles";
import TokenCard from "../cards/tokenCard/tokenCard";
import SwapCard from "../cards/swapCard/swapCard";
import AddLiquidityCard from "../cards/addLiquidityCard/addLiquidityCard";
import RemoveLiquidityCard from "../cards/removeLiquidityCard/removeLiquidityCard";

enum TabId {
  MINT = "mint",
  ADD_LIQUIDITY = "add-liquidity",
  REMOVE_LIQUIDITY = "remove-liquidity",
  SWAP = "swap",
}

interface Tab {
  id: TabId;
  label: string;
}

const TABS: readonly Tab[] = [
  {
    id: TabId.MINT,
    label: "Mint",
  },
  {
    id: TabId.ADD_LIQUIDITY,
    label: "Add Liquidity",
  },
  {
    id: TabId.REMOVE_LIQUIDITY,
    label: "Remove liquidity",
  },
  {
    id: TabId.SWAP,
    label: "Swap",
  },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<TabId>(TabId.MINT);

  const {
    balance: tokenABalance,
    isMinting: isMintingTokenA,
    isFetching: isFetchingTokenA,
    mint: mintTokenA,
    refetch: refetchTokenA,
  } = useToken({
    contractAddress: TOKEN_A_ADDRESS,
    contractABI: TOKEN_A_ABI,
  });

  const {
    balance: tokenBBalance,
    isMinting: isMintingTokenB,
    isFetching: isFetchingTokenB,
    mint: mintTokenB,
    refetch: refetchTokenB,
  } = useToken({
    contractAddress: TOKEN_B_ADDRESS,
    contractABI: TOKEN_B_ABI,
  });

  const {
    lpBalance,
    reserveA,
    reserveB,
    totalLpTokens,
    isFetchingLpBalance,
    isFetchingReserveA,
    isFetchingReserveB,
    isFetchingTotalLpTokens,
    isAddingLiquidity,
    refetchLpBalance,
    refetchReserveA,
    refetchReserveB,
    refetchTotalLpTokens,
    addLiquidity,
  } = useDex();

  const refetchBalances = useCallback(async () => {
    await refetchTokenA();
    await refetchTokenB();
    await refetchLpBalance();
    await refetchReserveA();
    await refetchReserveB();
    await refetchTotalLpTokens();
  }, [
    refetchTokenA,
    refetchTokenB,
    refetchLpBalance,
    refetchReserveA,
    refetchReserveB,
    refetchTotalLpTokens,
  ]);

  const handleAddLiquidity = async (amountA: number, amountB: number) => {
    await addLiquidity(amountA, amountB);
    await refetchBalances();
  };

  return (
    <DashboardContainer>
      <TabContainer>
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={activeTab === tab.id ? "active" : ""}
            type="button"
          >
            {tab.label}
          </button>
        ))}
      </TabContainer>

      {activeTab === TabId.MINT && (
        <>
          <TokenCard
            title="Token A"
            balance={tokenABalance}
            isFetching={isFetchingTokenA}
            isMinting={isMintingTokenA}
            mint={mintTokenA}
          />
          <hr />
          <TokenCard
            title="Token B"
            balance={tokenBBalance}
            isFetching={isFetchingTokenB}
            isMinting={isMintingTokenB}
            mint={mintTokenB}
          />
        </>
      )}

      {activeTab === TabId.ADD_LIQUIDITY && (
        <AddLiquidityCard
          tokenABalance={tokenABalance}
          tokenBBalance={tokenBBalance}
          reserveA={reserveA}
          reserveB={reserveB}
          totalLpTokens={totalLpTokens}
          isAddingLiquidity={isAddingLiquidity}
          addLiquidity={handleAddLiquidity}
        />
      )}

      {activeTab === TabId.REMOVE_LIQUIDITY && (
        <RemoveLiquidityCard
          lpBalance={lpBalance}
          reserveA={reserveA}
          reserveB={reserveB}
          totalLpTokens={totalLpTokens}
          isFetchingLpBalance={isFetchingLpBalance}
        />
      )}

      {activeTab === TabId.SWAP && (
        <SwapCard tokenABalance={tokenABalance} tokenBBalance={tokenBBalance} />
      )}
    </DashboardContainer>
  );
}
