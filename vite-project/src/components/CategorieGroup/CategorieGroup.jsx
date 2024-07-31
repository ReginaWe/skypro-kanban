import * as S from "../popups/PopNewCard/PopNewCard.styled"


const CategorieGroup = ({ topic, setTopic }) => {
  return (
    <S.PopNewCardCategories>
      <S.Categories>Категория</S.Categories>
      <S.CategoriesThemes>
        <S.CategoriesTheme
          $isActive={topic === "Web Design"}
          $topic={"Web Design"}
          className="categories__theme _orange"
        >
          <label htmlFor="radio1">Web Design</label>
          <S.RadioInput
            onChange={(e) => setTopic(e.target.value)}
            className="_orange"
            type="radio"
            name="topic"
            id="radio1"
            value={`Web Design`}
          />
        </S.CategoriesTheme>
        <S.CategoriesTheme
          $isActive={topic === "Research"}
          $topic={"Research"}
          className="categories__theme _green"
        >
          <label htmlFor="radio2">Research</label>
          <S.RadioInput
            onChange={(e) => setTopic(e.target.value)}
            className="_green"
            type="radio"
            name="topic"
            id="radio2"
            value={`Research`}
          />
        </S.CategoriesTheme>
        <S.CategoriesTheme
          $isActive={topic === "Copywriting"}
          $topic={"Copywriting"}
          className="categories__theme _purple"
        >
          <label htmlFor="radio3">Copywriting</label>
          <S.RadioInput
            onChange={(e) => setTopic(e.target.value)}
            className="_purple"
            type="radio"
            name="topic"
            id="radio3"
            value={`Copywriting`}
          />
        </S.CategoriesTheme>
      </S.CategoriesThemes>
    </S.PopNewCardCategories>
  );
};

export default CategorieGroup
