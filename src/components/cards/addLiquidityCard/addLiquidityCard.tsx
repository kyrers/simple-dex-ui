import { useMemo, useState } from "react";
import {
  BaseCardContainer,
  BaseInputContainer,
  LiquidityCardStyledForm,
} from "../cards.styles";

interface Props {
  tokenABalance: number;
  tokenBBalance: number;
  isAddingLiquidity: boolean;
  addLiquidity: (amountA: number, amountB: number) => void;
}

export default function AddLiquidityCard({
  tokenABalance,
  tokenBBalance,
  isAddingLiquidity,
  addLiquidity,
}: Props) {
  const [tokenAAmount, setTokenAAmount] = useState<string>("");
  const [tokenBAmount, setTokenBAmount] = useState<string>("");

  const isAddLiquidityDisabled = useMemo(() => {
    const formattedTokenAAmount = Number(tokenAAmount);
    const formattedTokenBAmount = Number(tokenBAmount);

    return (
      isAddingLiquidity ||
      !formattedTokenAAmount ||
      !formattedTokenBAmount ||
      formattedTokenAAmount > tokenABalance ||
      formattedTokenBAmount > tokenBBalance
    );
  }, [
    tokenAAmount,
    tokenBAmount,
    tokenABalance,
    tokenBBalance,
    isAddingLiquidity,
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addLiquidity(Number(tokenAAmount), Number(tokenBAmount));
  };

  return (
    <BaseCardContainer>
      <h1>Add Liquidity</h1>
      <LiquidityCardStyledForm onSubmit={handleSubmit}>
        <BaseInputContainer>
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
        </BaseInputContainer>
        <button type="submit" disabled={isAddLiquidityDisabled}>
          {isAddingLiquidity ? "Adding..." : "Add Liquidity"}
        </button>
      </LiquidityCardStyledForm>
    </BaseCardContainer>
  );
}
