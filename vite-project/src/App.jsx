import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import PopBrowse from "./components/popups/PopBrowse/PopBrowse";
import PopExit from "./components/popups/PopExit/PopExit";
import PopNewCard from "./components/popups/PopNewCard/PopNewCard";
import { cardList } from "./data";

function App() {
  const [cards, setCards] = useState(cardList)
  return (
    <div className="wrapper">
      {/* <!-- pop-up start--> */} {/* Alt + Shift + A */}
      <PopExit />
      <PopNewCard />
      <PopBrowse />

      <Header setCards={setCards} cards={cards} />
      <Main cardList={cards} />
    </div>
  );
}

export default App;
