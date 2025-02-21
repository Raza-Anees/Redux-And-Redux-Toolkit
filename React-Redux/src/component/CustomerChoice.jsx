import React, { useState } from "react";

import { orderBurger } from "./redux/burger/BurgerActions";
import { connect } from "react-redux";
function CustomerChoice(props) {
  const [number, setNumber] = useState(1);
  console.log(number);
  return (
    <div className="container">
      <h2 className="text">Number of pizzabase available {props.BurgerBuns}</h2>
      <input
        type="text"
        placeholder="enter your number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button className="btn" onClick={() => props.orderBurger(number)}>
        orderPizza
      </button>
    </div>
  );
}
const mapStatetoProp = (state) => {
  return {
    BurgerBuns: state.burger.BurgerBuns,
  };
};
const mapDispatchtoProps = (dispatch) => {
  return {
    orderBurger: (number) => dispatch(orderBurger(number)),
  };
};

export default connect(mapStatetoProp, mapDispatchtoProps)(CustomerChoice);
