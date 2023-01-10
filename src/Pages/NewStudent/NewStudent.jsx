import './NewStudent.css';
import Top from '../../Components/Top/Top';
import Form from '../../Components/Form/Form';
import { studentFormData, studentFormFields, role } from '../../Common/Form/studentForm';
import { formButton } from '../../Common/Form/formData';
import Separator from '../../Components/Separator/Separator';

export default function NewStudent() {

  const { studentFormName } = studentFormData;

  const classIcon = "fa-solid fa-child";
  const caption = " ALTA DE ESTUDIANTE";
  const styleSeparator = "separator";

  return (
    <div className='new-student-form-container'>
      <Top classIcon={classIcon} caption={caption} />
      <Separator styleSeparator={styleSeparator} />
      <Form
        formName={studentFormName}
        formFields={studentFormFields}
        role={role}
        formButton={formButton} />
    </div>
  )
}
