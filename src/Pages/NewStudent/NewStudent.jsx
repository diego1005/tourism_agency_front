import './NewStudent.css';
import Top from '../../Components/Top/Top';
import { Form } from 'react-router-dom';
import { studentFormFields } from '../../Common/Form/studentForm';

export default function NewStudent() {

  const classIcon = "fa-solid fa-child";
  const caption = " ALTA DE ESTUDIANTE";

  return (
    <div className='new-student-form-container'>
      <Top classIcon={classIcon} caption={caption} />
      <Form formName={ } formFields={ } formButton={ } />
    </div>
  )
}
