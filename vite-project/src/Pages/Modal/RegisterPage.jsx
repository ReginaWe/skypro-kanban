import { Link, useNavigate } from "react-router-dom";
import * as S from "./Modal.styled";
import { AppRoutes } from "../../App";

const RegisterPage = ({ setIsAuth }) => {

  const navigate = useNavigate();

  function handleRegister() {
    setIsAuth(true);
    navigate(AppRoutes.MAIN);
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
                  <Link to={AppRoutes.MAIN}>Зарегистрироваться</Link>
                </S.ModalButton>
                <S.ModalFormGroup>
                  <p>
                    Уже есть аккаунт?
                    <Link to={AppRoutes.LOGIN}>Войдите здесь</Link>
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
