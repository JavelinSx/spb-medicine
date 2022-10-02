
import PacientCard from './PacientCard'
import PacientsList from './PacientsList'
function Pacients(){


    return(
  
            <div className='admin-pacients'>
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
                </div> 
                <div className='pacients-info-container'>
                <PacientsList />
                <PacientCard />
            </div>
            </div>
    
    )
}

export default Pacients