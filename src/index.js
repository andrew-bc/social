import React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/redux-store";

const root = ReactDOM.createRoot(document.getElementById("root"));

let rerenderAllTree = (state) => {
  root.render(
    <React.StrictMode>
      <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
    </React.StrictMode>
  );
};

rerenderAllTree(store.getState());

store.subscribe(() => {
  rerenderAllTree(store.getState());
});

reportWebVitals();
