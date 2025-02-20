import useTokenA from "@/hooks/useTokenA";
import useTokenB from "@/hooks/useTokenB";

export default function TokenInfo() {
  const { balance: tokenABalance } = useTokenA();
  const { balance: tokenBBalance } = useTokenB();

  return (
    <>
      <p>Token A Balance: {tokenABalance}</p>
      <p>Token B Balance: {tokenBBalance}</p>
    </>
  );
}
