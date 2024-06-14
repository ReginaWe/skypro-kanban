import { useState } from "react";
import "../../App.css";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import { cardList } from "../../data";
import { Wrapper } from "../../global.styled";
import { Outlet } from "react-router-dom";

function MainPage({ theme, setTheme }) {
  const [cards, setCards] = useState(cardList);

  function toggleTheme() {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  }

  return (
    <Wrapper>
      {/* <!-- pop-up start--> */} {/* Alt + Shift + A */}
      {/* <PopExit />
      <PopNewCard />
      <PopBrowse /> */}
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
