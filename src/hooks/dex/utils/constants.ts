import SimpleDexContract from "@/contracts/SimpleDex.json";
import { BaseDexTransactionParams } from "@/hooks/utils/types";
import { SIMPLE_DEX_ADDRESS } from "@/utils/constants";

export const BASE_TX_PARAMS: BaseDexTransactionParams = {
  abi: SimpleDexContract.abi,
  address: SIMPLE_DEX_ADDRESS,
};
