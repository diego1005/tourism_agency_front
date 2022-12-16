import { useState, useEffect, useContext } from 'react';
import './NewContract.css';
import Top from '../../Components/Top/Top';
import Form from '../../Components/Form/Form';
import { contractFormData, contractFormFields, individualFormFields, generalFormFields } from '../../Common/Form/contractForm';
import { formButton } from '../../Common/Form/formData';
import { ViewContext } from '../../Context/context';

export default function NewContract() {

  const [formFields, setFormFields] = useState([]);
  const [caption, setCaption] = useState();

  const { view } = useContext(ViewContext);

  const { contractFormName } = contractFormData;
  const classIcon = "fa-solid fa-file-contract";
  
  useEffect(() => {
    showContract();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [view]);

  const showContract = () => {
    if (view === "individual") {
      setFormFields([...contractFormFields, ...individualFormFields]);
      setCaption(" ALTA DE CONTRATO INDIVIDUAL");
    }
    if (view === "general") {
      setFormFields([...contractFormFields, ...generalFormFields]);
      setCaption(" ALTA DE CONTRATO GENERAL");
    }
  }

  return (
    <div className='new-contract-form-container'>
      <Top classIcon={classIcon} caption={caption} />
      <Form
        formName={contractFormName}
        formFields={formFields}
        formButton={formButton}
      />
    </div>
  )
}
