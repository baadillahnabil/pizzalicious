const Card = ({ image, name, price, originalPrice, handleClick }) => {
  return (
    <div
      className="flex flex-col bg-gray-200 rounded-lg p-4 cursor-pointer align-center"
      onClick={handleClick}
    >
      <img
        src={image}
        alt="pizza_image"
        className="w-full h-52 min-h-[13rem] rounded-lg mb-4 object-cover"
      />
      <div className="flex flex-col h-full justify-center">
        <div className="text-center mb-2 text-gray-500 font-bold text-xl uppercase">
          {name}
        </div>
        <div className="flex justify-center">
          {originalPrice && (
            <div className="line-through text-gray-400 mr-2">
              ${originalPrice}
            </div>
          )}
          <div className="text-text mb-2">${price}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
