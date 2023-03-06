import React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById("root"));

let rerenderAllTree = (state) => {
  root.render(
    <React.StrictMode>
      <App
        state={state}
        addPost={store.addPost.bind(store)}
        updateNewTextPost={store.updateNewTextPost.bind(store)}
      />
    </React.StrictMode>
  );
};

rerenderAllTree(store.getState());

store.subscribe(rerenderAllTree);

reportWebVitals();
