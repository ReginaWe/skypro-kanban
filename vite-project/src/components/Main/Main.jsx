
import Column from "../Column/Column";

const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

const Main = ({cardList}) => {
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {statusList.map((status) => (
              <Column 
              key={status} 
              title={status} 
              cardList={cardList.filter((card) => card.status === status)}
              />
            ))}

            {/* <Column title="Без статуса" /> */}
            {/*  <Column title="Нужно сделать" />
            <Column title="В работе" />
            <Column title="Тестирование" />
            <Column title="Готово" /> */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
