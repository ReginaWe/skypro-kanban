import { useState } from "react";
import { Container } from "../shared.styled";
import * as S from "./Header.styled";

const Header = ({ setCards, cards }) => {
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
          <div className="header__logo _show _light">
            <a href="" target="_self">
              <img src="images/logo.png" alt="logo" />
            </a>
          </div>
          <div className="header__logo _dark">
            <a href="" target="_self">
              <img src="images/logo_dark.png" alt="logo" />
            </a>
          </div>
          <S.HeaderNav>
            <button
              className="header__btn-main-new _hover01"
              onClick={onAddCard}
            >
              <a href="#popNewCard">Создать новую задачу</a>
            </button>
            <div className="header__user _hover02" onClick={handleOpen}>
              Ivan Ivanov
            </div>
            {isOpen && (
              <div className="header__pop-user-set pop-user-set">
                <S.PopUserSetName>Ivan Ivanov</S.PopUserSetName>
                <S.PopUserSetMail>ivan.ivanov@gmail.com</S.PopUserSetMail>
                <S.PopUserSetTheme>
                  <p>Темная тема</p>
                  <input type="checkbox" className="checkbox" name="checkbox" />
                </S.PopUserSetTheme>
                <button type="button" className="_hover03">
                  <a href="#popExit">Выйти</a>
                </button>
              </div>
            )}
          </S.HeaderNav>
        </S.HeaderBlock>
      </Container>
    </S.Header>
  );
};

export default Header;
