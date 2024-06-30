/* import React from "react"; */
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import UserProvider from "./contexts/UserContext.jsx";
import TasksProvider from "./contexts/TasksContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <UserProvider>
      <TasksProvider>
        <App />
      </TasksProvider>
    </UserProvider>
  </BrowserRouter>
);
