import React from "react";

import classes from "./MealWrapper.module.css";

export default function MealWrapper(props) {
  return <div className={`${classes.mealWrapper} ${props.className}`}>{props.children}</div>;
}
