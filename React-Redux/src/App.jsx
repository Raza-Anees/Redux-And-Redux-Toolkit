import "./App.css";
import Pizzabox from "./component/Pizzaboxx";
import { Provider } from "react-redux";
import store from "./component/redux/store";
function App() {
  return (
    <>
      <Provider store={store}>
        <Pizzabox />
      </Provider>
    </>
  );
}

export default App;
