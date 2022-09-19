
function AdminManagment(){
    return(
        <>
            <div className='header'>База данных пациентов</div>
            <div className='admin-managment'>
                <div className="search-container">
                    <input type='search' id='search' className="input input-search" requaried>
                    </input>
                    <label for='search' className="label-card-input label-search">
                            Поиск
                    </label>
                </div>
                <button className='button button-animation button__search'>Искать</button>
                <button className='button button-animation button__add-pacient'>Добавить&nbsp;пациента</button>
                <button className='button button-animation button__update-paceints'>Обновить&nbsp;список&nbsp;пациентов</button>
            </div> 
        </> 
    )
}
export default AdminManagment