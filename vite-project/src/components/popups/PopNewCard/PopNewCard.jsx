import { useState } from "react";
import Calendar from "../../Calendar/Calendar";
import { routePaths } from "../../../AppRoutes";
import { useUser } from "../../../hooks/useUser";
import { Link, useNavigate } from "react-router-dom";
import { addTask } from "../../../api/tasks";
import * as S from "./PopNewCard.styled";
import { useTasks } from "../../../hooks/useTasks";

const PopNewCard = () => {
  const { user } = useUser();
  const { setCards } = useTasks();
  const [date, setDate] = useState(new Date());

  const navigate = useNavigate();

  const [task, setTask] = useState({
    title: "",
    topic: "Research",
    status: "Без статуса",
    description: "",
  });

  const [error, setError] = useState(null);

  const createTask = (e) => {
    e.preventDefault;

    const title = task.title || "Новая задача";
    const topic = task.topic || "Research";
    const newTask = {
      ...task,
      topic,
      title,
      date,
    };

    if (!task.title || !task.description || !task.date) {
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

  console.log(date);
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
              <Calendar mode="single" selected={date} onSelect={setDate} />
            </S.PopNewCardWrap>
            <S.PopNewCardCategories>
              <S.Categories>Категория</S.Categories>
              <S.CategoriesThemes>
                <S.CategoriesTheme>
                  <p className="_orange">Web Design</p>
                </S.CategoriesTheme>
                <div className="categories__theme _green">
                  <p className="_green">Research</p>
                </div>
                <div className="categories__theme _purple">
                  <p className="_purple">Copywriting</p>
                </div>
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
