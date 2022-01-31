import React from "react";
import Header from "../../components/header/Header";
import MealList from "./MealList";

import classes from "./App.module.css";

export default function App() {
  return (
    <>
      <Header />
      <div className={classes.content}>
        <MealList />
      </div>
    </>
  );
}
