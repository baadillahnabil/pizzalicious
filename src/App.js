import { useState } from "react";

import Cart from "./components/Cart";
import List from "./components/List";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = ({
    selectedPizza: { sku, image, name, price },
    selectedToppings,
  }) => {
    setCartItems([
      ...cartItems,
      { sku, image, name, price, toppings: selectedToppings },
    ]);
  };

  return (
    <div className="flex bg-background">
      <List handleAddToCart={handleAddToCart} />
      <Cart data={cartItems} />
    </div>
  );
}

export default App;
