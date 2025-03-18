import { useMemo, useState } from "react";
import { BaseCardWrapper } from "../cards.styles";
import {
  AddLiquidityStyledForm,
  InputContainer,
} from "./addLiquidityCard.styles";

interface Props {
  tokenABalance: string;
  tokenBBalance: string;
}

export default function AddLiquidityCard({
  tokenABalance,
  tokenBBalance,
}: Props) {
  const [tokenAAmount, setTokenAAmount] = useState<number>(0);
  const [tokenBAmount, setTokenBAmount] = useState<number>(0);

  const isAddLiquidityDisabled = useMemo(() => {
    return (
      !tokenAAmount ||
      !tokenBAmount ||
      tokenAAmount > Number(tokenABalance) ||
      tokenBAmount > Number(tokenBBalance)
    );
  }, [tokenAAmount, tokenBAmount, tokenABalance, tokenBBalance]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(
      `## ADDING LIQUIDITY: ${tokenAAmount} TOKEN_A and ${tokenBAmount} TOKEN_B`
    );
  };

  return (
    <BaseCardWrapper>
      <h1>Add Liquidity</h1>
      <AddLiquidityStyledForm onSubmit={handleSubmit}>
        <InputContainer>
          <input
            type="number"
            placeholder="Token A Amount"
            required
            value={tokenAAmount}
            min={1}
            onChange={(e) => setTokenAAmount(Number(e.target.value))}
          />
          <input
            type="number"
            placeholder="Token B Amount"
            required
            value={tokenBAmount}
            min={1}
            onChange={(e) => setTokenBAmount(Number(e.target.value))}
          />
        </InputContainer>
        <button type="submit" disabled={isAddLiquidityDisabled}>
          Add Liquidity
        </button>
      </AddLiquidityStyledForm>
    </BaseCardWrapper>
  );
}
