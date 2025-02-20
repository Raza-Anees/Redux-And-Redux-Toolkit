// having two item and handling them with single reducers

// const redux = require("redux");
// const createStore = redux.createStore;

// function orderPizza() {
//   return {
//     type: "order_Pizza",
//   };
// }
// function orderBurger() {
//   return {
//     type: "order_Burger",
//   };
// }

// const initial_state = {
//   pizza: 100,
//   burgers: 200,
// };

// const reducer = (state = initial_state, action) => {
//   switch (action.type) {
//     case "order_Pizza":
//       return {
//         ...state,
//         pizza: state.pizza - 1,
//       };
//     case "order_Burger":
//       return {
//         ...state,
//         burgers: state.burgers - 1,
//       };
//     default:
//       return state;
//   }
// };

// const store = createStore(reducer);
// console.log(store.getState());

// store.subscribe(() => console.log("updated state", store.getState()));
// store.dispatch(orderPizza());
// store.dispatch(orderPizza());
// store.dispatch(orderPizza());
// store.dispatch(orderBurger());

const redux = require("redux");
const createStore = redux.createStore;
const conbineReducer = redux.combineReducers;

function orderPizza() {
  return {
    type: "order_Pizza",
  };
}
function orderBurger() {
  return {
    type: "order_Burger",
  };
}

const initial_state_pizza = {
  pizza: 100,
};
const initial_state_burger = {
  burgers: 200,
};

const reducerPizza = (state = initial_state_pizza, action) => {
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

const reducerBurger = (state = initial_state_burger, action) => {
  switch (action.type) {
    case "order_Burger":
      return {
        ...state,
        burgers: state.burgers - 1,
      };
    default:
      return state;
  }
};

const rootReducer = conbineReducer({
  pizza: reducerPizza,
  burger: reducerBurger,
});
const store = createStore(rootReducer);
console.log(store.getState());

store.subscribe(() => console.log("updated state", store.getState()));
store.dispatch(orderPizza());
store.dispatch(orderPizza());
store.dispatch(orderPizza());
store.dispatch(orderBurger());
