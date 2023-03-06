import React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import state from "./redux/state";
import { updateNewTextPost, addPost, subscribe } from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById("root"));

let rerenderAllTree = (state) => {
  root.render(
    <React.StrictMode>
      <App
        state={state}
        addPost={addPost}
        updateNewTextPost={updateNewTextPost}
      />
    </React.StrictMode>
  );
};

rerenderAllTree(state);

subscribe(rerenderAllTree);

reportWebVitals();
