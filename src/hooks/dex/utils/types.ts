import SimpleDexContract from "@/contracts/SimpleDex.json";

export interface BaseTransactionParams {
  abi: typeof SimpleDexContract.abi;
  address: `0x${string}`;
}

export interface AddLiquidityTransactionParams extends BaseTransactionParams {
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
