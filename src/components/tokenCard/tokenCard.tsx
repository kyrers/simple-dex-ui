import { useState } from "react";
import { CardWrapper, StyledForm } from "./styles";

interface Props {
  title: string;
  balance: string;
  mint: (amount: number) => void;
}

export default function TokenCard({ title, balance, mint }: Props) {
  const [amount, setAmount] = useState<number>(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mint(amount);
  };

  return (
    <CardWrapper>
      <h1>{title}</h1>
      <p>Balance: {balance}</p>
      <StyledForm onSubmit={handleSubmit}>
        <input
          id="mintAmount"
          type="number"
          placeholder="Amount of tokens to mint"
          required
          value={amount}
          min={1}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <button disabled={!amount} type="submit">
          Mint
        </button>
      </StyledForm>
    </CardWrapper>
  );
}
