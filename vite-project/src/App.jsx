import { Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage/MainPage";
import CardPage from "./Pages/CardPage/CardPage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { useState } from "react";

function App() {
  const AppRoutes = {
    MAIN: "/",
    CARD: "/card/:id",
    EXIT: "/exit",
    LOGIN: "/login",
    REGISTER: "/register",
    NOT_FOUND: "*",
  };

  /* const isAuth = true; */

  const [isAuth, setIsAuth] = useState(false);

  return (
    <Routes>
      <Route element={<PrivateRoute isAuth={isAuth} />}>
        <Route path={AppRoutes.MAIN} element={<MainPage />}>
          <Route path={AppRoutes.CARD} element={<CardPage />} />
        </Route>
        {/* Exit */}
      </Route>
      {/*  <Route path={AppRoutes.LOGIN} element={<LoginPage />} /> */}
    </Routes>
  );
}

export default App;
