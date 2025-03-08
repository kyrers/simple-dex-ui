import useTokenA from "@/hooks/useTokenA";
import useTokenB from "@/hooks/useTokenB";
import TokenCard from "../tokenCard/tokenCard";
import { DashboardWrapper } from "./styles";

export default function Dashboard() {
  const { balance: tokenABalance, mint: mintTokenA } = useTokenA();
  const { balance: tokenBBalance } = useTokenB();

  return (
    <DashboardWrapper>
      <TokenCard
        key="Token-A-Card"
        title="Token A"
        balance={tokenABalance}
        mint={mintTokenA}
      />
      <TokenCard
        key="Token-B-Card"
        title="Token B"
        balance={tokenBBalance}
        mint={(amount: number) => {
          console.log(`## MINT ${amount} B TOKENS`);
        }}
      />
    </DashboardWrapper>
  );
}
