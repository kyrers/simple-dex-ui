import useTokenA from "@/hooks/useTokenA";
import useTokenB from "@/hooks/useTokenB";
import TokenCard from "../tokenCard/tokenCard";
import { DashboardWrapper } from "./styles";

export default function Dashboard() {
  const {
    balance: tokenABalance,
    isMinting: isMintingTokenA,
    mint: mintTokenA,
  } = useTokenA();
  const {
    balance: tokenBBalance,
    isMinting: isMintingTokenB,
    mint: mintTokenB,
  } = useTokenB();

  return (
    <DashboardWrapper>
      <TokenCard
        key="Token-A-Card"
        title="Token A"
        balance={tokenABalance}
        isMinting={isMintingTokenA}
        mint={mintTokenA}
      />
      <TokenCard
        key="Token-B-Card"
        title="Token B"
        balance={tokenBBalance}
        isMinting={isMintingTokenB}
        mint={mintTokenB}
      />
    </DashboardWrapper>
  );
}
