import { useEffect } from 'react';
import './EditData.css';
import { editFormData, role } from '../../Common/Form/editFormData';
import { formButton } from '../../Common/Form/formData';
import Top from '../../Components/Top/Top';
import Form from '../../Components/Form/Form';
import { useSetters } from '../../Hooks/Setters/useSetters';

function EditData() {

    const { editFormName, classIcon, caption } = editFormData;

    return (
        <div className='edit-data-form-container'>
            <Top classIcon={classIcon} caption={caption} />
            {/* <Form
                formName={editFormName}
                formFields={formFields}
                formButton={formButton}
                role={role}
            /> */}
        </div>
    )
}

export default EditData