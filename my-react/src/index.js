import React from "react";
import ReactDOM from "react-dom/client";
import App2 from "./components/App2"; // Ensure the App component exists in the specified path

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App2 />
  </React.StrictMode>
);
