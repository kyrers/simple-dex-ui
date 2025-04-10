import { useReadContract } from "wagmi";
import { SIMPLE_DEX_ABI, SIMPLE_DEX_ADDRESS } from "@/utils/constants";
import useAddLiquidity from "./dex/useAddLiquidity";
import useRemoveLiquidity from "./dex/useRemoveLiquidity";
import { formatEther } from "viem";

const useDex = () => {
  const { data: reserveA, refetch: refetchReserveA } = useReadContract({
    abi: SIMPLE_DEX_ABI,
    address: SIMPLE_DEX_ADDRESS,
    functionName: "reserveA",
  });

  const { data: reserveB, refetch: refetchReserveB } = useReadContract({
    abi: SIMPLE_DEX_ABI,
    address: SIMPLE_DEX_ADDRESS,
    functionName: "reserveB",
  });

  const { data: totalLpTokens, refetch: refetchTotalLpTokens } =
    useReadContract({
      abi: SIMPLE_DEX_ABI,
      address: SIMPLE_DEX_ADDRESS,
      functionName: "totalLpTokens",
    });

  const { isAddingLiquidity, addLiquidity } = useAddLiquidity();
  const {
    lpBalance,
    isFetching: isFetchingLpBalance,
    isRemovingLiquidity,
    removeLiquidity,
    refetch: refetchLpBalance,
  } = useRemoveLiquidity();

  return {
    reserveA: Number(formatEther((reserveA as bigint) ?? 0)),
    reserveB: Number(formatEther((reserveB as bigint) ?? 0)),
    totalLpTokens: Number(formatEther((totalLpTokens as bigint) ?? 0)),
    lpBalance,
    isFetchingLpBalance,
    isAddingLiquidity,
    isRemovingLiquidity,
    refetchReserveA,
    refetchReserveB,
    refetchTotalLpTokens,
    refetchLpBalance,
    addLiquidity,
    removeLiquidity,
  };
};

export default useDex;
