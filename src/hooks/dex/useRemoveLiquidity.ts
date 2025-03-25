import { useAccount, useReadContract } from "wagmi";
import { SIMPLE_DEX_ABI, SIMPLE_DEX_ADDRESS } from "@/utils/constants";
import { formatEther } from "viem";

const useRemoveLiquidity = () => {
  const { address } = useAccount();
  const { data, refetch, isFetching } = useReadContract({
    abi: SIMPLE_DEX_ABI,
    address: SIMPLE_DEX_ADDRESS,
    functionName: "lpBalances",
    args: [address],
    query: {
      enabled: !!address,
    },
  });

  return {
    lpBalance: Number(formatEther((data as bigint) ?? 0)),
    refetch,
    isFetching,
  };
};

export default useRemoveLiquidity;
