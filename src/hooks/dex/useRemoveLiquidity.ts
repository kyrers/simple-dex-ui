import { useAccount, useReadContract } from "wagmi";
import { SIMPLE_DEX_ABI, SIMPLE_DEX_ADDRESS } from "@/utils/constants";
import { formatEther, parseEther } from "viem";
import { useState } from "react";
import { wagmiConfig } from "@/wagmiConfig";
import { handleTransaction } from "../utils/shared";
import { RemoveLiquidityTransactionParams } from "../utils/types";
import { BASE_TX_PARAMS } from "./utils/constants";
import { simulateContract } from "wagmi/actions";

const useRemoveLiquidity = () => {
  const { address } = useAccount();
  const [isRemovingLiquidity, setIsRemovingLiquidity] =
    useState<boolean>(false);

  const { data, refetch, isFetching } = useReadContract({
    abi: SIMPLE_DEX_ABI,
    address: SIMPLE_DEX_ADDRESS,
    functionName: "lpBalances",
    args: [address],
    query: {
      enabled: !!address,
    },
  });

  const removeLiquidity = async (amount: number) => {
    setIsRemovingLiquidity(true);

    try {
      const txParams: RemoveLiquidityTransactionParams = {
        ...BASE_TX_PARAMS,
        functionName: "removeLiquidity",
        args: [parseEther(amount.toString())],
      };

      await simulateContract(wagmiConfig, txParams);
      await handleTransaction(txParams);
      setIsRemovingLiquidity(false);
    } catch {
      alert("Removing liquidity will fail!");
      setIsRemovingLiquidity(false);
      return;
    }
  };

  return {
    lpBalance: Number(formatEther((data as bigint) ?? 0)),
    isFetching,
    isRemovingLiquidity,
    removeLiquidity,
    refetch,
  };
};

export default useRemoveLiquidity;
