import './EditData.css';
import { editFormData, role } from '../../Common/Form/editFormData';
import { formButton } from '../../Common/Form/formData';
import Top from '../../Components/Top/Top';
import Form from '../../Components/Form/Form';
import Separator from '../../Components/Separator/Separator';

function EditData({ editData }) {

    const { classIcon, caption } = editFormData;
    const editFormName = editData[0].form_name;
    const styleSeparator = "separator";

    return (
        <div className='edit-data-form-container'>
            <Top classIcon={classIcon} caption={caption} />
            <Separator styleSeparator={styleSeparator} />
            <Form
                formName={editFormName}
                formFields={editData}
                formButton={formButton}
                role={role}
            />
        </div>
    )
}

export default EditData