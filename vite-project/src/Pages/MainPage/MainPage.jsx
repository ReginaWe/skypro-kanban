import { useEffect, useState } from "react";
import "../../App.css";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import { Wrapper } from "../../global.styled";
import { Outlet } from "react-router-dom";
import { getTodos } from "../../api";
import { useUser } from "../../hooks/useUser";
import { useTasks } from "../../hooks/useTasks";

function MainPage({ theme, setTheme }) {
  const {cards, setCards} = useTasks();
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null)
  const { user } = useUser()
  

  function toggleTheme() {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getTodos({
          token: user.user.token,
        })
        setCards(response.tasks)
      } catch (error) {
        console.error(error)
        setError("Ошибка при получении задач")
      } finally {
        setLoading(false)
      }
    }
    fetchData()
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
      {error && <p>{error}</p>}
      {!error && <Main cardList={cards} isLoading={isLoading} />}
    </Wrapper>
  );
}

export default MainPage;
