import { Routes, Route, useNavigate } from "react-router-dom";
import MainPage from "./Pages/MainPage/MainPage";
import CardPage from "./Pages/CardPage/CardPage";
import ExitPage from "./Pages/ExitPage/ExitPage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import LoginPage from "./Pages/LoginPage/LoginPage";
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

 /*  const isAuth = true; */

  const [isAuth, setIsAuth] = useState(false);

  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    setIsAuth(true);
    navigate(AppRoutes.LOGIN)
  }
 
  return (
    <Routes>
      <Route element={<PrivateRoute isAuth={isAuth} />}>
        <Route path={AppRoutes.MAIN} element={<MainPage />}>
          <Route path={AppRoutes.CARD} element={<CardPage />} />
          <Route path={AppRoutes.EXIT} element={<ExitPage />} />
        </Route>
      </Route>
      <Route path={AppRoutes.LOGIN} element={<LoginPage login={login} />} />
    </Routes>
  );
}

export default App;
