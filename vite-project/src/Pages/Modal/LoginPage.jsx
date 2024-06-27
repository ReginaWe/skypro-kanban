import { Link, useNavigate } from "react-router-dom";
import { routePaths } from "../../AppRoutes";
import * as S from "./Modal.styled";
import { useState } from "react";
import { login } from "../../api";
import { useUser } from "../../hooks/useUser";

const LoginPage = () => {
  const { setLogin } = useUser()
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    login: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const onLogin = async (event) => {
    event.preventDefault();
    if (!formValues.login || formValues.login.trim().length === 0) {
      setError("Не введен логин");
      return;
    }

    if (!formValues.password || formValues.password.trim().length === 0) {
      setError("Не введен пароль");
      return;
    }

    try {
      const response = await login({
        login: formValues.login,
        password: formValues.password,
      });
      setLogin(response);
      navigate(routePaths.MAIN);

      console.log("LOGIN RESPONSE", response);
    } catch (error) {
      console.error(error.message);

      if (error.message === "Failed to fetch") {
        setError("Ошибка соединения");
        return;
      }
      setError(error.message);
    }
  };

  return (
    <>
      <S.ModalGlobalStyle />
      <S.ModalWrapper>
        <S.ModalContainer>
          <S.Modal>
            <S.ModalBlock>
              <S.ModalTitle>
                <h2>Вход</h2>
              </S.ModalTitle>
              <S.ModalForm onSubmit={onLogin}>
                <S.ModalInput
                  $active={error}
                  placeholder="Эл. почта"
                  name="login"
                  type="email"
                  value={formValues.email}
                  onChange={onInputChange}
                />
                <S.ModalInput
                  $active={error}
                  placeholder="Пароль"
                  name="password"
                  type="password"
                  value={formValues.password}
                  onChange={onInputChange}
                />
                <br />
                {error && <p>{error}</p>}
                <S.ModalButton onClick={onLogin} type="submit">
                  Войти
                </S.ModalButton>
                <S.ModalFormGroup>
                  <p>Нужно зарегистрироваться?</p>
                  <Link to={routePaths.REGISTER}>Регистрируйтесь здесь</Link>
                </S.ModalFormGroup>
              </S.ModalForm>
            </S.ModalBlock>
          </S.Modal>
        </S.ModalContainer>
      </S.ModalWrapper>
    </>
  );
};

export default LoginPage;
