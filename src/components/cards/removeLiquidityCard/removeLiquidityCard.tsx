import { useMemo, useState } from "react";
import {
  BalanceContainer,
  BaseCardContainer,
  BaseInputWrapper,
  LiquidityCardStyledForm,
  MaxAmountWrapper,
  Spinner,
} from "../cards.styles";

interface Props {
  lpBalance: number;
  reserveA: number;
  reserveB: number;
  totalLpTokens: number;
  isFetchingLpBalance: boolean;
}

export default function RemoveLiquidityCard({
  lpBalance,
  reserveA,
  reserveB,
  totalLpTokens,
  isFetchingLpBalance,
}: Props) {
  const [amount, setAmount] = useState<string>("");

  const { amountReceivedA, amountReceivedB } = useMemo(() => {
    const lpTokensToBurn = Number(amount);
    if (!lpTokensToBurn) return { amountReceivedA: 0, amountReceivedB: 0 };

    const amountReceivedA = (lpTokensToBurn * reserveA) / totalLpTokens;
    const amountReceivedB = (lpTokensToBurn * reserveB) / totalLpTokens;

    return { amountReceivedA, amountReceivedB };
  }, [amount, reserveA, reserveB, totalLpTokens]);

  const isRemoveLiquidityDisabled = useMemo(() => {
    const formattedAmount = Number(amount);
    return (
      !formattedAmount || formattedAmount > lpBalance || isFetchingLpBalance
    );
  }, [amount, lpBalance, isFetchingLpBalance]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`## REMOVING LIQUIDITY: ${amount} LP TOKENS`);
  };

  return (
    <BaseCardContainer>
      <BalanceContainer isLoading={isFetchingLpBalance}>
        <h3>LP Balance: {lpBalance.toFixed(2)}</h3>
        {isFetchingLpBalance && <Spinner />}
      </BalanceContainer>

      <LiquidityCardStyledForm onSubmit={handleSubmit}>
        <BaseInputWrapper>
          <input
            type="number"
            placeholder="LP tokens to remove"
            required
            value={amount}
            step="any"
            onChange={(e) => setAmount(e.target.value)}
          />
          <MaxAmountWrapper onClick={() => setAmount(lpBalance.toString())}>
            (max {lpBalance.toFixed(2)})
          </MaxAmountWrapper>
        </BaseInputWrapper>

        {!isRemoveLiquidityDisabled && (
          <p>
            You will receive approximately {amountReceivedA.toFixed(2)} TokenA
            and {amountReceivedB.toFixed(2)} TokenB.
          </p>
        )}

        <button disabled={isRemoveLiquidityDisabled} type="submit">
          Remove Liquidity
        </button>
      </LiquidityCardStyledForm>
    </BaseCardContainer>
  );
}
