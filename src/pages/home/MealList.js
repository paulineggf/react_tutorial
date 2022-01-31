import React from "react";
import MealWrapper from "../../components/meal-wrapper/MealWrapper";
import MealItem from "./MealItem";

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
        <MealItem key={`${meal.name}`} meal={meal} />
      ))}
    </MealWrapper>
  );
}
