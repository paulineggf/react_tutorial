import React from "react";
import MealWrapper from "../../components/MealWrapper/MealWrapper";
import MealItem from "./MealItem";

import classes from "./MealList.module.css";

const meals = [
  {
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99
  },
  {
    name: "Shnitzel",
    description: "A german speciality",
    price: 16.5
  }
];

export default function MealList() {
  return (
    <MealWrapper>
      {meals.map((meal) => (
        <MealItem key={`${meal.name}`} classes={classes} meal={meal} />
      ))}
    </MealWrapper>
  );
}
