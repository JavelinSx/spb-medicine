
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
                
                <div className="pacients__flow-container-info">
                    <h2 className='pacients__header-title-info'>
                            Информация/Результаты анализов
                    </h2>
                    <div className='pacients__info'>
                        <ul className='pacients__list-info'>

                        </ul>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Pacients