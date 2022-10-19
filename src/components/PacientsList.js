
function PacientsList({pacientsList, handleGetInfoSelectPacient, openPopupAddPacient}){
    console.log(pacientsList)

    function handleClickPacient(_id){
        handleGetInfoSelectPacient(_id)
    }

    function handleClickAddPacient(){
        openPopupAddPacient()
    }

    return(
        <div className="pacients-list-container">
            <div className="header-container">
                <h2 className='header-pacients-list'>
                        Список пациентов
                </h2>
                <button className="button button-animation" type="button" onClick={handleClickAddPacient}>Добавить пациента</button>
            </div>

            <ul className='pacients-list'>
                {
                    pacientsList.map((card) => {
                        return (
                            <li key={card._id} className="button button-animation pacients-list__item" onClick={() => handleClickPacient(card._id)}>
                                { card.surname + " " + card.name + " " + card.middlename}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default PacientsList