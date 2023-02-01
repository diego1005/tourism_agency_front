import './StudentDetails.css';
import ItemDetail from '../../Components/ItemDetail/ItemDetail';
import { useGetters } from '../../Hooks/Getters/useGetters';
import { useContext } from 'react';
import { ViewContext } from '../../Context/context';

function StudentDetails({ details }) {

    const { getIndividualContract } = useGetters()

    const { setView } = useContext(ViewContext);

    const { value } = details?.find(el => el.name === "dni")

    console.log(value);

    const goTo = () => {
        getIndividualContract(value);
        setView("individual-details");
    }

    return (
        <div className='student-details-container'>
            <div className="details-title">
                <h2>Detalles</h2>
            </div>
            <ItemDetail details={details} />
            <div className="go-to">
                <h3 onClick={goTo}>Ver Contrato Individual</h3>
            </div>
        </div>
    )
}

export default StudentDetails
