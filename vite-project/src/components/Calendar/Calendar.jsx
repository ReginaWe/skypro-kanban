import * as S from "./Calendar.styled";
import { format } from "date-fns";
import { ru } from "date-fns/locale/ru";


const Calendar = ({date, setDate}) => {
  const getDateFormat = (date) => {
    return (
      <S.CalendarPeriod>
        <S.CalendarDateEnd>
          Срок исполнения: <span>{format(date, "dd.MM.yy")}</span>
        </S.CalendarDateEnd>
      </S.CalendarPeriod>
    )
  };
  return (
    <S.Calendar>
      <S.CalendarTitle>Даты</S.CalendarTitle>
      <S.CalendarBlock>
        <S.CalendarContent>
          <S.CalendarDayPicker
          locale={ru}
          mode="single"
          selected={date}
          onSelect={setDate}
          footer={getDateFormat(date)}/>
        </S.CalendarContent>
      </S.CalendarBlock>
    </S.Calendar>
  );
};

export default Calendar;
