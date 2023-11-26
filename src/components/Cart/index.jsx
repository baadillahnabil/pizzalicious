import { useMemo } from "react";

import Card from "./components/Card";
import Total from "./components/Total";

const Cart = ({ data }) => {
  const isDataEmpty = useMemo(() => data.length <= 0, [data]);
  const cartTitle = <div className="text-4xl text-gray-500 mb-8">Cart</div>;

  return (
    <div className="flex flex-col justify-between w-2/6 h-screen bg-gray-100 py-10 px-8 overflow-auto max-h-screen relative">
      {isDataEmpty && cartTitle}
      <div>
        {!isDataEmpty && cartTitle}
        {data.length <= 0 ? (
          <div className="text-center text-2xl text-text px-20">
            The shopping cart is still empty, click item to add to cart
          </div>
        ) : (
          <div className="grid grid-col-1 gap-8">
            {data.map((cartItem) => (
              <Card
                {...cartItem}
                key={`${cartItem.sku}_${cartItem.toppings
                  .map(({ sku }) => sku)
                  .join("_")}`}
              />
            ))}
          </div>
        )}
      </div>
      <Total data={data} />
    </div>
  );
};

export default Cart;
