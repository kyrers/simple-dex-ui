import { useMemo, useState } from "react";
import {
  BalanceContainer,
  BaseCardContainer,
  BaseStyledForm,
  Spinner,
} from "../cards.styles";

interface Props {
  title: string;
  balance: number;
  isFetching: boolean;
  isMinting: boolean;
  mint: (amount: number) => void;
}

export default function TokenCard({
  title,
  balance,
  isFetching,
  isMinting,
  mint,
}: Props) {
  const [amount, setAmount] = useState<string>("");

  const isMintDisabled = useMemo(() => {
    const formattedAmount = Number(amount);
    return !formattedAmount || isMinting;
  }, [amount, isMinting]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mint(Number(amount));
  };

  return (
    <BaseCardContainer>
      <h1>{title}</h1>
      <BalanceContainer isLoading={isFetching}>
        <h3>Balance: {balance}</h3>
        {isFetching && <Spinner />}
      </BalanceContainer>
      <BaseStyledForm onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Amount of tokens to mint"
          required
          value={amount}
          min={1}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button disabled={isMintDisabled} type="submit">
          {isMinting ? "Minting..." : "Mint"}
        </button>
      </BaseStyledForm>
    </BaseCardContainer>
  );
}
