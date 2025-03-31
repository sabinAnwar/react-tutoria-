import React from "react";
import ReactDOM from "react-dom/client";
import Course from "./components/Course"; // Ensure the App component exists in the specified path

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Course />
  </React.StrictMode>
);
