import React, { useContext, useState } from "react";
import { ReactComponent as PurchaseIcon } from "../../img/icons/shopping-buy-purchase-value-svgrepo-com.svg";
import OrderContext from "../../store/order/order-context";
import ModalOrder from "../modal-order/ModalOrder";

import classes from "./Header.module.css";

export default function Header() {
  const { getTotalMeals } = useContext(OrderContext);
  const [modal, setModal] = useState(false);

  const numberMeals = getTotalMeals();

  return (
    <div className={classes.header}>
      <h1>ReactMeals</h1>
      <div className={classes.purchase} onClick={() => setModal(true)}>
        <PurchaseIcon width="24" height="24" className="color__white" />
        <div>Your Cart</div>
        <div>{numberMeals}</div>
      </div>
      <ModalOrder isOpen={modal} setModal={setModal} />
    </div>
  );
}
