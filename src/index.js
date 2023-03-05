import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

let posts = [
  { id: 1, message: "How are you?" },
  { id: 2, message: "Hello" },
];

let dialogs = [
  { id: 1, name: "Władek" },
  { id: 2, name: "Jacek" },
  { id: 3, name: "Kuba" },
];

let messages = [
  { id: 1, name: "Me", message: "Fine! And you?" },
  { id: 2, name: "Władek", message: "Hello! How are you?" },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>
);
reportWebVitals();
