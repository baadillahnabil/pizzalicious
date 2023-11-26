import { useMemo } from "react";

const Total = ({ data }) => {
  const total = useMemo(() => {
    const totalArr = data.map(({ price, toppings }) => {
      return price + toppings.reduce((acc, { price }) => acc + price, 0);
    });

    return totalArr.reduce((acc, price) => acc + price, 0);
  }, [data]);

  return (
    <div className="flex justify-between text-2xl font-bold text-gray-500 mt-8 items-center bg-gray-200 w-full rounded-lg py-4 px-10">
      <div>Total</div>
      <div>${total}</div>
    </div>
  );
};

export default Total;
