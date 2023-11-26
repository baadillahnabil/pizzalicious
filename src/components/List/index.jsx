import { useState } from "react";
import Card from "./components/Card";

import Pizzas from "../../data";
import Modal from "./components/Modal";

const List = ({ handleAddToCart }) => {
  const [showModal, setShowModal] = useState(false);
  const [toppings, setToppings] = useState([]);
  const [selectedPizza, setSelectedPizza] = useState({});

  const handleCardClick = ({ sku, toppings, ...pizza }) => {
    setShowModal(true);
    setSelectedPizza({ sku, ...pizza });
    setToppings(toppings);
    // console.log("yuhuu", { sku, ...pizza });
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="w-52 flex-1 py-10 px-16 overflow-auto max-h-screen">
        <div className="text-4xl text-gray-500 mb-8">Pizza List</div>
        <div className="grid grid-cols-3 gap-8">
          {Pizzas.map(({ sku, toppings, ...pizza }) => (
            <Card
              {...pizza}
              key={sku}
              handleClick={() => handleCardClick({ sku, toppings, ...pizza })}
            />
          ))}
        </div>
      </div>
      <Modal
        show={showModal}
        handleClose={handleCloseModal}
        data={toppings}
        handleAddToCart={({ selectedToppings }) => {
          setShowModal(false);
          handleAddToCart({ selectedPizza, selectedToppings });
        }}
      />
    </>
  );
};

export default List;
