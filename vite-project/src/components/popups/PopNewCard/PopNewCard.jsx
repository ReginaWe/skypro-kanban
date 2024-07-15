import { useState } from "react";
import { routePaths } from "../../../AppRoutes";
import { useUser } from "../../../hooks/useUser";
import { Link, useNavigate } from "react-router-dom";
import { addTask } from "../../../api/tasks";
import * as S from "./PopNewCard.styled";
import { useTasks } from "../../../hooks/useTasks";
import { ru } from "date-fns/locale/ru";

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

    const title = task.title || "Новая задача";
    const newTask = {
      ...task,
      topic,
      title,
      date,
    };

    if (!task.title || !task.description /* || */ /* !task.date */) {
      setError("Пожалуйста, заполните все поля");
      return;
    }

    addTask({ task: newTask, token: user.user.token })
      .then((response) => {
        setCards(response.tasks);
        navigate(routePaths.MAIN);
      })
      .catch((err) => {
        console.log(err);
        setError("Что-то пошло не так, попробуйте еще раз");
      });
  };

  const getDateFormat = (date) => {
    const formatDate = date.toLocaleDateString("ru-US");
    return <>{formatDate}</>;
  };

  return (
    <S.PopNewCard>
      <S.PopNewCardContainer>
        <S.PopNewCardBlock>
          <S.PopNewCardContent>
            <S.PopNewCardTitle>Создание задачи</S.PopNewCardTitle>
            <Link to={routePaths.MAIN} className="pop-new-card__close">
              &#10006;
            </Link>
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
                <S.DateTitle>Даты</S.DateTitle>
                <S.Calendar
                  locale={ru}
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  footer={getDateFormat(date)}
                />
              </S.PopNewCardCalendar>
            </S.PopNewCardWrap>
            <S.PopNewCardCategories>
              <S.Categories>Категория</S.Categories>
              <S.CategoriesThemes>
                <S.CategoriesTheme
                  $isActive={topic === "Web Design"}
                  className="categories__theme _orange"
                >
                  <label htmlFor="radio1">Web Design</label>
                  <S.RadioInput
                    onChange={(e) => setTopic(e.target.value)}
                    className="_orange"
                    type="radio"
                    name="orange"
                    id="radio1"
                    value={`Web Design`}
                  />
                </S.CategoriesTheme>
                <S.CategoriesTheme
                  $isActive={topic === "Research"}
                  className="categories__theme _green"
                >
                  <label htmlFor="radio2">Research</label>
                  <S.RadioInput
                    onChange={(e) => setTopic(e.target.value)}
                    className="_green"
                    type="radio"
                    name="green"
                    id="radio2"
                    value={`Research`}
                  />
                </S.CategoriesTheme>
                <S.CategoriesTheme
                  $isActive={topic === "Copywriting"}
                  className="categories__theme _purple"
                >
                  <label htmlFor="radio3">Copywriting</label>
                  <S.RadioInput
                    onChange={(e) => setTopic(e.target.value)}
                    className="_purple"
                    type="radio"
                    name="purple"
                    id="radio3"
                    value={`Copywriting`}
                  />
                </S.CategoriesTheme>
              </S.CategoriesThemes>
            </S.PopNewCardCategories>
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
