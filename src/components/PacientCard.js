import SwiperCard from "./SwiperCard";

function PacientCard({ oncePacientInfo, oncePacientCard, addCardPacient, deleteCardPacient }) {
  return (
    <div className="pacient-card-container">
      <h2 className="header-pacient-card">Информация/Результаты анализов</h2>
      <SwiperCard
        oncePacientInfo={oncePacientInfo}
        oncePacientCard={oncePacientCard}
        addCardPacient={addCardPacient}
        deleteCardPacient={deleteCardPacient}
      />
    </div>
  );
}
export default PacientCard;
