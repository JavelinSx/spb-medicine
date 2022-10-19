import {useState} from "react";

import PacientCard from "./PacientCard";
import PacientsList from "./PacientsList";

function Pacients() {
  const pacients = [
    {
      _id: "1",
      name: "nikita",
      surname: "zuev",
      middlename: "andreevich",
      dateBirthDay: "13.01.1993",
      cards: [
        {
          _idCard: "1",
          oncoMarker_CA125: "100",
          resultSurvey: "10",
          simptoms: "none",
          comment: "none",
          linkMRT: "none",
          linkKT: "none",
        },
        {
          _idCard: "2",
          oncoMarker_CA125: "220",
          resultSurvey: "220",
          simptoms: "1",
          comment: "none",
          linkMRT: "none",
          linkKT: "none",
        },
      ],
    },
    {
      _id: "2",
      name: "nikita2",
      surname: "zuev2",
      middlename: "andreevich2",
      dateBirthDay: "13.01.1993",
      cards: [
        {
          _idCard: "1",
          oncoMarker_CA125: "200",
          resultSurvey: "20",
          simptoms: "none",
          comment: "none",
          linkMRT: "none",
          linkKT: "none",
        },
      ],
    },
  ];
  const [pacientsList, setPacientsList] = useState(pacients);
  const [selectPacient, setSelectPacient] = useState([]);
  const [isOpened, setIsOpened] = useState(false);


  function handleGetInfoSelectPacient(_id) {
    setSelectPacient(pacients.filter((pacient) => pacient._id === _id));
  }
  function openPopupAddPacient() {
    setIsOpened(true);
  }

  function closePopup() {
    setIsOpened(false);
  }

  function addCardPacient(_idCard) {
    console.log(_idCard, 'add')
  }

  function deleteCardPacient(_idCard) {
    console.log(_idCard, 'delete')
  }

  function submitAddPacient(evt) {
    evt.preventDefault();

    setPacientsList(
      pacients.push({
        _id: "1",
        name: evt.target.name.value,
        surname: evt.target.surname.value,
        middlename: evt.target.middlename.value,
        dateBirthDay: "13.01.1993",
        cards: [],
      })
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
            handleGetInfoSelectPacient={handleGetInfoSelectPacient}
            openPopupAddPacient={openPopupAddPacient}
          />
          <PacientCard selectPacient={selectPacient} addCardPacient={addCardPacient} deleteCardPacient={deleteCardPacient}/>
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
