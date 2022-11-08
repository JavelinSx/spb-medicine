
function PacientsList({pacientsList, handleOncePacientCards, handleOncePacientInfo, openPopupAddPacient}){

    function handleClickPacient(_id){
        handleOncePacientInfo(_id)
        handleOncePacientCards(_id)
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
                    pacientsList.map((pacient) => {
                        return (
                            <li key={pacient._id} className="button button-animation pacients-list__item" onClick={() => handleClickPacient(pacient._id)}>
                                { pacient.surname + " " + pacient.name + " " + pacient.middlename}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default PacientsList