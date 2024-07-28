import { createContext, useCallback, useState } from "react";
import { API } from "../api/tasks";

export const TasksContext = createContext(null);

const TasksProvider = ({ children }) => {
  const [cards, setCards] = useState(null) // cardList) // [])
  const [error, setError] = useState(null)

  const readTasksFromServer = useCallback(async (token, setLoading) => {
    try {
      const response = await API.getTodos({
        token,
      })
      setCards(response.tasks)
    } catch (error) {
      console.error(error)
      setError("Ошибка при получении задач")
    } finally {
      if (setLoading)
        setLoading(false)
    }
  })

  return (
    <TasksContext.Provider value={{ cards, setCards, readTasksFromServer, error }}>
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
