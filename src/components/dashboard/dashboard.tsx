import useTokenA from "@/hooks/useTokenA";
import useTokenB from "@/hooks/useTokenB";
import TokenCard from "../tokenCard/tokenCard";
import { DashboardWrapper } from "./styles";

export default function Dashboard() {
  const { balance: tokenABalance } = useTokenA();
  const { balance: tokenBBalance } = useTokenB();

  return (
    <DashboardWrapper>
      <TokenCard
        key="Token-A-Card"
        title="Token A"
        balance={tokenABalance}
        mint={() => {}}
      />
      <TokenCard
        key="Token-B-Card"
        title="Token B"
        balance={tokenBBalance}
        mint={() => {}}
      />
    </DashboardWrapper>
  );
}
