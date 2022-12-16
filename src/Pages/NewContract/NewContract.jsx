import './NewContract.css';
import Top from '../../Components/Top/Top';
import Form from '../../Components/Form/Form';
import { individualContractFormData, individualContractFormFields } from '../../Common/Form/contractForm';
import { formButton } from '../../Common/Form/formData';

export default function NewContract() {

  const { individualContractFormName } = individualContractFormData;

  const classIcon = "fa-solid fa-file-contract";
  const caption = " ALTA DE CONTRATO PERSONAL";

  return (
    <div className='new-contract-form-container'>
      <Top classIcon={classIcon} caption={caption} />
      <Form
        formName={individualContractFormName}
        formFields={individualContractFormFields}
        formButton={formButton}
      />
    </div>
  )
}
