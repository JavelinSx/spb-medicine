
import pdf from '../pdf/test.pdf'
import {Link} from 'react-router-dom'
function PacientCard(){

    return(
        <div className="pacient-card-container">
            <h2 className='header-pacient-card'>
                    Информация/Результаты анализов
            </h2>
            <form className='pacient-card' type="submit">
                <ul className='pacient-card__list'>
                    <li className='pacient-card__item'>
                        <label for='visit' className="label-card-input">
                            Планируемая дата визита
                        </label>
                        <input type='date' id='visit' className=" input" requaried>
                        </input>
                    </li>
                    <li className='pacient-card__item'>
                        <label for='birthday' className="label-card-input">
                            Дата рождения
                        </label>
                        <input type='date' id='birthday' className=" input" requaried>
                        </input>
                    </li>
                    <li className='pacient-card__item'>
                        <label for='marker_prev' className="label-card-input">
                            Онкомаркер  СА-125 (предыдущий)
                        </label>
                        <input type='text' id='marker_prev' className=" input" requaried>
                        </input>
                    </li>
                    <li className='pacient-card__item'>
                        <label for='marker_last' className="label-card-input">
                            Онкомаркер  СА-125 (последний)
                        </label>
                        <input type='text' id='marker_last' className=" input" requaried>
                        </input>
                    </li>
                    <li className='pacient-card__item'>
                        <label for='result_survey' className="label-card-input">
                            Результаты анкетирования (баллы)
                        </label>
                        <input type='text' id='result_survey' className=" input" requaried>
                        </input>
                    </li>
                    <li className='pacient-card__item'>
                        <label for='simptoms' className="label-card-input">
                            Основные симптомы
                        </label>
                        <textarea type='textarea' id='simptoms' className=" input" requaried>
                        </textarea>
                    </li>
                    <li className='pacient-card__item'>
                        <label for='comments' className="label-card-input">
                            Комментарий пациента
                        </label>
                        <textarea type='textarea' id='comments' className=" input" requaried>
                        </textarea>
                    </li>
                </ul>
                <ul className="pacient-card__list pacient-card__list-button">
                    <li className="pacient-card__file">
                        <label for="mrt_prev" className="pacient-card__label">Результаты МРТ (предыдущий)
                            <button className='button button-animation'>Загрузить файл (.pdf)</button>
                        </label>
                        <input type="file" id="mrt_prev" className="pacient-card__input" name="mrt_prev" accept=".pdf"></input>
                    </li>
                    <li className="pacient-card__file">
                        <label for="mrt_last" className="pacient-card__label">Результаты МРТ (предыдущий)
                            <button className='button button-animation'>Загрузить файл (.pdf)</button>
                        </label>
                        <input type="file" id="mrt_last" className="pacient-card__input" name="mrt_last" ></input>
                    </li>
                    <li className="pacient-card__file">
                        <label for="kt_prev" className="pacient-card__label">Результаты КТ (предыдущий)
                            <button className='button button-animation'>Загрузить файл (.pdf)</button>
                        </label>
                        <input type="file" id="kt_prev" className="pacient-card__input" name="kt_prev" ></input>
                    </li>
                    <li className="pacient-card__file">
                        <label for="kt_last" className="pacient-card__label">Результаты КТ (предыдущий)
                            <button className='button button-animation'>Загрузить файл (.pdf)</button>
                        </label>
                        <input type="file" id="kt_last" className="pacient-card__input" name="kt_last" ></input>
                    </li>
                </ul>
                <button className='button button-animation'>Подтвердить изменения</button>
            </form>
        </div>
    )
}
export default PacientCard