import { useMemo, useState } from "react";
import { BaseCardWrapper, BaseStyledForm } from "../cards.styles";

interface Props {
  title: string;
  balance: number;
  isMinting: boolean;
  mint: (amount: number) => void;
}

export default function TokenCard({ title, balance, isMinting, mint }: Props) {
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
    <BaseCardWrapper>
      <h1>{title}</h1>
      <h3>Balance: {balance}</h3>
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
    </BaseCardWrapper>
  );
}
