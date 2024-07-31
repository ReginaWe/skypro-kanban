import { Link, useNavigate } from "react-router-dom";
import * as S from "./Modal.styled";
import { routePaths } from "../../AppRoutes";
import { useState } from "react";
import { register } from "../../api/user";
import { useUser } from "../../hooks/useUser";

const RegisterPage = () => {
  const { setUser } = useUser();
  const navigate = useNavigate();

  async function handleRegister(event) {
    event.preventDefault();
    if (!formValues.name || formValues.name.trim().length === 0) {
      setError("Не введено имя");
      return;
    }

    if (!formValues.login || formValues.login.trim().length === 0) {
      setError("Не введен логин");
      return;
    }

    if (!formValues.password || formValues.password.trim().length === 0) {
      setError("Не введен пароль");
      return;
    }

    try {
      const response = await register({
        name: formValues.name,
        login: formValues.login,
        password: formValues.password,
      });
      setUser(response);
      navigate(routePaths.MAIN);

      console.log("LOGIN RESPONSE", response);
    } catch (error) {
      console.error(error.message);
      if (error.message === "Failed to fetch") {
        setError("Ошибка соединения");
        return;
      } else {
        setError(error.message);
        return;
      }
    }
  }

  const [formValues, setFormValues] = useState({
    login: "",
    name: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };
  return (
    <>
      <S.ModalGlobalStyle />
      <S.ModalWrapper>
        <S.ModalContainer>
          <S.Modal>
            <S.ModalBlock>
              <S.ModalTitle>
                <h2>Регистрация</h2>
              </S.ModalTitle>
              <S.ModalForm>
                <S.ModalInput
                  placeholder="Имя"
                  onChange={onInputChange}
                  value={formValues.name}
                  name="name"
                  type="text"
                />
                <S.ModalInput
                  placeholder="Эл. почта"
                  onChange={onInputChange}
                  value={formValues.login}
                  name="login"
                  type="email"
                />
                <S.ModalInput
                  placeholder="Пароль"
                  onChange={onInputChange}
                  value={formValues.password}
                  name="password"
                  type="password"
                />
                <br />
                {error && <p>{error}</p>}
                <S.ModalButton onClick={handleRegister}>
                  Зарегистрироваться
                </S.ModalButton>
                <S.ModalFormGroup>
                  <p>
                    Уже есть аккаунт?
                    <Link to={routePaths.LOGIN}>Войдите здесь</Link>
                  </p>
                </S.ModalFormGroup>
              </S.ModalForm>
            </S.ModalBlock>
          </S.Modal>
        </S.ModalContainer>
      </S.ModalWrapper>
    </>
  );
};

export default RegisterPage;
