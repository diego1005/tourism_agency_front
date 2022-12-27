import { useState, useEffect, useContext } from 'react';
import './NewContract.css';
import Top from '../../Components/Top/Top';
import Form from '../../Components/Form/Form';
import { contractFormData, contractFormFields, generalFormFields } from '../../Common/Form/contractForm';
import { formButton } from '../../Common/Form/formData';
import { ViewContext } from '../../Context/context';
import { useContract } from '../../Hooks/ContractHooks/useContract';

export default function NewContract() {

  const [formFields, setFormFields] = useState([]);
  const [caption, setCaption] = useState();

  const { contractFields } = useContract();

  const { view } = useContext(ViewContext);

  const { contractFormName } = contractFormData;
  const classIcon = "fa-solid fa-file-contract";

  useEffect(() => {
    console.log(contractFields);
  }, [contractFields])

  useEffect(() => {
    const showContract = async () => {
      if (view === "individual") {
        // setFormFields([...contractFormFields, ...individual  FormFields]);
        setCaption(" ALTA DE CONTRATO INDIVIDUAL");
      }
      if (view === "general") {
        setFormFields([...contractFormFields, ...generalFormFields]);
        setCaption(" ALTA DE CONTRATO GENERAL");
      }
    }
    showContract();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [view]);


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
