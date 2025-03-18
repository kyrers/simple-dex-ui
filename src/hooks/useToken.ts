import { useAccount, useReadContract } from "wagmi";
import {
  simulateContract,
  waitForTransactionReceipt,
  writeContract,
} from "wagmi/actions";
import { wagmiConfig } from "@/wagmiConfig";
import { formatEther, parseEther } from "viem";
import TokenAContract from "@/contracts/TokenA.json";
import { useState } from "react";

interface UseTokenProps {
  contractAddress: `0x${string}`;
  //Both TokenA and TokenB contracts have the same ABI, so we can define the type like below
  contractABI: typeof TokenAContract.abi;
}

export interface MintTransactionParams {
  abi: typeof TokenAContract.abi;
  address: `0x${string}`;
  functionName: string;
  args: [bigint];
}

const useToken = ({ contractAddress, contractABI }: UseTokenProps) => {
  const [isMinting, setIsMinting] = useState<boolean>(false);
  const { address } = useAccount();
  const { data, refetch, isFetching } = useReadContract({
    abi: contractABI,
    address: contractAddress,
    functionName: "balanceOf",
    args: [address],
    query: {
      enabled: !!address,
    },
  });

  const mint = async (amount: number) => {
    setIsMinting(true);
    const txParams: MintTransactionParams = {
      abi: contractABI,
      address: contractAddress,
      functionName: "mint",
      args: [parseEther(amount.toString())],
    };

    try {
      await simulateContract(wagmiConfig, txParams);
      await handleMint(txParams);
    } catch {
      alert("Mint will fail!");
      setIsMinting(false);
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
    } finally {
      setIsMinting(false);
    }
  };

  return {
    isMinting,
    balance: Number(formatEther((data as bigint) ?? 0)),
    isFetching,
    refetch,
    mint,
  };
};

export default useToken;
