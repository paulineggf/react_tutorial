import ReactDOM from "react-dom";
import { OrderContextProvider } from "./store/order-context";
import "./index.css";
import App from "./scenes/home/App";

ReactDOM.render(
  <OrderContextProvider>
    <App />
  </OrderContextProvider>,
  document.getElementById("root")
);
