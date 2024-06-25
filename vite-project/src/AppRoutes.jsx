import { Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage/MainPage";
import CardPage from "./Pages/CardPage/CardPage";
import ExitPage from "./Pages/ExitPage/ExitPage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import LoginPage from "./Pages/Modal/LoginPage";
import { useState } from "react";
import RegisterPage from "./Pages/Modal/RegisterPage";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";

export const routePaths = {
  MAIN: "/",
  CARD: "/card/:id",
  EXIT: "/exit",
  LOGIN: "/login",
  REGISTER: "/register",
  NOT_FOUND: "*",
};

function AppRoutes({ theme, setTheme }) {
  const [user, setUser] = useState(null);

  return (
    <Routes>
      <Route element={<PrivateRoute user={user} />}>
        <Route path={routePaths.MAIN} element={<MainPage theme={theme} setTheme={setTheme} user={user}/>}>
          <Route path={routePaths.CARD} element={<CardPage />} />
          <Route
            path={routePaths.EXIT}
            element={<ExitPage setUser={setUser} />}
          />
        </Route>
      </Route>
      <Route
        path={routePaths.LOGIN}
        element={<LoginPage setUser={setUser} />}
      />
      <Route
        path={routePaths.REGISTER}
        element={<RegisterPage setUser={setUser} />}
      />
      <Route path={routePaths.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
