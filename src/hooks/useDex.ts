import useAddLiquidity from "./dex/useAddLiquidity";
import useRemoveLiquidity from "./dex/useRemoveLiquidity";

const useDex = () => {
  const { isAddingLiquidity, addLiquidity } = useAddLiquidity();
  const {
    lpBalance,
    refetch: refetchLpBalance,
    isFetching: isFetchingLpBalance,
  } = useRemoveLiquidity();

  return {
    lpBalance,
    isFetchingLpBalance,
    isAddingLiquidity,
    refetchLpBalance,
    addLiquidity,
  };
};

export default useDex;
