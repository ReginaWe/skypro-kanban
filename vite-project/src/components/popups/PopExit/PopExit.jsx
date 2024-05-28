import * as S from "./PopExit.styled"

const PopExit = () => {
  return (
    <div className="pop-exit" id="popExit">
      <S.PopExitContainer>
        <S.PopExitBlock>
          <S.PopExitTtl>
            <h2>Выйти из аккаунта?</h2> {/* !!! */}
          </S.PopExitTtl>
          <form className="pop-exit__form" id="formExit" action="#">
            <S.PopExitFormGroup>
              <button className="pop-exit__exit-yes _hover01" id="exitYes">
                <a href="modal/signin.html">Да, выйти</a>{" "}
              </button>
              <button className="pop-exit__exit-no _hover03" id="exitNo">
                <a href="main.html">Нет, остаться</a>{" "}
              </button>
            </S.PopExitFormGroup>
          </form>
        </S.PopExitBlock>
      </S.PopExitContainer>
    </div>
  );
};

export default PopExit;
