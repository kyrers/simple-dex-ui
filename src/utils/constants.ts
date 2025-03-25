import TokenAContract from "@/contracts/TokenA.json";
import TokenBContract from "@/contracts/TokenB.json";
import SimpleDexContract from "@/contracts/SimpleDex.json";

export const TOKEN_A_ADDRESS = process.env
  .NEXT_PUBLIC_TOKEN_A_CONTRACT_ADDRESS as `0x${string}`;
export const TOKEN_A_ABI = TokenAContract.abi;

export const TOKEN_B_ADDRESS = process.env
  .NEXT_PUBLIC_TOKEN_B_CONTRACT_ADDRESS as `0x${string}`;
export const TOKEN_B_ABI = TokenBContract.abi;

export const SIMPLE_DEX_ADDRESS = process.env
  .NEXT_PUBLIC_SIMPLE_DEX_CONTRACT_ADDRESS as `0x${string}`;
export const SIMPLE_DEX_ABI = SimpleDexContract.abi;
