import React from "react";

import classes from "./Button.module.css";

export default function Button({
  name,
  onClick,
  type = "button",
  className = "",
  color = "primary"
}) {
  return (
    <button
      className={`${classes.container} ${classes[color]} 
      ${className.split(" ")}`}
      onClick={onClick}
      type={type}
    >
      {name}
    </button>
  );
}
