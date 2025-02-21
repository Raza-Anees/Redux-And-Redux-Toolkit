import React from "react";
import { orderPizza } from "./redux/pizza/PizzaActions";
import { connect } from "react-redux";
function Pizzabox(props) {
  console.log(props);

  return (
    <div className="container">
      <h2 className="text">Number of pizzabase available {props.PizzaBase}</h2>
      <button className="btn" onClick={props.orderPizza}>
        orderPizza
      </button>
    </div>
  );
}
const mapStatetoProp = (state) => {
  return {
    PizzaBase: state.pizza.PizzaBase,
  };
};
const mapDispatchtoProps = (dispatch) => {
  return {
    orderPizza: () => dispatch(orderPizza()),
  };
};

export default connect(mapStatetoProp, mapDispatchtoProps)(Pizzabox);
