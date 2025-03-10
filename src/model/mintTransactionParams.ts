import TokenAContract from "@/contracts/TokenA.json";

export interface MintTransactionParams {
  //Both TokenA and TokenB contracts have the same ABI, so we can define the type like below
  abi: typeof TokenAContract.abi;
  address: `0x${string}`;
  functionName: string;
  args: [bigint];
}
