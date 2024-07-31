import { useState } from "react";
import { Container } from "../../lib/shared.styled";
import * as S from "./Header.styled";
import { Link } from "react-router-dom";
import { useUser } from "../../hooks/useUser";
import { routePaths } from "../../AppRoutes";


const Header = ({ toggleTheme, theme, /* setCards, cards */ }) => {
  const { user } = useUser()
  const [isOpen, setOpen] = useState(false);


  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <S.Header>
      <Container>
        <S.HeaderBlock>
          <S.HeaderLogo>
            <a href="" target="_self">
              <img
                src={`/images/logo${theme === "dark" ? "_dark" : ""}.png`}
                alt="logo"
              />
            </a>
          </S.HeaderLogo>
          <S.HeaderNav>
            <Link to={routePaths.ADD_TASK}><S.HeaderButtonMainNew>
              Создать новую задачу
            </S.HeaderButtonMainNew></Link>
            <S.HeaderUser onClick={handleOpen}>{user.user.name}</S.HeaderUser>
            {isOpen && (
              <S.HeaderPopUserSet>
                <S.PopUserSetName>{user.user.name}</S.PopUserSetName>
                <S.PopUserSetMail>{user.user.login}</S.PopUserSetMail>
                <S.PopUserSetTheme>
                  <p>Темная тема</p>
                  <S.Checkbox
                    type="checkbox"
                    name="checkbox"
                    onClick={toggleTheme}
                  />
                </S.PopUserSetTheme>
                <S.HeaderExitButton>
                  <Link to="/exit">Выйти</Link>
                </S.HeaderExitButton>
              </S.HeaderPopUserSet>
            )}
          </S.HeaderNav>
        </S.HeaderBlock>
      </Container>
    </S.Header>
  );
};

export default Header;
