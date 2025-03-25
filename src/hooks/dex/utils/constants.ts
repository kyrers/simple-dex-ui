import { SIMPLE_DEX_ABI, SIMPLE_DEX_ADDRESS } from "@/utils/constants";
import { BaseDexTransactionParams } from "@/hooks/utils/types";

export const BASE_TX_PARAMS: BaseDexTransactionParams = {
  abi: SIMPLE_DEX_ABI,
  address: SIMPLE_DEX_ADDRESS,
};
