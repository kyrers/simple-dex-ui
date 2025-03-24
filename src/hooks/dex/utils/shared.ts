import { wagmiConfig } from "@/wagmiConfig";
import {
  signTypedData,
  waitForTransactionReceipt,
  writeContract,
} from "wagmi/actions";
import { AddLiquidityTransactionParams } from "./types";
import { parseSignature } from "viem";

interface PermitSignatureParams {
  tokenName: "TokenA" | "TokenB";
  tokenAddress: `0x${string}`;
  owner: `0x${string}`;
  spender: `0x${string}`;
  value: bigint;
  deadline: bigint;
  nonce: bigint;
}

export const getPermitSignature = async ({
  tokenName,
  tokenAddress,
  owner,
  spender,
  value,
  deadline,
  nonce,
}: PermitSignatureParams) => {
  const signature = await signTypedData(wagmiConfig, {
    domain: {
      name: tokenName,
      version: "1",
      chainId: 31337, //local hardhat node
      verifyingContract: tokenAddress,
    },
    types: {
      Permit: [
        { name: "owner", type: "address" },
        { name: "spender", type: "address" },
        { name: "value", type: "uint256" },
        { name: "nonce", type: "uint256" },
        { name: "deadline", type: "uint256" },
      ],
    },
    primaryType: "Permit",
    message: {
      owner,
      spender,
      value,
      nonce,
      deadline,
    },
  });

  return parseSignature(signature);
};

type HandleTransactionParams = AddLiquidityTransactionParams;
export const handleTransaction = async (txParams: HandleTransactionParams) => {
  try {
    const txHash = await writeContract(wagmiConfig, txParams);
    await waitForTransactionReceipt(wagmiConfig, { hash: txHash });
  } catch (error) {
    console.error("## Error executing transaction:", error);
  }
};
