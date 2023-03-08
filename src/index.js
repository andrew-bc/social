import React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/redux-store";
import StoreContext from "./StoreContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

let rerenderAllTree = () => {
  root.render(
    <React.StrictMode>
      <StoreContext.Provider value={store}>
        <App />
      </StoreContext.Provider>
    </React.StrictMode>
  );
};

rerenderAllTree(store.getState());

store.subscribe(() => {
  rerenderAllTree(store.getState());
});

reportWebVitals();
