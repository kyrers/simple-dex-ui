import { useMemo, useState } from "react";
import {
  BaseCardContainer,
  BaseInputContainer,
  BaseInputWrapper,
  LiquidityCardStyledForm,
  MaxAmountWrapper,
} from "../cards.styles";

interface Props {
  tokenABalance: number;
  tokenBBalance: number;
  reserveA: number;
  reserveB: number;
  totalLpTokens: number;
  isAddingLiquidity: boolean;
  addLiquidity: (amountA: number, amountB: number) => void;
}

export default function AddLiquidityCard({
  tokenABalance,
  tokenBBalance,
  isAddingLiquidity,
  addLiquidity,
  reserveA,
  reserveB,
  totalLpTokens,
}: Props) {
  const [tokenAAmount, setTokenAAmount] = useState<string>("");
  const [tokenBAmount, setTokenBAmount] = useState<string>("");

  const currentRatio = useMemo(() => {
    return reserveB / reserveA;
  }, [reserveA, reserveB]);

  const lpTokensReceived = useMemo(() => {
    const amountA = Number(tokenAAmount);
    const amountB = Number(tokenBAmount);

    if (!amountA || !amountB) return 0;

    //First liquidity provider
    if (totalLpTokens === 0) {
      return Math.sqrt(amountA * amountB);
    } else {
      return (amountA * totalLpTokens) / reserveA;
    }
  }, [reserveA, tokenAAmount, tokenBAmount, totalLpTokens]);

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
    isAddingLiquidity,
    tokenABalance,
    tokenBBalance,
  ]);

  const handleTokenAChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const amount = e.target.value;
    setTokenAAmount(amount);

    if (amount && totalLpTokens > 0) {
      const expectedB = Number(amount) * currentRatio;
      setTokenBAmount(expectedB.toString());
    }
  };

  const handleTokenBChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const amount = e.target.value;
    setTokenBAmount(amount);

    if (amount && totalLpTokens > 0) {
      const expectedA = Number(amount) / currentRatio;
      setTokenAAmount(expectedA.toString());
    }
  };

  const handleMaxClick = (token: "A" | "B") => {
    if (token === "A") {
      setTokenAAmount(tokenABalance.toString());
      if (totalLpTokens > 0) {
        setTokenBAmount((tokenABalance * currentRatio).toString());
      }
    } else {
      setTokenBAmount(tokenBBalance.toString());
      if (totalLpTokens > 0) {
        setTokenAAmount((tokenBBalance / currentRatio).toString());
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addLiquidity(Number(tokenAAmount), Number(tokenBAmount));
  };

  return (
    <BaseCardContainer>
      {totalLpTokens === 0 ? (
        <h3>
          You are the first liquidity provider. You will set the initial ratio.
        </h3>
      ) : (
        <h3>Current ratio: 1 TokenA = {currentRatio} TokenB</h3>
      )}

      <LiquidityCardStyledForm onSubmit={handleSubmit}>
        <BaseInputContainer>
          <BaseInputWrapper>
            <input
              type="number"
              placeholder="Token A amount"
              required
              value={tokenAAmount}
              min={1}
              onChange={handleTokenAChange}
            />
            <MaxAmountWrapper onClick={() => handleMaxClick("A")}>
              (max {tokenABalance})
            </MaxAmountWrapper>
          </BaseInputWrapper>
          <BaseInputWrapper>
            <input
              type="number"
              placeholder="Token B amount"
              required
              value={tokenBAmount}
              min={1}
              onChange={handleTokenBChange}
            />
            <MaxAmountWrapper onClick={() => handleMaxClick("B")}>
              (max {tokenBBalance})
            </MaxAmountWrapper>
          </BaseInputWrapper>
        </BaseInputContainer>

        {Number(tokenAAmount) > 0 && Number(tokenBAmount) > 0 && (
          <p>
            You will receive approximately {lpTokensReceived.toFixed(2)} LP
            tokens
          </p>
        )}

        <button type="submit" disabled={isAddLiquidityDisabled}>
          {isAddingLiquidity ? "Adding..." : "Add Liquidity"}
        </button>
      </LiquidityCardStyledForm>
    </BaseCardContainer>
  );
}
