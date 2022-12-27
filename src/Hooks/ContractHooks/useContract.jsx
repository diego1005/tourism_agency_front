import { useContext, useState } from 'react';
import { AppContext } from '../../Context/context';
import { individualFormFields } from '../../Common/Form/contractForm';
import { getPaymentMethods, getStates, getGeneralContracts, getStudents } from '../../Services/contractServices';

export const useContract = () => {

    const [payments, setPayments] = useState();
    const [states, setStates] = useState();
    const [general, setGeneral] = useState();
    const [students, setStudents] = useState();
    const [contractFields, setContractFields] = useState();

    const { userLogged } = useContext(AppContext);
    const { id_role } = userLogged;

    const bringData = async () => {
        const { data: payments } = await getPaymentMethods();
        setPayments(payments);
        const { data: states } = await getStates(id_role);
        setStates(states);
        const { data: general } = await getGeneralContracts(id_role);
        setGeneral(general);
        const { data: students } = await getStudents();
        setStudents(students);
    }

    bringData();

    const optionData = [payments, states, general, students];

    individualFormFields = individualFormFields.map(({ options }, idx) =>
        options = optionData[idx]
    )

    console.log(individualFormFields);

    return {
        contractFields,
    }
}
