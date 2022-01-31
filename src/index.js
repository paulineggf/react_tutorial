import ReactDOM from "react-dom";
import { OrderContextProvider } from "./store/order/order-context";
import "./index.css";
import App from "./pages/home/App";

ReactDOM.render(
  <OrderContextProvider>
    <App />
  </OrderContextProvider>,
  document.getElementById("root")
);
