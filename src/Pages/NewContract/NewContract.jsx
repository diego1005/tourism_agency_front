import { useState, useEffect, useContext } from 'react';
import './NewContract.css';
import Top from '../../Components/Top/Top';
import Form from '../../Components/Form/Form';
import { contractFormData, contractFormFields, generalFormFields, individualFormFields } from '../../Common/Form/contractForm';
import { formButton } from '../../Common/Form/formData';
import { ViewContext } from '../../Context/context';
import { useContract } from '../../Hooks/ContractHooks/useContract';

export default function NewContract() {

  const [formFields, setFormFields] = useState([]);
  const [caption, setCaption] = useState();

  const { bringData } = useContract();

  const { view } = useContext(ViewContext);

  const { contractFormName } = contractFormData;
  const classIcon = "fa-solid fa-file-contract";

  useEffect(() => {
    const showContract = async () => {
      if (view === "individual") {
        const individualFormFields = await bringData();
        console.log(individualFormFields);
        console.log("que pue");
        setFormFields([...contractFormFields, ...individualFormFields]);
        setCaption(" ALTA DE CONTRATO INDIVIDUAL");
      }
      if (view === "general") {
        setFormFields([...contractFormFields, ...generalFormFields]);
        setCaption(" ALTA DE CONTRATO GENERAL");
      }
    }
    showContract();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [view, individualFormFields]);


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
