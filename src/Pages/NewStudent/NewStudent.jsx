import './NewStudent.css';
import Top from '../../Components/Top/Top';
import Form from '../../Components/Form/Form';
import { studentFormData, studentFormFields } from '../../Common/Form/studentForm';
import { formButton } from '../../Common/Form/formData';

export default function NewStudent() {

  const { studentFormName } = studentFormData;

  const classIcon = "fa-solid fa-child";
  const caption = " ALTA DE ESTUDIANTE";

  return (
    <div className='new-student-form-container'>
      <Top classIcon={classIcon} caption={caption} />
      <Form formName={studentFormName} formFields={studentFormFields} formButton={formButton} />
    </div>
  )
}
