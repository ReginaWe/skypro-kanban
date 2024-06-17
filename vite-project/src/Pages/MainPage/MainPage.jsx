import { useEffect, useState } from "react";
import "../../App.css";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import { cardList } from "../../data";
import { Wrapper } from "../../global.styled";
import { Outlet } from "react-router-dom";
import { getTodos } from "../../api";

function MainPage({ theme, setTheme }) {
  const [cards, setCards] = useState(cardList);

  function toggleTheme() {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  }

  useEffect(() => {
    getTodos().then((tasks) => {
      console.log(tasks);
      setCards(cards)
    });
  });

  return (
    <Wrapper>
      <Outlet />
      <Header
        toggleTheme={toggleTheme}
        theme={theme}
        setCards={setCards}
        cards={cards}
      />
      <Main cardList={cards} />
    </Wrapper>
  );
}

export default MainPage;
