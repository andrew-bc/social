import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { addPost, updateNewTextPost } from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById("root"));

export let rerenderAllTree = (state) => {
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
