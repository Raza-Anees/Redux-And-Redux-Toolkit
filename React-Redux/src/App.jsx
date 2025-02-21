import "./App.css";
import Pizzabox from "./component/Pizzaboxx";
import { Provider } from "react-redux";
import store from "./component/redux/store";
import HookContainer from "./component/HooksContainer";
import BurgerBox from "./component/BurgerBox";
function App() {
  return (
    <>
      <Provider store={store}>
        <Pizzabox />
        <BurgerBox />
        <HookContainer />
      </Provider>
    </>
  );
}

export default App;
