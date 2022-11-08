import { useState } from "react";

import PacientCard from "./PacientCard";
import PacientsList from "./PacientsList";
const {cards, pacients} = require('../utils/data')
function Pacients() {

  const [pacientsAllCards, setPacientsAllCards] = useState(cards)
  const [pacientsList, setPacientsList] = useState(pacients);
  const [oncePacientCard, setOncePacientCard] = useState([{}]);
  const [oncePacientInfo, setOncePacientInfo] = useState([{}]);
  const [isOpened, setIsOpened] = useState(false);

  function handleOncePacientInfo(_id) {
    setOncePacientInfo(pacients.filter((pacient) => pacient._id === _id));
  }
  function handleOncePacientCards(_id) {
    setOncePacientCard(pacientsAllCards.filter((card) => card._idPacient === _id));
  }
  function openPopupAddPacient() {
    setIsOpened(true);
  }

  function closePopup() {
    setIsOpened(false);
  }

  function addCardPacient(_id) {
    setPacientsAllCards([
      ...oncePacientCard,
      {
        _idPacient: _id,
        oncoMarker_CA125: "0",
        resultSurvey: "0",
        simptoms: "none",
        comment: "none",
        linkMRT: "none",
        linkKT: "none",
      }
    ])
  }

  function deleteCardPacient(currentCard) {
    setPacientsAllCards(oncePacientCard.filter((item, index) => index === !currentCard))
  }

function submitAddPacient(evt) {
  evt.preventDefault();

  setPacientsList(
    [
      ...pacients,
      {
        _id: Math.floor(Math.random() * 1000),
        name: evt.target.name.value,
        surname: evt.target.surname.value,
        middlename: evt.target.middlename.value,
        dateBirthDay: "13.01.1993",
      }
    ]
  );
  closePopup();
}

return (
  <>
    <div className="admin-pacients">
      <div className="header">База данных пациентов</div>
      <div className="admin-managment">
        <div className="search-container">
          <input
            type="search"
            id="search"
            className="input input-search"
            requaried
          ></input>
          <label
            for="search"
            className="label-card-input white-text label-search"
          >
            Поиск
          </label>
          <button className="button button-animation button__search">
            Искать
          </button>
        </div>
      </div>
      <div className="pacients-info-container">
        <PacientsList
          pacientsList={pacientsList}
          handleOncePacientCards={handleOncePacientCards}
          handleOncePacientInfo={handleOncePacientInfo}
          openPopupAddPacient={openPopupAddPacient}
        />
        <PacientCard oncePacientInfo={oncePacientInfo} oncePacientCard={oncePacientCard} addCardPacient={addCardPacient} deleteCardPacient={deleteCardPacient} />
      </div>
    </div>
    <div className={`popup-add-pacient ${isOpened ? "popup-open" : ""}`}>
      <div className="form-container">
        <button
          className="button button-animation button-close"
          onClick={closePopup}
        >
          X
        </button>
        <form className="form-add-pacient" onSubmit={submitAddPacient}>
          <ul className="add-pacient-list">
            <li className="add-pacient-item">
              <label for="surname" className="label-card-input white-text">
                Фамилия
              </label>
              <input
                type="text"
                id="surname"
                className=" input"
                requaried
              ></input>
            </li>
            <li className="add-pacient-item">
              <label for="name" className="label-card-input white-text">
                Имя
              </label>
              <input
                type="text"
                id="name"
                className=" input"
                requaried
              ></input>
            </li>
            <li className="add-pacient-item">
              <label for="middlename" className="label-card-input white-text">
                Отчество
              </label>
              <input
                type="text"
                id="middlename"
                className=" input"
                requaried
              ></input>
            </li>
          </ul>
          <button className="button button-animation">Добавить</button>
        </form>
      </div>
    </div>
  </>
);
}

export default Pacients;
