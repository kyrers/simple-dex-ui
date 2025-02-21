import { CardWrapper } from "./styles";

interface Props {
  title: string;
  balance: number;
  mint: (amount: number) => void;
}

export default function TokenCard({ title, balance, mint }: Props) {
  return (
    <CardWrapper>
      <h1>{title}</h1>
      <p>Balance: {balance}</p>
      <button onClick={() => mint(1000)}>Mint</button>
    </CardWrapper>
  );
}
