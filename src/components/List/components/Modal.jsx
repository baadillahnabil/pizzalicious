import { useState } from "react";
import clsx from "clsx";
import Checkbox from "./Checkbox";

const Modal = ({ show, data, handleClose, handleAddToCart }) => {
  const [selectedToppings, setSelectedToppings] = useState([]);

  const handleCheck = (topping) => {
    if (selectedToppings.includes(topping)) {
      setSelectedToppings(selectedToppings.filter((t) => t !== topping));
    } else {
      setSelectedToppings([...selectedToppings, topping]);
    }
  };

  return (
    <div
      className={clsx(
        "absolute top-0 left-0 w-screen h-screen bg-gray-600/50 z-10",
        show ? "flex justify-center items-center" : "hidden"
      )}
      onClick={handleClose}
    >
      <div
        className="bg-background py-6 px-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-4xl text-gray-500">Toppings</div>
        <div className="grid grid-cols-3 gap-x-16 gap-y-2 p-3 mt-4">
          {data.map((topping) => (
            <Checkbox
              {...topping}
              key={topping.sku}
              selectedToppings={selectedToppings}
              onCheck={() => handleCheck(topping)}
            />
          ))}
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            className="mt-4 rounded-lg font-bold px-8 py-3 mb-2 bg-red-600 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 hover:bg-red-700 focus:ring-red-900"
            onClick={() => {
              handleAddToCart({ selectedToppings });
              setSelectedToppings([]);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
