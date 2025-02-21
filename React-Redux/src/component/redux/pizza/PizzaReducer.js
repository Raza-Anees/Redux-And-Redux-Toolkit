import { ORDER_PIZZA } from "./PizzaTypes";

const initialState = {
  PizzaBase: 1000,
};

const PizzaReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_PIZZA:
      return {
        ...state,
        PizzaBase: state.PizzaBase - 1,
      };
    default:
      return state;
  }
};
export default PizzaReducer;
