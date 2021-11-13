import { useContext, useEffect, useState } from "react";
import { Context as CartContext } from "../context/cartContext";
import { Context as ProductsContext } from "../context/productContext";
export default () => {
  const {
    state: { products },
  } = useContext(ProductsContext);
  const {
    state: { cart },
  } = useContext(CartContext);
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    setCartItems(
      cart.map((prod) => ({
        ...products.find((p) => p.id == prod.id),
        quantity: prod.quantity,
      }))
    );
  }, [cart, products]);
  return [cartItems];
};
