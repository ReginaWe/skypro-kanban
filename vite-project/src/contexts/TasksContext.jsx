import { createContext, useState } from "react";
import { cardList } from "../data";

export const TasksContext = createContext(null)

const TasksProvider = ({ children }) => {
    const [cards, setCards] = useState(cardList);
    return (
    <TasksContext.Provider value={{ cards, setCards }}>
        {children}
        </TasksContext.Provider>
)
       
    
}

export default TasksProvider