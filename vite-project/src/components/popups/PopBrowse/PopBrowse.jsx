import Calendar from "../../Calendar/Calendar";
import { useNavigate, useParams } from "react-router-dom";
import * as S from "./PopBrowse.styled";
import { useUser } from "../../../hooks/useUser";
import { useTasks } from "../../../hooks/useTasks";
import { useEffect, useState } from "react";
import { API } from "../../../api/tasks";
import { routePaths } from "../../../AppRoutes";
import SharedButton from "../../SharedButton/SharedButton";
import CategorieGroup from "../../CategorieGroup/CategorieGroup";

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

  function handleSetDate(value) {
    if (!editMode)
      return

    setDate(value)
  }

  function startEdit() {
    setEditMode(true)
  }

  function cancelEdit() {
    setEditMode(false)
  }

  function finishEdit() {
    if (!task.description) {
      setError("Пожалуйста, заполните все поля");
      return;
    }

    API.editTask({ token: user.user.token, task, id })
      .then((response) => {
        setCards(response.tasks);
        navigate(routePaths.MAIN);
      })
      .catch((err) => {
        setError(err.message);
      });
  }

  function deleteTask() {
    API.deleteTask({ token: user.user.token, id })
      .then((response) => {
        setCards(response.tasks);
        navigate(routePaths.MAIN);
      })
      .catch((err) => {
        setError(err.message);
      });
  }

  function closePopup() {
    navigate("/")
  }

  return (
    <S.PopBrowse>
      <S.PopBrowseContainer>
        <S.PopBrowseBlock>
          <S.PopBrowseContent>
            <S.PopBrowseTopBlock>
              <S.PopBrowseTitle>{task.title}</S.PopBrowseTitle>
              {editMode || (
                <S.CategoriesTheme $isActive={true} $topic={topic}>
                  <p>{topic}</p>
                </S.CategoriesTheme>
              )}
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
                    $editMode={editMode}
                    name="descriptionj"
                    id="textArea01"
                    placeholder="Введите описание задачи..."
                    value={task.description}
                    onChange={(e) =>
                      setTask({ ...task, description: e.target.value })
                    }
                  />
                </S.FormBrowseBlock>
              </S.PopBrowseForm>
              <Calendar date={date} setDate={handleSetDate} />
            </S.PopBrowseWrap>
            {editMode && (
              <CategorieGroup topic={topic} setTopic={setTopic} />
            )}
            {error && <p>{error}</p>}
            <S.PopBrowseButton>
              <S.PopBrowseButtonInner>
                {editMode ? (
                  <>
                    <SharedButton $primary={true} className="btn-edit__edit _btn-bg _hover01"
                  onClick={finishEdit}>
                      Сохранить
                    </SharedButton>
                    <SharedButton $primary={false} className="btn-edit__edit _btn-bor _hover03"
                  onClick={cancelEdit}>
                      Отменить
                    </SharedButton>
                  </>
                ) : (
                  <SharedButton $primary={false} $width={198}
                  className="btn-browse__edit _btn-bor _hover03"
                  onClick={startEdit}
                  >
                    Редактировать задачу
                  </SharedButton>
                )}
                <SharedButton $primary={false} className="btn-browse__delete _btn-bor _hover03"
                  onClick={deleteTask}>
                  Удалить задачу
                </SharedButton>
              </S.PopBrowseButtonInner>
              <SharedButton $primary={true} className="btn-browse__close _btn-bg _hover01"
                  onClick={closePopup}>
                Закрыть
              </SharedButton>
            </S.PopBrowseButton>
          </S.PopBrowseContent>
        </S.PopBrowseBlock>
      </S.PopBrowseContainer>
    </S.PopBrowse>
  );
};

export default PopBrowse;
