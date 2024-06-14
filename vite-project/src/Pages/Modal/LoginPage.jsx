import { Link, useNavigate } from "react-router-dom";
import { routePaths } from "../../AppRoutes";
import * as S from "./Modal.styled";

/* import { ThemeProvider } from "styled-components";
import { useState } from "react"; */
//import * as S from "./LoginPage.styled";

const LoginPage = ({ setIsAuth }) => {
  const navigate = useNavigate();

  function handleLogIn() {
    setIsAuth(true);
    navigate(routePaths.MAIN);
  }
  /*  const [theme, setTheme] = useState("light"); */

  return (
    /*  <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}> */
    <>
      <S.ModalGlobalStyle />
      <S.ModalWrapper>
        <S.ModalContainer>
          <S.Modal>
            <S.ModalBlock>
              <S.ModalTitle>
                <h2>Вход</h2>
              </S.ModalTitle>
              <S.ModalForm>
                <S.ModalInput placeholder="Эл. почта" />
                <S.ModalInput placeholder="Пароль" />
                <S.ModalButton onClick={handleLogIn}>Войти</S.ModalButton>
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

    /* </ThemeProvider> */
  );
};

export default LoginPage;
