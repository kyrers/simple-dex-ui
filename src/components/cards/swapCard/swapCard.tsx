import { useMemo, useState } from "react";
import {
  SwapStyledForm,
  InputRow,
  SwapButton,
  StyledInputContainer,
} from "./swapCard.styles";
import { BaseCardContainer } from "../cards.styles";

interface Props {
  tokenABalance: number;
  tokenBBalance: number;
  currentRatio: number;
}

export default function SwapCard({
  tokenABalance,
  tokenBBalance,
  currentRatio,
}: Props) {
  const [amount, setAmount] = useState<string>("");
  const [swapFromTokenA, setSwapFromTokenA] = useState<boolean>(true);

  const isSwapDisabled = useMemo(() => {
    const formattedAmount = Number(amount);

    return (
      !formattedAmount ||
      formattedAmount > (swapFromTokenA ? tokenABalance : tokenBBalance)
    );
  }, [amount, swapFromTokenA, tokenABalance, tokenBBalance]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fromToken = swapFromTokenA ? "TOKEN_A" : "TOKEN_B";
    const toToken = swapFromTokenA ? "TOKEN_B" : "TOKEN_A";
    console.log(`## SWAPPING ${amount} ${fromToken} for ${toToken}`);
  };

  return (
    <BaseCardContainer>
      <h1>Swap Tokens</h1>
      <SwapStyledForm onSubmit={handleSubmit}>
        <StyledInputContainer>
          <InputRow>
            <h3>{swapFromTokenA ? "Token A" : "Token B"}</h3>
            <input
              type="number"
              placeholder="Amount to swap"
              required
              value={amount}
              step="any"
              onChange={(e) => setAmount(e.target.value)}
            />
          </InputRow>
          <SwapButton
            type="button"
            onClick={() => setSwapFromTokenA(!swapFromTokenA)}
          >
            {"\u21C5"}
          </SwapButton>
          <InputRow>
            <h3>{swapFromTokenA ? "Token B" : "Token A"}</h3>
            <input type="number" placeholder="Amount received" disabled />
          </InputRow>
        </StyledInputContainer>
        <button disabled={isSwapDisabled} type="submit">
          Swap
        </button>
      </SwapStyledForm>
    </BaseCardContainer>
  );
}
