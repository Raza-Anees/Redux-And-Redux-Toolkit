import { useSelector, useDispatch } from "react-redux";
import { orderPizza } from "./redux/pizza/PizzaActions";

function HookContainer() {
  // if using this hook we dont need to use the mapstatefuntion method
  const PizzaBase = useSelector((state) => state.pizza.PizzaBase);
  //to dispatch the action this hook have to reference to dispatch state of redux
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h2 className="text">Number of pizzabase available- {PizzaBase}</h2>
      <button className="btn" onClick={() => dispatch(orderPizza())}>
        orderPizza
      </button>
    </div>
  );
}

export default HookContainer;
