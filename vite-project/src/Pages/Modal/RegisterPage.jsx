import { Link, useNavigate } from "react-router-dom";
import * as S from "./Modal.styled";
import { routePaths } from "../../AppRoutes";

const RegisterPage = ({ setIsAuth }) => {
  const navigate = useNavigate();

  function handleRegister() {
    setIsAuth(true);
    navigate(routePaths.MAIN);
  }
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
                <S.ModalInput placeholder="Имя" />
                <S.ModalInput placeholder="Эл. почта" />
                <S.ModalInput placeholder="Пароль" />
                <S.ModalButton onClick={handleRegister}>
                  <Link to={routePaths.MAIN}>Зарегистрироваться</Link>
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
