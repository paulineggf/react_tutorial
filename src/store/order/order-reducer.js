import { ADD, SET, DELETE } from "./order-actions";

export const mealReducer = (state, action) => {
  if (action.type === SET) {
    const find = state.find((meal) => meal.name === action.value.name);
    if (find) {
      find.number = Number(action.value.number);
    } else {
      state.push({
        name: action.value.name,
        number: Number(action.value.number),
        price: action.value.price
      });
    }
    return [...state];
  } else if (action.type === DELETE) {
    const find = state.find((meal) => meal.name === action.value.name);
    find.number -= 1;
    if (find.number === 0) {
      return state.filter((meal) => meal.name !== action.value.name);
    }
    return [...state];
  } else if (action.type === ADD) {
    const find = state.find((meal) => meal.name === action.value.name);
    find.number += 1;
    return [...state];
  }

  return state;
};
