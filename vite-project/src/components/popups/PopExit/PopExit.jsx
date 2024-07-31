import { Link } from "react-router-dom";
import { routePaths } from "../../../AppRoutes";
import * as S from "./PopExit.styled";
import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";

const PopExit = () => {
  const { handleLogOut } = useContext(UserContext);

  return (
    <S.PopExit>
      <S.PopExitContainer>
        <S.PopExitBlock>
          <S.PopExitTtl>
            <h2>Выйти из аккаунта?</h2>
          </S.PopExitTtl>
          <form>
            <S.PopExitFormGroup>
              <S.PopExitButtonYes id="exitYes" onClick={handleLogOut}>
                Да, выйти
              </S.PopExitButtonYes>
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
