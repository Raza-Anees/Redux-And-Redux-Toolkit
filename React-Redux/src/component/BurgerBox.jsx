import React from "react";

import { connect } from "react-redux";
import { orderBurger } from "./redux/burger/BurgerActions";
function BurgerBox(props) {
  console.log(props);

  return (
    <div className="container">
      <h2 className="text">
        Number of BurgerBuns available {props.BurgerBuns}
      </h2>
      <button className="btn" onClick={props.orderBurger}>
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
    orderBurger: () => dispatch(orderBurger()),
  };
};

export default connect(mapStatetoProp, mapDispatchtoProps)(BurgerBox);
