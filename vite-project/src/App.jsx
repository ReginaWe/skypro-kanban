import { Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage/MainPage";
import CardPage from "./Pages/CardPage/CardPage";
import ExitPage from "./Pages/ExitPage/ExitPage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import LoginPage from "./Pages/Modal/LoginPage";
import { useState } from "react";
import RegisterPage from "./Pages/Modal/RegisterPage";

export const AppRoutes = {
  MAIN: "/",
  CARD: "/card/:id",
  EXIT: "/exit",
  LOGIN: "/login",
  REGISTER: "/register",
  NOT_FOUND: "*",
};

function App() {
  /*  const isAuth = true; */

  const [isAuth, setIsAuth] = useState(false);

/*   const navigate = useNavigate(); */

  /* const login = (e) => {
    e.preventDefault();
    setIsAuth(true);
    navigate(AppRoutes.LOGIN);
  }; */

  return (
    <Routes>
      <Route element={<PrivateRoute isAuth={isAuth} />}>
        <Route path={AppRoutes.MAIN} element={<MainPage />}>
          <Route path={AppRoutes.CARD} element={<CardPage />} />
          <Route
            path={AppRoutes.EXIT}
            element={<ExitPage setIsAuth={setIsAuth} />}
          />
        </Route>
      </Route>
      <Route
        path={AppRoutes.LOGIN}
        element={<LoginPage setIsAuth={setIsAuth} />}
      />
      <Route
        path={AppRoutes.REGISTER}
        element={<RegisterPage setIsAuth={setIsAuth} />}
      />
    </Routes>
  );
}

export default App;
