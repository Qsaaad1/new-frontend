import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { CountryProvider } from "./components/CountryContext"; // Import CountryProvider
import { HelmetProvider } from "react-helmet-async";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HelmetProvider>
    <Provider store={store}>
      <CountryProvider>
        <App />
      </CountryProvider>
    </Provider>
  </HelmetProvider>
);
