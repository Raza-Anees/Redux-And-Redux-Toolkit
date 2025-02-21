import { ORDER_BURGER } from "./BurgerTypes";

const initialState = {
  BurgerBuns: 1000,
};

const BurgerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_BURGER:
      return {
        ...state,
        BurgerBuns: state.BurgerBuns - action.payload,
        // payload: state.BurgerBuns - action.number,
      };
    default:
      return state;
  }
};
export default BurgerReducer;
