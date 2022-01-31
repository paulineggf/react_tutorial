import React, { useContext } from "react";
import OrderContext from "../../store/order-context";
import MealWrapper from "../MealWrapper/MealWrapper";
import { createPortal } from "react-dom";
import { ADD, DELETE } from "../../store/order-actions";

import classes from "./ModalOrder.module.css";
import Button from "../Button/Button";

export default function ModalOrder({ isOpen, setModal }) {
  const { meals, getTotalAmount } = useContext(OrderContext);

  if (!isOpen) return <></>;

  return createPortal(
    <>
      <div className={classes.background}></div>
      <MealWrapper className={`${classes.modal}`}>
        {meals.map((meal) => (
          <Item meal={meal} />
        ))}
        <div className={classes.modal__footer}>
          <div className={classes.modal__price}>
            <strong>Total amount</strong>
            <strong>${getTotalAmount().toFixed(2)}</strong>
          </div>

          <div className={classes.buttons}>
            <Button
              name="Close"
              color="secondary"
              className={classes.button}
              onClick={() => setModal(false)}
            />
            <Button name="Order" className={classes.button} onClick={() => console.log("Order")} />
          </div>
        </div>
      </MealWrapper>
    </>,
    document.body
  );
}

function Item({ meal }) {
  const { dispatchMeal } = useContext(OrderContext);

  return (
    <div className={classes.meal}>
      <h2>{meal.name}</h2>
      <p className={classes.description}>{meal.description}</p>
      <div className={classes.meal__footer}>
        <div className={classes.meal__footer_left}>
          <div>
            <strong className={classes.meal__price}>${meal.price}</strong>
          </div>
          <strong className={classes.meal__number}>{meal.number}</strong>
        </div>
        <div>
          <Button
            name="-"
            color="secondary"
            className={classes.button}
            onClick={() =>
              dispatchMeal({
                type: DELETE,
                value: { name: meal.name }
              })
            }
          />
          <Button
            name="+"
            color="secondary"
            className={`${classes.button}`}
            onClick={() =>
              dispatchMeal({
                type: ADD,
                value: { name: meal.name, price: meal.price, number: 1 }
              })
            }
          />
        </div>
      </div>
    </div>
  );
}
