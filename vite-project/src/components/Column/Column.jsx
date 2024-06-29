import Card from "../Card/Card";
import * as S from "./Column.styled";

const Column = ({ title, cardList }) => {
  return (
    <S.MainColumn>
      <S.ColumnTitle>
        <p>{title}</p>
      </S.ColumnTitle>
      <S.Cards>
        {cardList.map(({ _id, topic, title, date }) => (
          <Card key={_id} topic={topic} title={title} date={date} id={_id} />
        ))}
      </S.Cards>
    </S.MainColumn>
  );
};

export default Column;
