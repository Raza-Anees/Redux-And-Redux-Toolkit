const redux = require("redux");
const createStore = redux.createStore;
// const action = {
//     type: "order_Pizza",
// };

function orderPizza() {
  return {
    type: "order_Pizza",
  };
}

const initial_state = {
  pizza: 100,
};

const reducer = (state = initial_state, action) => {
  switch (action.type) {
    case "order_Pizza":
      return {
        ...state,
        pizza: state.pizza - 1,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log(store.getState());

store.subscribe(() => console.log("updated state", store.getState()));
store.dispatch(orderPizza());
store.dispatch(orderPizza());
store.dispatch(orderPizza());

// store.subscribe;
