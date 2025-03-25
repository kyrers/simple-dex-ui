import { useMemo, useState } from "react";
import { LiquidityCardStyledForm } from "../cards.styles";
import { RemoveLiquidityCardWrapper } from "./removeLiquidityCard.styles";

interface Props {
  lpBalance: number;
  isFetching: boolean;
}

export default function RemoveLiquidityCard({ lpBalance, isFetching }: Props) {
  const [amount, setAmount] = useState<string>("");

  const isRemoveLiquidityDisabled = useMemo(() => {
    const formattedAmount = Number(amount);
    return !formattedAmount || formattedAmount > lpBalance;
  }, [amount, lpBalance]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`## REMOVING LIQUIDITY: ${amount} LP TOKENS`);
  };

  return (
    <RemoveLiquidityCardWrapper>
      <h1>Remove Liquidity</h1>
      <h3>Balance: {lpBalance}</h3>
      <LiquidityCardStyledForm onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="LP tokens to remove"
          required
          value={amount}
          min={1}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button disabled={isRemoveLiquidityDisabled} type="submit">
          Remove Liquidity
        </button>
      </LiquidityCardStyledForm>
    </RemoveLiquidityCardWrapper>
  );
}
