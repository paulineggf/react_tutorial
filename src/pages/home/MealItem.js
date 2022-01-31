import React, { useState, useContext, useEffect } from "react";
import Button from "../../components/button/Button";
import OrderContext from "../../store/order/order-context";
import { SET } from "../../store/order/order-actions";

import classes from "./MealItem.module.css";

export default function MealItem({ meal }) {
  const { meals, dispatchMeal } = useContext(OrderContext);
  const [number, setNumber] = useState(0);

  useEffect(() => {
    setNumber(meals.find((m) => m.name === meal.name)?.number || 0);
  }, [meals, meal.name]);

  return (
    <div className={classes.content}>
      <div>
        <h2>{meal.name}</h2>
        <p className={classes.description}>{meal.description}</p>
        <strong className={classes.price}>${meal.price}</strong>
      </div>
      <div className={classes.cta}>
        <div className={classes.amount}>
          <p>Amount</p>
          <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} min="0" />
        </div>
        <Button
          name="+ Add"
          onClick={() => {
            dispatchMeal({ type: SET, value: { name: meal.name, price: meal.price, number } });
          }}
        />
      </div>
    </div>
  );
}
