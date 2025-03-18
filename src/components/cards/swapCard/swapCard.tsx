import { useMemo, useState } from "react";
import {
  InputContainer,
  InputWrapper,
  SwapStyledForm,
} from "./swapCard.styles";
import { BaseCardWrapper } from "../cards.styles";

interface Props {
  tokenABalance: string;
  tokenBBalance: string;
}

export default function SwapCard({ tokenABalance, tokenBBalance }: Props) {
  const [amount, setAmount] = useState<number>(0);
  const [swapFromTokenA, setSwapFromTokenA] = useState<boolean>(true);

  const isSwapDisabled = useMemo(() => {
    return (
      !amount ||
      amount > (swapFromTokenA ? Number(tokenABalance) : Number(tokenBBalance))
    );
  }, [amount, swapFromTokenA, tokenABalance, tokenBBalance]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fromToken = swapFromTokenA ? "TOKEN_A" : "TOKEN_B";
    const toToken = swapFromTokenA ? "TOKEN_B" : "TOKEN_A";
    console.log(`## SWAPPING ${amount} ${fromToken} for ${toToken}`);
  };

  return (
    <BaseCardWrapper>
      <h1>Swap Tokens</h1>
      <SwapStyledForm onSubmit={handleSubmit}>
        <InputContainer>
          <InputWrapper>
            <input
              type="number"
              placeholder="Amount to swap"
              required
              value={amount}
              min={1}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
            <input type="number" placeholder="Amount received" disabled />
          </InputWrapper>
          <button onClick={() => setSwapFromTokenA(!swapFromTokenA)}>
            {"\u21C5"}
          </button>
        </InputContainer>
        <button disabled={isSwapDisabled} type="submit">
          Swap
        </button>
      </SwapStyledForm>
    </BaseCardWrapper>
  );
}
