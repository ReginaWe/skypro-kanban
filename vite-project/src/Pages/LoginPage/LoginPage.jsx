import * as S from "./LoginPage.styled";

const LoginPage = () => {
  return (
    <S.LoginPage>
      <S.LoginPageContainer>
        <S.LoginPageBlock>
          <S.LoginPageTtl>
            <h2>Вход</h2> {/* !!! */}
          </S.LoginPageTtl>
          <form className="pop-exit__form" id="formExit" action="#">
            <S.PopExitFormGroup>
              <S.PopExitButtonYes id="exitYes">
                <a href="modal/signin.html">Да, выйти</a>{" "}
              </S.PopExitButtonYes>
              <S.PopExitButtonNo id="exitNo">
                <a href="main.html">Нет, остаться</a>{" "}
              </S.PopExitButtonNo>
            </S.PopExitFormGroup>
          </form>
        </S.LoginPageBlock>
      </S.LoginPageContainer>
    </S.LoginPage>
  );
};

export default LoginPage;
