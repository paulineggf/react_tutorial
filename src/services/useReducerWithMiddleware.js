import { useReducer } from "react";

export const useReducerWithMiddleware = (reducer, initialState, middlewareFn) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const dispatchWithMiddleware = (action) => {
    dispatch(action);
    middlewareFn(state);
  };

  return { state, dispatchWithMiddleware };
};
