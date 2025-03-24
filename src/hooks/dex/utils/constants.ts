import SimpleDexContract from "@/contracts/SimpleDex.json";
import { BaseTransactionParams } from "./types";
import { SIMPLE_DEX_ADDRESS } from "@/utils/constants";

export const BASE_TX_PARAMS: BaseTransactionParams = {
  abi: SimpleDexContract.abi,
  address: SIMPLE_DEX_ADDRESS,
};
