import { useState } from "react";
import { routePaths } from "../../../AppRoutes";
import { useUser } from "../../../hooks/useUser";
import { useNavigate } from "react-router-dom";
import { API } from "../../../api/tasks";
import * as S from "./PopNewCard.styled";
import { useTasks } from "../../../hooks/useTasks";
import Calendar from "../../Calendar/Calendar";
import CategorieGroup from "../../CategorieGroup/CategorieGroup";

const PopNewCard = () => {
  const { user } = useUser();
  const { setCards } = useTasks();
  const [date, setDate] = useState(new Date());

  const navigate = useNavigate();

  const [topic, setTopic] = useState("");

  const [task, setTask] = useState({
    title: "",
    status: "Без статуса",
    description: "",
  });

  console.log(topic);

  const [error, setError] = useState(null);

  const createTask = (e) => {
    e.preventDefault;
    
    const newTask = {
      ...task,
      topic,
      date,
    };

    if (
      !newTask.title ||
      !newTask.description ||
      !newTask.topic ||
      !newTask.date
    ) {
      setError("Пожалуйста, заполните все поля");
      return;
    }

    API.addTask({ task: newTask, token: user.user.token })
      .then((response) => {
        setCards(response.tasks);
        navigate(routePaths.MAIN);
      })
      .catch((err) => {
        console.log(err);
        setError("Что-то пошло не так, попробуйте еще раз");
      });
  };

  return (
    <S.PopNewCard>
      <S.PopNewCardContainer>
        <S.PopNewCardBlock>
          <S.PopNewCardContent>
            <S.PopNewCardTitle>Создание задачи</S.PopNewCardTitle>
            <S.LinkPop to={routePaths.MAIN}>&#10006;</S.LinkPop>
            <S.PopNewCardWrap>
              <S.PopNewCardForm>
                <S.FormNewBlock>
                  <S.SubTitle>Название задачи</S.SubTitle>
                  <S.FormNewInput
                    type="text"
                    name="title"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus=""
                    onChange={(e) =>
                      setTask({ ...task, title: e.target.value })
                    }
                  />
                </S.FormNewBlock>
                <S.FormNewBlock>
                  <S.SubTitle>Описание задачи</S.SubTitle>
                  <S.FormNewArea
                    name="description"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    onChange={(e) =>
                      setTask({ ...task, description: e.target.value })
                    }
                  ></S.FormNewArea>
                </S.FormNewBlock>
              </S.PopNewCardForm>
              <S.PopNewCardCalendar>
                <Calendar date={date} setDate={setDate} />
              </S.PopNewCardCalendar>
            </S.PopNewCardWrap>
            <CategorieGroup topic={topic} setTopic={setTopic} />
            {error && <p>{error}</p>}
            <S.FormNewCreate onClick={createTask}>
              Создать задачу
            </S.FormNewCreate>
          </S.PopNewCardContent>
        </S.PopNewCardBlock>
      </S.PopNewCardContainer>
    </S.PopNewCard>
  );
};

export default PopNewCard;
