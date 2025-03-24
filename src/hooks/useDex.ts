import useAddLiquidity from "./dex/useAddLiquidity";

const useDex = () => {
  const { isAddingLiquidity, addLiquidity } = useAddLiquidity();

  return {
    isAddingLiquidity,
    addLiquidity,
  };
};

export default useDex;
