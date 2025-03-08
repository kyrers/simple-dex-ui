import { useAccount, useReadContract } from "wagmi";
import TokenAContract from "@/contracts/TokenA.json";
import {
  simulateContract,
  waitForTransactionReceipt,
  writeContract,
} from "wagmi/actions";
import { wagmiConfig } from "@/wagmiConfig";
import { parseEther } from "viem";

const { abi: TOKEN_A_ABI } = TokenAContract;
interface MintTransactionParams {
  abi: typeof TOKEN_A_ABI;
  address: `0x${string}`;
  functionName: string;
  args: [bigint];
}

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

  const mint = async (amount: number) => {
    const txParams: MintTransactionParams = {
      abi: TOKEN_A_ABI,
      address: process.env
        .NEXT_PUBLIC_TOKEN_A_CONTRACT_ADDRESS as `0x${string}`,
      functionName: "mint",
      args: [parseEther(amount.toString())],
    };

    try {
      await simulateContract(wagmiConfig, txParams);
      handleMint(txParams);
    } catch {
      alert("Mint will fail!");
      return;
    }
  };

  const handleMint = async (txParams: MintTransactionParams) => {
    try {
      const txHash = await writeContract(wagmiConfig, txParams);
      await waitForTransactionReceipt(wagmiConfig, { hash: txHash });
      await refetch();
    } catch (error) {
      console.error("## Error minting:", error);
    }
  };

  return {
    balance: Number(data ?? 0),
    refetch,
    isFetching,
    mint,
  };
};

export default useTokenA;
