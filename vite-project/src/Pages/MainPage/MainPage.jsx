import { useEffect, useState } from "react";
import "../../App.css";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import { Wrapper } from "../../global.styled";
import { Outlet } from "react-router-dom";
import { useUser } from "../../hooks/useUser";
import { useTasks } from "../../hooks/useTasks";

function MainPage({ theme, setTheme }) {
  const { cards, setCards, readTasksFromServer, error } = useTasks();
  const [isLoading, setLoading] = useState(true);
  const { user } = useUser();

  function toggleTheme() {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  }

  useEffect(() => {
    if (!cards)
      readTasksFromServer(user.user.token, setLoading);
  }, [user]);

  return (
    <Wrapper>
      <Outlet />
      <Header
        toggleTheme={toggleTheme}
        theme={theme}
        setCards={setCards}
        cards={cards}
      />
      {error ? <p>{error}</p> : <Main cardList={cards} isLoading={isLoading} />}
    </Wrapper>
  );
}

export default MainPage;
