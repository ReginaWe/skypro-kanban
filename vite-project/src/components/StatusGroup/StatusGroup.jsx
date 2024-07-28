import * as S from "../popups/PopBrowse/PopBrowse.styled";


const StatusGroup = ({ showOne, status, setStatus }) => {
  return (
    <S.Status>
      <S.StatusTitle>Статус</S.StatusTitle>
      <S.StatusThemes>
        {showOne ? (
          <S.StatusTheme $isActive={true}>
            <label>{status}</label>
          </S.StatusTheme>
        ) : (
          <>
            <S.StatusTheme
              $isActive={status === "Без статуса"}
            >
              <label htmlFor="radio01">Без статуса</label>
              <S.RadioInputStatus
                onChange={(e) => setStatus(e.target.value)}
                type="radio"
                name="status"
                id="radio01"
                value={`Без статуса`}
              />
            </S.StatusTheme>
            <S.StatusTheme
              $isActive={status === "Нужно сделать"}
            >
              <label htmlFor="radio02">Нужно сделать</label>
              <S.RadioInputStatus
                onChange={(e) => setStatus(e.target.value)}
                type="radio"
                name="status"
                id="radio02"
                value={`Нужно сделать`}
              />
            </S.StatusTheme>
            <S.StatusTheme
              $isActive={status === "В работе"}
            >
              <label htmlFor="radio03">В работе</label>
              <S.RadioInputStatus
                onChange={(e) => setStatus(e.target.value)}
                type="radio"
                name="status"
                id="radio03"
                value={`В работе`}
              />
            </S.StatusTheme>
            <S.StatusTheme $isActive={status === "Тестирование"}>
              <label htmlFor="radio04">Тестирование</label>
              <S.RadioInputStatus
                onChange={(e) => setStatus(e.target.value)}
                type="radio"
                name="status"
                id="radio04"
                value={`Тестирование`}
              />
            </S.StatusTheme>
            <S.StatusTheme
              $isActive={status === "Готово"}
            >
              <label htmlFor="radio05">Готово</label>
              <S.RadioInputStatus
                onChange={(e) => setStatus(e.target.value)}
                type="radio"
                name="status"
                id="radio05"
                value={`Готово`}
              />
            </S.StatusTheme>
          </>
        )}
      </S.StatusThemes>
    </S.Status>
  );
};

export default StatusGroup;
