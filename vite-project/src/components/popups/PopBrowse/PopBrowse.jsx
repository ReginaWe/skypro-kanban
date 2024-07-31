import Calendar from "../../Calendar/Calendar";
import { useNavigate, useParams } from "react-router-dom";
import * as S from "./PopBrowse.styled";
import { useUser } from "../../../hooks/useUser";
import { useTasks } from "../../../hooks/useTasks";
import { useEffect, useState } from "react";
import { API } from "../../../api/tasks";
import { routePaths } from "../../../AppRoutes";
import SharedButton from "../../SharedButton/SharedButton";
import StatusGroup from "../../StatusGroup/StatusGroup";

const PopBrowse = () => {
  const { id } = useParams();
  const { user } = useUser();
  const { cards, setCards, readTasksFromServer } = useTasks();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [task, setTask] = useState({
    title: "",
    status: "Без статуса",
    description: "",
    topic: "",
    date: new Date(),
  });

  function setField(key, value) {
    setTask({ ...task, [key]: value });
  }

  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    if (!cards) {
      readTasksFromServer(user.user.token, null);
      return;
    }

    const task = cards.filter((card) => card._id === id)[0];

    if (!task) return navigate("/");

    setTask({
      title: task.title,
      status: task.status,
      description: task.description,
      topic: task.topic,
      date: new Date(task.date),
    });
  }, [cards, id]);

  function handleSetDate(value) {
    if (!editMode) return;

    setField("date", value);
  }

  function startEdit() {
    setEditMode(true);
  }

  function cancelEdit() {
    setEditMode(false);
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
    navigate("/");
  }

  if (!cards) return null;

  return (
    <S.PopBrowse>
      <S.PopBrowseContainer>
        <S.PopBrowseBlock>
          <S.PopBrowseContent>
            <S.PopBrowseTopBlock>
              <S.PopBrowseTitle>{task.title}</S.PopBrowseTitle>
                <S.CategoriesTheme $isActive={true} $topic={task.topic}>
                  <p>{task.topic}</p>
                </S.CategoriesTheme>
            </S.PopBrowseTopBlock>
            <StatusGroup
              showOne={!editMode}
              status={task.status}
              setStatus={(value) => setField("status", value)}
            />
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
              <Calendar date={task.date} setDate={handleSetDate} />
            </S.PopBrowseWrap>
            {/* {editMode && (
              <CategorieGroup
                topic={task.topic}
                setTopic={(e) => setField("topic", e.target.value)}
              />
            )} */}
            {error && <p>{error}</p>}
            <S.PopBrowseButton>
              <S.PopBrowseButtonInner>
                {editMode ? (
                  <>
                    <SharedButton $primary={true} onClick={finishEdit}>
                      Сохранить
                    </SharedButton>
                    <SharedButton $primary={false} onClick={cancelEdit}>
                      Отменить
                    </SharedButton>
                  </>
                ) : (
                  <SharedButton
                    $primary={false}
                    $width={198}
                    onClick={startEdit}
                  >
                    Редактировать задачу
                  </SharedButton>
                )}
                <SharedButton $primary={false} onClick={deleteTask}>
                  Удалить задачу
                </SharedButton>
              </S.PopBrowseButtonInner>
              <SharedButton $primary={true} onClick={closePopup}>
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
