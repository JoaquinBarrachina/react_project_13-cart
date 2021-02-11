import React, { useContext, useState, useReducer, useEffect } from "react";
import data from "./data";
import reducer from "./reducer";

const url = "https://course-api.com/react-useReducer-cart-project";

//Create Context
const AppContext = React.createContext();

//Reducer Initial State
const initialState = {
  loading: false,
  cart: [...data],
  total: 0,
  amount: 0,
};

//Create Component Provider
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const remove = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  const amountUp = (id) => {
    dispatch({ type: "INCREASE_AMOUNT", payload: id });
  };

  const amountDown = (id) => {
    dispatch({ type: "DECREASE_AMOUNT", payload: id });
  };

  const fetchData = async () => {
    dispatch({ type: "LOADING" });
    const res = await fetch(url);
    const data = await res.json();
    dispatch({ type: "DISPLAY_ITEMS", payload: data });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
  }, [state.cart]);

  //Provider envuelve a todos los hijos
  return (
    <AppContext.Provider
      value={{ ...state, clearCart, remove, amountDown, amountUp }}
    >
      {children}
    </AppContext.Provider>
  );
};

//Export custom context (Remember, has to start with 'use)
export const useGlobalContext = () => {
  return useContext(AppContext);
};

//Export Context and Provider Component
export { AppContext, AppProvider };
