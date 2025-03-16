import { useState } from "react";
import { BaseCardWrapper, BaseStyledForm } from "../styles";

interface Props {
  title: string;
  balance: string;
  isMinting: boolean;
  mint: (amount: number) => void;
}

export default function TokenCard({ title, balance, isMinting, mint }: Props) {
  const [amount, setAmount] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mint(amount);
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
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <button disabled={!amount || isMinting} type="submit">
          {isMinting ? "Minting..." : "Mint"}
        </button>
      </BaseStyledForm>
    </BaseCardWrapper>
  );
}
