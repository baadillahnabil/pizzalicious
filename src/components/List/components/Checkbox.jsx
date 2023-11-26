import { useMemo } from "react";
const Checkbox = ({ sku, name, price, onCheck, selectedToppings }) => {
  const isChecked = useMemo(() => {
    return selectedToppings.filter((t) => t.sku === sku).length > 0;
  }, [selectedToppings, sku]);

  return (
    <div className="flex items-center flex items-center">
      <input
        id={sku}
        type="checkbox"
        onChange={onCheck}
        checked={isChecked}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-blue-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600"
      />
      <label htmlFor={sku} className="ms-2 text-text">
        {name} (${price})
      </label>
    </div>
  );
};

export default Checkbox;
