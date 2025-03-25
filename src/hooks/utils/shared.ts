import { waitForTransactionReceipt, writeContract } from "wagmi/actions";
import { wagmiConfig } from "@/wagmiConfig";
import { AddLiquidityTransactionParams, MintTransactionParams } from "./types";

type HandleTransactionParams =
  | MintTransactionParams
  | AddLiquidityTransactionParams;

export const handleTransaction = async (txParams: HandleTransactionParams) => {
  try {
    const txHash = await writeContract(wagmiConfig, txParams);
    await waitForTransactionReceipt(wagmiConfig, { hash: txHash });
  } catch (error) {
    console.error("## Error executing transaction:", error);
  }
};
