import { useReducer, createContext } from "react";

export const Context = createContext();

const productsReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCTS":
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, { products: [] });
  const addProducts = () => {
    fetch("/data.json", {
      headers: {
        "Content-Type": "application/json",

        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => dispatch({ type: "ADD_PRODUCTS", payload: data }));
  };

  return (
    <Context.Provider value={{ state, addProducts }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
