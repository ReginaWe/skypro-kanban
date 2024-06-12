import { Link, useNavigate } from "react-router-dom";
import { AppRoutes } from "../../../App";
import * as S from "./PopExit.styled"

const PopExit = ({ setIsAuth }) => {
  const navigate = useNavigate()

  function handleLogOut() {
    setIsAuth(false)
    navigate(AppRoutes.MAIN)
  }

  return (
    <S.PopExit>
      <S.PopExitContainer>
        <S.PopExitBlock>
          <S.PopExitTtl>
            <h2>Выйти из аккаунта?</h2>
          </S.PopExitTtl>
          <form className="pop-exit__form" id="formExit" action="#">
            <S.PopExitFormGroup>
              <S.PopExitButtonYes id="exitYes" onClick={handleLogOut}>
                Да, выйти
              </S.PopExitButtonYes>
              {/* <S.PopExitButtonYes id="exitYes" onClick={() => setIsAuth(false)}>
                <Link to={AppRoutes.MAIN}>Да, выйти</Link>
              </S.PopExitButtonYes> */}
              <S.PopExitButtonNo id="exitNo">
                <Link to={AppRoutes.MAIN}>Нет, остаться</Link>
              </S.PopExitButtonNo>
            </S.PopExitFormGroup>
          </form>
        </S.PopExitBlock>
      </S.PopExitContainer>
    </S.PopExit>
  );
};

export default PopExit;
