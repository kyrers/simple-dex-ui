import { TOKEN_A_ABI, TOKEN_B_ABI, SIMPLE_DEX_ABI } from "@/utils/constants";

export interface MintTransactionParams {
  abi: typeof TOKEN_A_ABI | typeof TOKEN_B_ABI;
  address: `0x${string}`;
  functionName: string;
  args: [bigint];
}

export interface BaseDexTransactionParams {
  abi: typeof SIMPLE_DEX_ABI;
  address: `0x${string}`;
}

export interface AddLiquidityTransactionParams
  extends BaseDexTransactionParams {
  functionName: "addLiquidityWithPermit";
  args: [
    bigint, //amountA
    bigint, //amountB
    bigint, //deadline permit A
    number, //v signature A
    `0x${string}`, //r signature A
    `0x${string}`, //s signature A
    bigint, //deadline permit B
    number, //v signature B
    `0x${string}`, //r signature B
    `0x${string}` //s signature B
  ];
}
