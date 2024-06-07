import { useState } from "react";
import "../../App.css";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
/* import PopBrowse from "../../components/popups/PopBrowse/PopBrowse";
import PopExit from "../../components/popups/PopExit/PopExit";
import PopNewCard from "../../components/popups/PopNewCard/PopNewCard"; */
import { cardList } from "../../data";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, Wrapper } from "../../global.styled";
import { darkTheme, lightTheme } from "../../components/Themes";

function MainPage() {
  const [theme, setTheme] = useState("light");
  const [cards, setCards] = useState(cardList);

  function toggleTheme() {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Wrapper>
        {/* <!-- pop-up start--> */} {/* Alt + Shift + A */}
        {/* <PopExit />
        <PopNewCard />
        <PopBrowse /> */}
        <Header
          toggleTheme={toggleTheme}
          theme={theme}
          setCards={setCards}
          cards={cards}
        />
        <Main cardList={cards} />
      </Wrapper>
    </ThemeProvider>
  );
}

export default MainPage;
