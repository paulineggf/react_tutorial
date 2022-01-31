import React, { createContext } from "react";
import { mealReducer } from "./order-reducer";

import { useReducerWithMiddleware } from "../services/useReducerWithMiddleware";

const OrderContext = createContext();

export const OrderContextProvider = (props) => {
  const { state: meals, dispatchWithMiddleware: dispatchMeal } = useReducerWithMiddleware(
    mealReducer,
    JSON.parse(localStorage.getItem("meals")) || [],
    (state) => localStorage.setItem("meals", JSON.stringify(state))
  );

  const getTotalMeals = () => {
    if (meals.length === 0) {
      return 0;
    }
    return meals.map((meal) => meal.number).reduce((prev, curr) => prev + curr, 0);
  };

  const getTotalAmount = () => {
    return meals.reduce((prev, curr) => prev + curr.number * curr.price, 0);
  };

  return (
    <OrderContext.Provider
      value={{
        meals,
        getTotalMeals,
        getTotalAmount,
        dispatchMeal
      }}
    >
      {props.children}
    </OrderContext.Provider>
  );
};

export default OrderContext;
