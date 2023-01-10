import './NewDestination.css';
import Form from "../../Components/Form/Form";
import Top from "../../Components/Top/Top";
import { destinationFormData, destinationFormFields, role } from '../../Common/Form/destinationForm';
import { formButton } from '../../Common/Form/formData';
import Separator from '../../Components/Separator/Separator';

function NewDestination() {

    const { destinationFormName } = destinationFormData;

    const classIcon = "fa-solid fa-location-dot";
    const caption = "ALTA DE DESTINO";
    const styleSeparator = "separator";

    return (
        <div className="new-destination-form-container">
            <Top classIcon={classIcon} caption={caption} />
            <Separator styleSeparator={styleSeparator} />
            <Form
                formName={destinationFormName}
                formFields={destinationFormFields}
                formButton={formButton}
                role={role}
            />
        </div>
    )
}

export default NewDestination