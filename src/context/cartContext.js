import { useReducer, createContext } from "react";

export const Context = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return state.cart.find(
        (product) => product.id == action.payload.productId
      )
        ? {
            ...state,
            cart: state.cart.map((product) =>
              product.id == action.payload.productId
                ? {
                    ...product,
                    quantity: product.quantity + action.payload.quantity,
                  }
                : product
            ),
          }
        : {
            ...state,
            cart: [
              ...state.cart,
              {
                id: action.payload.productId,
                quantity: action.payload.quantity,
              },
            ],
          };
    case "INC_QUANTITY":
      const product = state.cart.find(
        (product) => product.id == action.payload.productId
      );
      return product.quantity + action.payload.quantity < 1
        ? {
            ...state,
            cart: state.cart.filter(
              (product) => product.id != action.payload.productId
            ),
          }
        : {
            ...state,
            cart: state.cart.map((product) =>
              product.id == action.payload.productId
                ? {
                    ...product,
                    quantity: product.quantity + action.payload.quantity,
                  }
                : product
            ),
          };
    case "REMOVE_ALL":
      return {
        ...state,
        cart: [],
      };
    case "SHOW_CART":
      return { ...state, showCart: !state.showCart };
    default:
      return state;
  }
};

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    cart: [],
    showCart: false,
  });
  const addProduct = (productId, quantity) => {
    console.log(quantity);
    dispatch({ type: "ADD_PRODUCT", payload: { productId, quantity } });
    dispatch({ type: "SHOW_CART" });
  };
  const incQuantity = (productId, quantity) => {
    dispatch({ type: "INC_QUANTITY", payload: { productId, quantity } });
  };
  const removeAll = () => {
    dispatch({ type: "REMOVE_ALL" });
  };
  const toggleCart = () => dispatch({ type: "SHOW_CART" });
  return (
    <Context.Provider
      value={{ state, addProduct, toggleCart, incQuantity, removeAll }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
