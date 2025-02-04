import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./css/index.css";
import App from "./App";
import { ToastContainer } from "react-toastify";
import { CountryProvider } from "./providers/CountryProvider";
import { ProductProvider } from "./providers/ProductProvider";
import { Provider } from "react-redux";
import store from "./redux/store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <CountryProvider>
        <ProductProvider>
          <App />{" "}
        </ProductProvider>
      </CountryProvider>
      <ToastContainer />
    </Provider>
  </BrowserRouter>
);
