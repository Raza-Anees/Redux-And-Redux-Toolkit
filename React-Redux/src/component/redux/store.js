import { orderPizza } from "./pizza/PizzaActions";
import PizzaReducer from "./pizza/PizzaReducer";
import { createStore } from "redux";

const store = createStore(
  PizzaReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
