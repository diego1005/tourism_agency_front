import { useState, useEffect, useContext } from 'react';
import './NewContract.css';
import Top from '../../Components/Top/Top';
import Form from '../../Components/Form/Form';
import { contractFormData, contractFormFields, individualFormFields, generalFormFields } from '../../Common/Form/contractForm';
import { formButton } from '../../Common/Form/formData';
import { ViewContext } from '../../Context/context';
import { useContract } from '../../Hooks/ContractHooks/useContract';

export default function NewContract() {

  const [formFields, setFormFields] = useState([]);
  const [formData, setFormData] = useState([]);
  const [caption, setCaption] = useState();

  const { students, generalContracts, paymentMethods, states, bringData, } = useContract();

  const { view } = useContext(ViewContext);

  const { contractFormName } = contractFormData;
  const classIcon = "fa-solid fa-file-contract";

  useEffect(() => {
    showContract();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [view]);

  const showContract = () => {
    if (view === "individual") {
      bringData();
      setFormData(students, generalContracts, paymentMethods, states);
      console.log(students, generalContracts, paymentMethods, states);
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
        formData={formData}
        formButton={formButton}
      />
    </div>
  )
}
