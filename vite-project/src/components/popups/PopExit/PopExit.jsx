import { Link, useNavigate } from "react-router-dom";
import { routePaths } from "../../../AppRoutes";
import * as S from "./PopExit.styled";

const PopExit = ({ setUser }) => {
  const navigate = useNavigate();

  function handleLogOut() {
    setUser("");
    localStorage.removeItem("user")
    navigate(routePaths.LOGIN);
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
                <Link to={routePathss.MAIN}>Да, выйти</Link>
              </S.PopExitButtonYes> */}
              <S.PopExitButtonNo id="exitNo">
                <Link to={routePaths.MAIN}>Нет, остаться</Link>
              </S.PopExitButtonNo>
            </S.PopExitFormGroup>
          </form>
        </S.PopExitBlock>
      </S.PopExitContainer>
    </S.PopExit>
  );
};

export default PopExit;
