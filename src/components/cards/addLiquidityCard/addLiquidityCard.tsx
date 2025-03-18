import { useMemo, useState } from "react";
import { BaseCardWrapper } from "../cards.styles";
import {
  AddLiquidityStyledForm,
  InputContainer,
} from "./addLiquidityCard.styles";

interface Props {
  tokenABalance: number;
  tokenBBalance: number;
}

export default function AddLiquidityCard({
  tokenABalance,
  tokenBBalance,
}: Props) {
  const [tokenAAmount, setTokenAAmount] = useState<string>("");
  const [tokenBAmount, setTokenBAmount] = useState<string>("");

  const isAddLiquidityDisabled = useMemo(() => {
    const formattedTokenAAmount = Number(tokenAAmount);
    const formattedTokenBAmount = Number(tokenBAmount);

    return (
      !formattedTokenAAmount ||
      !formattedTokenBAmount ||
      formattedTokenAAmount > tokenABalance ||
      formattedTokenBAmount > tokenBBalance
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
            placeholder="Token A amount"
            required
            value={tokenAAmount}
            min={1}
            onChange={(e) => setTokenAAmount(e.target.value)}
          />
          <input
            type="number"
            placeholder="Token B amount"
            required
            value={tokenBAmount}
            min={1}
            onChange={(e) => setTokenBAmount(e.target.value)}
          />
        </InputContainer>
        <button type="submit" disabled={isAddLiquidityDisabled}>
          Add Liquidity
        </button>
      </AddLiquidityStyledForm>
    </BaseCardWrapper>
  );
}
