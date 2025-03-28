import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App"; // Ensure the App component exists in the specified path

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App>
      <div>  this is me dear </div>
      </App>
  </React.StrictMode>
);

