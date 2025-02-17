import { useAccount, useReadContract } from "wagmi";
import TokenAContract from "@/contracts/TokenA.json";

const { abi: TOKEN_A_ABI } = TokenAContract;

const useTokenA = () => {
  const { address } = useAccount();
  const { data, refetch, isFetching } = useReadContract({
    abi: TOKEN_A_ABI,
    address: process.env.NEXT_PUBLIC_TOKEN_A_CONTRACT_ADDRESS as `0x${string}`,
    functionName: "balanceOf",
    args: [address],
    query: {
      enabled: !!address,
    },
  });

  return {
    userBalance: Number(data ?? 0),
    refetch,
    isFetching,
  };
};

export default useTokenA;
