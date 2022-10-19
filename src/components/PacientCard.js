import SwiperCard from "./SwiperCard";

function PacientCard({ selectPacient, addCardPacient, deleteCardPacient }) {
  return (
    <div className="pacient-card-container">
      <h2 className="header-pacient-card">Информация/Результаты анализов</h2>
      <SwiperCard
        cardsPacient={selectPacient.map((item) => item.cards)}
        addCardPacient={addCardPacient}
        deleteCardPacient={deleteCardPacient}
      />
    </div>
  );
}
export default PacientCard;
