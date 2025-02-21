import { combineReducers } from "redux";
import PizzaReducer from "./pizza/PizzaReducer";
import BurgerReducer from "./burger/BurgerReducer";

export const rootReducer = combineReducers({
  pizza: PizzaReducer,
  burger: BurgerReducer,
});
