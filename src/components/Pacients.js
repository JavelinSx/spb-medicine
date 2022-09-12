
import pdf from '../pdf/test.pdf'
function Pacients(){


    return(
        <div className='pacients'>

            <div className='pacients__header'>База данных пациентов</div>
            <div className='pacients__work-section'>
                <div className="pacients__search-container">
                    <input type='search' id='search' className="form-input pacients__input-search" requaried>

                    </input>
                    <label for='search' className="form-label pacients__label">
                        Поиск
                    </label>
                    <button className='pacients__button-search button-animation'>Искать</button>
                </div>


                <button className='pacients__button-add-pacient button-animation'>Добавить&nbsp;пациента</button>
                <button className='pacients__button-update button-animation'>Обновить&nbsp;список&nbsp;пациентов</button>

            </div>
            
            <div className='pacients__flow'>
                <div className="pacients__flow-container-list">
                    <h2 className='pacients__header-title-list'>
                            Список пациентов
                    </h2>

                    <ul className='pacients__list'>
                        <li className="pacients__list-item button-animation">
                            Зуев Никита Андреевич
                        </li>
                        <li className="pacients__list-item button-animation">
                            Зуев Никита Андреевич
                        </li>
                        <li className="pacients__list-item button-animation">
                            Зуев Никита Андреевич
                        </li>
                        <li className="pacients__list-item button-animation">
                            Зуев Никита Андреевич
                        </li>
                        <li className="pacients__list-item button-animation">
                            Зуев Никита Андреевич
                        </li>
                        <li className="pacients__list-item button-animation">
                            Зуев Никита Андреевич
                        </li>
                        <li className="pacients__list-item button-animation">
                            Зуев Никита Андреевич
                        </li>
                        <li className="pacients__list-item button-animation">
                            Зуев Никита Андреевич
                        </li>
                        <li className="pacients__list-item button-animation">
                            Зуев Никита Андреевич
                        </li>
                        <li className="pacients__list-item button-animation">
                            Зуев Никита Андреевич
                        </li>
                        <li className="pacients__list-item button-animation">
                            Зуев Никита Андреевич
                        </li>
                        <li className="pacients__list-item button-animation">
                            Зуев Никита Андреевич
                        </li>
                        <li className="pacients__list-item button-animation">
                            Зуев Никита Андреевич
                        </li>
                        <li className="pacients__list-item button-animation">
                            Зуев Никита Андреевич
                        </li>
                        <li className="pacients__list-item button-animation">
                            Зуев Никита Андреевич
                        </li>
                        <li className="pacients__list-item button-animation">
                            Зуев Никита Андреевич
                        </li>
                    </ul>
                </div>
                
                <form className="pacients__flow-container-info">
                    <h2 className='pacients__header-title-info'>
                            Информация/Результаты анализов
                    </h2>
                    <div className='pacients__info'>
                        <ul className='pacients__list-info'>
                            <li className='pacients__list-input'>

                                <label for='visit' className="pacients__label pacients__label_info">
                                    Планируемая дата визита
                                </label>
                                <input type='date' id='visit' className="form-input pacients__input" requaried>

                                </input>
                            </li>
                            <li className='pacients__list-input'>

                                <label for='birthday' className="pacients__label pacients__label_info">
                                    Дата рождения
                                </label>
                                <input type='date' id='birthday' className="form-input pacients__input" requaried>

                                </input>


                            </li>

                            <li className='pacients__list-input'>

                                <label for='marker_prev' className="pacients__label pacients__label_info">
                                    Онкомаркер  СА-125 (предыдущий)
                                </label>
                                <input type='text' id='marker_prev' className="form-input pacients__input" requaried>

                                </input>


                            </li>
                            <li className='pacients__list-input'>

                                <label for='marker_last' className="pacients__label pacients__label_info">
                                    Онкомаркер  СА-125 (последний)
                                </label>
                                <input type='text' id='marker_last' className="form-input pacients__input" requaried>

                                </input>

                                
                            </li>
                            <li className='pacients__list-input'>

                                <label for='result_survey' className="pacients__label pacients__label_info">
                                    Результаты анкетирования (баллы)
                                </label>
                                <input type='text' id='result_survey' className="form-input pacients__input" requaried>

                                </input>


                            </li>
                            <li className='pacients__list-input'>

                                <label for='simptoms' className="pacients__label pacients__label_info">
                                    Основные симптомы
                                </label>

                                <textarea type='textarea' id='simptoms' className="form-input pacients__input" requaried>

                                </textarea>


                            </li>
                            <li className='pacients__list-input'>

                                <label for='comments' className="pacients__label pacients__label_info">
                                    Комментарий пациента
                                </label>

                                <textarea type='textarea' id='comments' className="form-input pacients__input" requaried>

                                </textarea>


                            </li>

                        </ul>
                        <ul className="pacients__button-file-list">
                            <li className="pacients__button-file-item">
                                <label for="mrt_prev" className="pacients__button-file-title">Результаты МРТ (предыдущий)
                                    <a className="button-animation pacients__button-file-read" href={pdf} target="_blank" without rel="noopener noreferrer">Открыть файл (.pdf)
                                    </a>
                                </label>
                                <input id="mrt_prev" className="pacients__button-file-input" name="mrt_prev" accept=".pdf"></input>
                            </li>
                            <li className="pacients__button-file-item">
                                <label for="mrt_last" className="pacients__button-file-title">Результаты МРТ (предыдущий)
                                    <a className="button-animation pacients__button-file-read" href={pdf} target="_blank" without rel="noopener noreferrer">Открыть файл (.pdf)
                                    </a>
                                </label>
                                <input type="file" id="mrt_last" className="pacients__button-file-input" name="mrt_last" ></input>
                            </li>
                            <li className="pacients__button-file-item">
                                <label for="kt_prev" className="pacients__button-file-title">Результаты КТ (предыдущий)
                                    <a className="button-animation pacients__button-file-read" href={pdf} target="_blank" without rel="noopener noreferrer">Открыть файл (.pdf)
                                    </a>
                                </label>
                                <input type="file" id="kt_prev" className="pacients__button-file-input" name="kt_prev" ></input>
                            </li>
                            <li className="pacients__button-file-item">
                                <label for="kt_last" className="pacients__button-file-title">Результаты КТ (предыдущий)
                                    <a className="button-animation pacients__button-file-read" href={pdf} target="_blank" without rel="noopener noreferrer">Открыть файл (.pdf)
                                    </a>
                                </label>
                                <input type="file" id="kt_last" className="pacients__button-file-input" name="kt_last" ></input>
                            </li>
                        </ul>
                        <button className='pacients__button-submit-update button button-animation'>Подтвердить изменения</button>
                    </div>
                </form>

            </div>

        </div>
    )
}

export default Pacients