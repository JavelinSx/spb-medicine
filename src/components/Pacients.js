
import AdminManagment from './AdminManagment'
import PacientCard from './PacientCard'
import PacientsList from './PacientsList'
function Pacients(){


    return(
        <div className='admin-pacients'>
            <AdminManagment />
            <PacientsList />
            <PacientCard />
        </div>
    )
}

export default Pacients