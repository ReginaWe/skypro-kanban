import { useState } from "react";
import Calendar from "../../Calendar/Calendar";
import { routePaths } from "../../../AppRoutes";
import { useUser } from "../../../hooks/useUser";
import { useNavigate } from "react-router-dom";

const PopNewCard = () => {
  const { user } = useUser();
  const [selected, setSelected] = useState();

  const navigate = useNavigate();

  const [task, setTask] = useState({
    title: "",
    topic: "Research",
    status: "Без статуса",
    description: "",
    date: null,
  });

  const [error, setError] = useState(null);

  const createTask = (e) => {
    e.preventDefault;

    if (!task.title || !task.description || !task.date) {
      setError("Пожалуйста, заполните все поля");
      return;
    }

    addTask({ task, token: user.user.token })
      .then((response) => {
        setTasks(response.tasks); //Из хука, создать хук
        navigate(routePaths.MAIN);
      })
      .catch((err) => {
        setError("Что-то пошло не так, попробуйте еще раз");
      });
  };
  return (
    <div className="pop-new-card" id="popNewCard">
      <div className="pop-new-card__container">
        <div className="pop-new-card__block">
          <div className="pop-new-card__content">
            <h3 className="pop-new-card__ttl">Создание задачи</h3>
            <a href="#" className="pop-new-card__close">
              &#10006;
            </a>
            <div className="pop-new-card__wrap">
              <form
                className="pop-new-card__form form-new"
                id="formNewCard"
                action="#"
              >
                <div className="form-new__block">
                  <label htmlFor="formTitle" className="subttl">
                    Название задачи
                  </label>
                  <input
                    className="form-new__input"
                    type="text"
                    name="name"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                  />
                </div>
                <div className="form-new__block">
                  <label htmlFor="textArea" className="subttl">
                    Описание задачи
                  </label>
                  <textarea
                    className="form-new__area"
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                  ></textarea>
                </div>
              </form>
              <Calendar selected={selected} setSelected={setSelected} />
            </div>
            <div className="pop-new-card__categories categories">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__themes">
                <div className="categories__theme _orange _active-category">
                  <p className="_orange">Web Design</p>
                </div>
                <div className="categories__theme _green">
                  <p className="_green">Research</p>
                </div>
                <div className="categories__theme _purple">
                  <p className="_purple">Copywriting</p>
                </div>
              </div>
            </div>
            {error && <p>{error}</p>}
            <button
              onClick={createTask}
              className="form-new__create _hover01"
              id="btnCreate"
            >
              Создать задачу
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopNewCard;
