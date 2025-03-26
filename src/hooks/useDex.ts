import { useReadContract } from "wagmi";
import { SIMPLE_DEX_ABI, SIMPLE_DEX_ADDRESS } from "@/utils/constants";
import useAddLiquidity from "./dex/useAddLiquidity";
import useRemoveLiquidity from "./dex/useRemoveLiquidity";
import { formatEther } from "viem";

const useDex = () => {
  const {
    data: reserveA,
    refetch: refetchReserveA,
    isFetching: isFetchingReserveA,
  } = useReadContract({
    abi: SIMPLE_DEX_ABI,
    address: SIMPLE_DEX_ADDRESS,
    functionName: "reserveA",
  });

  const {
    data: reserveB,
    refetch: refetchReserveB,
    isFetching: isFetchingReserveB,
  } = useReadContract({
    abi: SIMPLE_DEX_ABI,
    address: SIMPLE_DEX_ADDRESS,
    functionName: "reserveB",
  });

  const {
    data: totalLpTokens,
    refetch: refetchTotalLpTokens,
    isFetching: isFetchingTotalLpTokens,
  } = useReadContract({
    abi: SIMPLE_DEX_ABI,
    address: SIMPLE_DEX_ADDRESS,
    functionName: "totalLpTokens",
  });

  const { isAddingLiquidity, addLiquidity } = useAddLiquidity();
  const {
    lpBalance,
    refetch: refetchLpBalance,
    isFetching: isFetchingLpBalance,
  } = useRemoveLiquidity();

  return {
    reserveA: Number(formatEther((reserveA as bigint) ?? 0)),
    reserveB: Number(formatEther((reserveB as bigint) ?? 0)),
    totalLpTokens: Number(formatEther((totalLpTokens as bigint) ?? 0)),
    lpBalance,
    isFetchingLpBalance,
    isFetchingReserveA,
    isFetchingReserveB,
    isFetchingTotalLpTokens,
    isAddingLiquidity,
    refetchReserveA,
    refetchReserveB,
    refetchTotalLpTokens,
    refetchLpBalance,
    addLiquidity,
  };
};

export default useDex;
