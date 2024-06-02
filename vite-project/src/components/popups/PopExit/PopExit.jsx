import * as S from "./PopExit.styled"

const PopExit = () => {
  return (
    <S.PopExit>
      <S.PopExitContainer>
        <S.PopExitBlock>
          <S.PopExitTtl>
            <h2>Выйти из аккаунта?</h2> {/* !!! */}
          </S.PopExitTtl>
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
        </S.PopExitBlock>
      </S.PopExitContainer>
    </S.PopExit>
  );
};

export default PopExit;
