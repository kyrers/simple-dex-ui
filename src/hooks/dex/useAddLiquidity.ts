import { useState } from "react";
import { useAccount } from "wagmi";
import { parseEther } from "viem";
import { simulateContract, readContract } from "wagmi/actions";
import { wagmiConfig } from "@/wagmiConfig";
import TokenAContract from "@/contracts/TokenA.json";
import { AddLiquidityTransactionParams } from "../utils/types";
import { getPermitSignature } from "./utils/shared";
import { handleTransaction } from "../utils/shared";
import { BASE_TX_PARAMS } from "./utils/constants";
import {
  SIMPLE_DEX_ADDRESS,
  TOKEN_A_ADDRESS,
  TOKEN_B_ADDRESS,
} from "@/utils/constants";

const useAddLiquidity = () => {
  const { address } = useAccount();
  const [isAddingLiquidity, setIsAddingLiquidity] = useState<boolean>(false);

  const addLiquidity = async (amountA: number, amountB: number) => {
    setIsAddingLiquidity(true);

    const deadline = BigInt(Math.floor(Date.now() / 1000) + 1800); //30 minutes

    try {
      //Get the current nonce for both tokens
      const tokenANonceResult = await readContract(wagmiConfig, {
        abi: TokenAContract.abi,
        address: TOKEN_A_ADDRESS,
        functionName: "nonces",
        args: [address],
      });

      const tokenBNonceResult = await readContract(wagmiConfig, {
        abi: TokenAContract.abi,
        address: TOKEN_B_ADDRESS,
        functionName: "nonces",
        args: [address],
      });

      const tokenAPermitSignature = await getPermitSignature({
        tokenName: "TokenA",
        tokenAddress: TOKEN_A_ADDRESS,
        owner: address as `0x${string}`,
        spender: SIMPLE_DEX_ADDRESS,
        value: parseEther(amountA.toString()),
        deadline,
        nonce: tokenANonceResult as bigint,
      });

      const tokenBPermitSignature = await getPermitSignature({
        tokenName: "TokenB",
        tokenAddress: TOKEN_B_ADDRESS,
        owner: address as `0x${string}`,
        spender: SIMPLE_DEX_ADDRESS,
        value: parseEther(amountB.toString()),
        deadline,
        nonce: tokenBNonceResult as bigint,
      });

      const txParams: AddLiquidityTransactionParams = {
        ...BASE_TX_PARAMS,
        functionName: "addLiquidityWithPermit",
        args: [
          parseEther(amountA.toString()),
          parseEther(amountB.toString()),
          deadline,
          Number(tokenAPermitSignature.v) ?? tokenAPermitSignature.yParity + 27,
          tokenAPermitSignature.r,
          tokenAPermitSignature.s,
          deadline,
          Number(tokenBPermitSignature.v) ?? tokenBPermitSignature.yParity + 27,
          tokenBPermitSignature.r,
          tokenBPermitSignature.s,
        ],
      };

      await simulateContract(wagmiConfig, txParams);
      await handleTransaction(txParams);
      setIsAddingLiquidity(false);
    } catch {
      alert("Adding liquidity will fail!");
      setIsAddingLiquidity(false);
      return;
    }
  };

  return {
    isAddingLiquidity,
    addLiquidity,
  };
};

export default useAddLiquidity;
