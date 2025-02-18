import { useAccount, useReadContract } from "wagmi";
import TokenBContract from "@/contracts/TokenB.json";

const { abi: TOKEN_B_ABI } = TokenBContract;

const useTokenB = () => {
  const { address } = useAccount();
  const { data, refetch, isFetching } = useReadContract({
    abi: TOKEN_B_ABI,
    address: process.env.NEXT_PUBLIC_TOKEN_B_CONTRACT_ADDRESS as `0x${string}`,
    functionName: "balanceOf",
    args: [address],
    query: {
      enabled: !!address,
    },
  });

  return {
    balance: Number(data ?? 0),
    refetch,
    isFetching,
  };
};

export default useTokenB;
