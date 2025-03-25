import { useState } from "react";
import { useAccount, useReadContract } from "wagmi";
import { simulateContract } from "wagmi/actions";
import { formatEther, parseEther } from "viem";
import { wagmiConfig } from "@/wagmiConfig";
import TokenAContract from "@/contracts/TokenA.json";
import { handleTransaction } from "./utils/shared";
import { MintTransactionParams } from "./utils/types";
interface UseTokenProps {
  contractAddress: `0x${string}`;
  //Both TokenA and TokenB contracts have the same ABI, so we can define the type like below
  contractABI: typeof TokenAContract.abi;
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
      await handleTransaction(txParams);
      await refetch();
      setIsMinting(false);
    } catch {
      alert("Mint will fail!");
      setIsMinting(false);
      return;
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
