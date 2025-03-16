import { useState } from "react";
import { SwapCardWrapper, SwapStyledForm } from "./styles";

interface Props {
  tokenABalance: string;
  tokenBBalance: string;
}

export default function SwapCard({ tokenABalance, tokenBBalance }: Props) {
  const [amount, setAmount] = useState<number>(0);
  const [swapFromTokenA, setSwapFromTokenA] = useState<boolean>(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fromToken = swapFromTokenA ? "TOKEN_A" : "TOKEN_B";
    const toToken = swapFromTokenA ? "TOKEN_B" : "TOKEN_A";
    console.log(`## SWAPPING ${amount} ${fromToken} for ${toToken}`);
  };

  return (
    <SwapCardWrapper>
      <h1>Swap Tokens</h1>
      <div>
        <h3>Token A Balance: {tokenABalance}</h3>
        <h3>Token B Balance: {tokenBBalance}</h3>
      </div>
      <SwapStyledForm onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Amount to swap"
          required
          value={amount}
          min={1}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <select
          value={swapFromTokenA ? "a" : "b"}
          onChange={(e) => setSwapFromTokenA(e.target.value === "a")}
        >
          <option value="a">Swap from Token A</option>
          <option value="b">Swap from Token B</option>
        </select>
        <button disabled={!amount} type="submit">
          Swap
        </button>
      </SwapStyledForm>
    </SwapCardWrapper>
  );
}
