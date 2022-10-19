import React from "react";

const PacientForm = ({card}) => {
  return (
    <form className="pacient-card" type="submit">
      <ul className="pacient-card__list">
        <li className="pacient-card__item">
          <label for="visit" className="label-card-input">
            Планируемая дата визита
          </label>
          <input type="date" id="visit" className=" input" requaried></input>
        </li>
        <li className="pacient-card__item">
          <label for="birthday" className="label-card-input">
            Дата рождения
          </label>
          <input type="date" id="birthday" className=" input" requaried></input>
        </li>
        <li className="pacient-card__item">
          <label for="marker" className="label-card-input">
            Онкомаркер СА-125
          </label>
          <input
            type="text"
            id="marker"
            className=" input"
            requaried
            value={card.oncoMarker_CA125}
          ></input>
        </li>
        <li className="pacient-card__item">
          <label for="result_survey" className="label-card-input">
            Результаты анкетирования (баллы)
          </label>
          <input
            type="text"
            id="result_survey"
            className=" input"
            requaried
            value={card.resultSurvey}
          ></input>
        </li>
        <li className="pacient-card__item">
          <label for="simptoms" className="label-card-input">
            Основные симптомы
          </label>
          <textarea
            type="textarea"
            id="simptoms"
            className=" input"
            requaried
            value={card.simptoms}
          ></textarea>
        </li>
        <li className="pacient-card__item">
          <label for="comments" className="label-card-input">
            Комментарий пациента
          </label>
          <textarea
            type="textarea"
            id="comments"
            className=" input"
            requaried
            value={card.comments}
          ></textarea>
        </li>
      </ul>
      <ul className="pacient-card__list pacient-card__list-button">
        <li className="pacient-card__file">
          <label for="mrt" className="pacient-card__label">
            Результаты МРТ
            <button className="button button-animation">
              Загрузить файл
            </button>
          </label>
          <input
            type="file"
            id="mrt"
            className="pacient-card__input"
            name="mrt"
            accept=".pdf"
          ></input>
        </li>
        <li className="pacient-card__file">
          <label for="kt" className="pacient-card__label">
            Результаты КТ
            <button className="button button-animation">
              Загрузить файл
            </button>
          </label>
          <input
            type="file"
            id="kt"
            className="pacient-card__input"
            name="kt"
          ></input>
        </li>
      </ul>
      <button className="button button-animation">Подтвердить изменения</button>
    </form>
  );
};

export default PacientForm;
