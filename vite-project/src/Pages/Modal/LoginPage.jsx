import { Link, useNavigate } from "react-router-dom";
import { AppRoutes } from "../../App";
//import * as S from "./LoginPage.styled";

const LoginPage = ({ setIsAuth }) => {
  const navigate = useNavigate();

  function handleLogIn() {
    setIsAuth(true);
    navigate(AppRoutes.MAIN);
  }

  return (
    <div className="wrapper">
      <div className="container-signin">
        <div className="modal">
          <div className="modal__block">
            <div className="modal__ttl">
              <h2>Вход</h2>
            </div>
            <form className="modal__form-login" id="formLogIn" action="#">
              <input
                className="modal__input"
                type="text"
                name="login"
                id="formlogin"
                placeholder="Эл. почта"
              />
              <input
                className="modal__input"
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
              />
              <button
                className="modal__btn-enter _hover01"
                id="btnEnter"
                onClick={handleLogIn}
              >
                Войти
              </button>
              <div className="modal__form-group">
                <p>Нужно зарегистрироваться?</p>
                <Link to={AppRoutes.REGISTER}>Регистрируйтесь здесь</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
