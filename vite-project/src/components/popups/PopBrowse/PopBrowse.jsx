import Calendar from "../../Calendar/Calendar";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as S from "./PopBrowse.styled";
import { useUser } from "../../../hooks/useUser";
import { useTasks } from "../../../hooks/useTasks";
import { useEffect, useState } from "react";
import { editTask } from "../../../api/tasks";
import { routePaths } from "../../../AppRoutes";

const PopBrowse = () => {
  const { id } = useParams();
  const { user } = useUser();
  const { cards, setCards } = useTasks();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [task, setTask] = useState({
    title: "",
    status: "Без статуса",
    description: "",
  })

  const [topic, setTopic] = useState("");
  const [date, setDate] = useState(new Date());
  const [editMode, setEditMode] = useState(false)

  useEffect(() => {
    const task = cards.filter((card) => card._id === id)[0]

    setTask({
      title: task.title,
      status: task.status,
      description: task.description,
    })
    setTopic(task.topic)
    setDate(new Date(task.date))
  }, [id])

  function redactTask() {
    if (!task.description) {
      setError("Пожалуйста, заполните все поля");
      return;
    }

    editTask({ token: user.user.token, task, id })
      .then((response) => {
        setCards(response.tasks);
        navigate(routePaths.MAIN);
      })
      .catch((err) => {
        setError(err.message);
      });
  }
  return (
    <S.PopBrowse>
      <S.PopBrowseContainer>
        <S.PopBrowseBlock>
          <S.PopBrowseContent>
            <S.PopBrowseTopBlock>
              <S.PopBrowseTitle>{task.title}</S.PopBrowseTitle>
              <S.CategoriesTheme $isActive={true} $topic={topic}>
                <p>{topic}</p>
              </S.CategoriesTheme>
            </S.PopBrowseTopBlock>
            <S.Status>
              <S.StatusTitle>Статус</S.StatusTitle>
              <S.StatusThemes>
                <S.StatusTheme className="status__theme _hide">
                  <p>Без статуса</p>
                </S.StatusTheme>
                <S.StatusTheme className="status__theme _gray">
                  <p className="_gray">{task.status}</p>
                </S.StatusTheme>
                <S.StatusTheme className="status__theme _hide">
                  <p>В работе</p>
                </S.StatusTheme>
                <S.StatusTheme className="status__theme _hide">
                  <p>Тестирование</p>
                </S.StatusTheme>
                <S.StatusTheme className="status__theme _hide">
                  <p>Готово</p>
                </S.StatusTheme>
              </S.StatusThemes>
            </S.Status>
            <S.PopBrowseWrap>
              <S.PopBrowseForm id="formBrowseCard" action="#">
                <S.FormBrowseBlock>
                  <S.SubTitleBrowse>Описание задачи</S.SubTitleBrowse>
                  <S.PopBrowseArea
                    name="text"
                    id="textArea01"
                    readOnly
                    placeholder="Введите описание задачи..."
                    value={task.description}
                  />
                </S.FormBrowseBlock>
              </S.PopBrowseForm>
              <Calendar date={date} setDate={setDate} />
            </S.PopBrowseWrap>
            <div className="theme-down__categories theme-down">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__theme _orange _active-category">
                <p className="_orange">Web Design</p>
              </div>
            </div>
            {error && <p>{error}</p>}
            <div className="pop-browse__btn-browse ">
              <div className="btn-group">
                <button
                  onClick={redactTask}
                  className="btn-browse__edit _btn-bor _hover03"
                >
                  <a href="#">Редактировать задачу</a>
                </button>
                <button className="btn-browse__delete _btn-bor _hover03">
                  <a href="#">Удалить задачу</a>
                </button>
              </div>
              <button className="btn-browse__close _btn-bg _hover01">
                <Link to="/">Закрыть</Link>
              </button>
            </div>
            <div className="pop-browse__btn-edit _hide">
              <div className="btn-group">
                <button className="btn-edit__edit _btn-bg _hover01">
                  <a href="#">Сохранить</a>
                </button>
                <button className="btn-edit__edit _btn-bor _hover03">
                  <a href="#">Отменить</a>
                </button>
                <button
                  className="btn-edit__delete _btn-bor _hover03"
                  id="btnDelete"
                >
                  <a href="#">Удалить задачу</a>
                </button>
              </div>
              <button className="btn-edit__close _btn-bg _hover01">
                <a href="#">Закрыть</a>
              </button>
            </div>
          </S.PopBrowseContent>
        </S.PopBrowseBlock>
      </S.PopBrowseContainer>
    </S.PopBrowse>
  );
};

export default PopBrowse;
