import { useMemo } from "react";

const Card = ({ image, name, price, toppings }) => {
  const toppingsText = useMemo(() => {
    if (toppings.length <= 0) return "No Toppings";

    const text = toppings.map(({ name }) => name).join(", ");
    const characterLimit = 100;

    if (text.length > characterLimit)
      return `${text.substring(0, characterLimit)}...`;
    return text;
  }, [toppings]);

  return (
    <div className="flex bg-gray-200 rounded-lg p-4">
      <img
        src={image}
        alt="pizza_image"
        className="w-40 min-w-[10rem] h-40 rounded-lg object-cover"
      />
      <div className="flex flex-col p-4 justify-between">
        <div className="">
          <div className="mb-2 text-text text-lg uppercase">{name}</div>
          <div className="text-gray-500/70">{toppingsText}</div>
        </div>
        <div className="text-text mt-4">${price}</div>
      </div>
    </div>
  );
};

export default Card;
