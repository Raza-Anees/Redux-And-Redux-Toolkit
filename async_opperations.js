const redux = require("redux");
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunk = require("redux-thunk").thunk;
const axios = require("axios");

const initialState = {
  loading: false,
  products: [],
  error: false,
};

function fetchUser() {
  return {
    type: "FETCH_USER",
  };
}
function fetchSuccess(products) {
  return {
    type: "FETCH_SUCCESS",
    payload: products,
  };
}
function fetchError() {
  return {
    type: "FETCH_ERROR",
  };
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USER":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case "FETCH_ERROR":
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return;
      state;
  }
};

const fetchProduct = () => {
  return function (dispatch) {
    dispatch(fetchUser());
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((res) => {
        // dispatch(fetchSuccess());
        const products = res.data.map((product) => product.title);
        dispatch(fetchSuccess(products));
      })
      .catch((error) => {
        dispatch(fetchError());
      });
  };
};
const store = createStore(reducer, applyMiddleware(thunk));
store.subscribe(() => console.log(store.getState()));
store.dispatch(fetchProduct());
