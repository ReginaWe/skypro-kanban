import { useState } from "react";
import { Container } from "../shared.styled";
import * as S from "./Header.styled";

const Header = ({ toggleTheme, theme, setCards, cards }) => {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const onAddCard = () => {
    console.log("Добавить карточку");
    const newCards = {
      id: Date.now(),
      title: "TEST",
      topic: "Research",
      date: "19.05.2024",
      status: "Без статуса",
    };
    const newCardList = [...cards, newCards];
    setCards(newCardList);
  };

  return (
    <S.Header>
      <Container>
        <S.HeaderBlock>
          <S.HeaderLogo>
            <a href="" target="_self">
              <img src={`/images/logo${theme === "dark" ? "_dark" : ""}.png`} alt="logo" />
            </a>
            {/* <a href="" target="_self">
              <img src="images/logo.png" alt="logo" />
            </a> */}
          </S.HeaderLogo>
          {/* <S.HeaderLogo>
            <a href="" target="_self">
              <img src="images/logo_dark.png" alt="logo" />
            </a>
          </S.HeaderLogo> */}
          <S.HeaderNav>
            <S.HeaderButtonMainNew onClick={onAddCard}>
              <a href="#popNewCard">Создать новую задачу</a>
            </S.HeaderButtonMainNew>
            <div className="header__user _hover02" onClick={handleOpen}>
              Ivan Ivanov
            </div>
            {isOpen && (
              <div className="header__pop-user-set pop-user-set">
                <S.PopUserSetName>Ivan Ivanov</S.PopUserSetName>
                <S.PopUserSetMail>ivan.ivanov@gmail.com</S.PopUserSetMail>
                <S.PopUserSetTheme>
                  <p>Темная тема</p>
                  <input
                    type="checkbox"
                    className="checkbox"
                    name="checkbox"
                    onClick={toggleTheme}
                  />
                </S.PopUserSetTheme>
                <S.HeaderExitButton>
                  <a href="#popExit">Выйти</a>
                </S.HeaderExitButton>
              </div>
            )}
          </S.HeaderNav>
        </S.HeaderBlock>
      </Container>
    </S.Header>
  );
};

export default Header;
