import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../Context/context';
import { individualFormFields } from '../../Common/Form/contractForm';
import { getPaymentMethods, getStates, getGeneralContracts, getStudents } from '../../Services/contractServices';

export const useContract = () => {

    const [contractFields, setContractFields] = useState([]);
    const [optionData, setOptionData] = useState([])

    const { userLogged } = useContext(AppContext);
    const { id_role } = userLogged;

    useEffect(() => {

        const setFormData = async () => {
            try {
                Promise.all([getPaymentMethods(), getStudents(), getStates(id_role), getGeneralContracts(id_role)])
                    .then(response => {
                        const data = response.map(element => element.data);
                        setOptionData(data);
                        for (let i = 0; i < individualFormFields.length; i++) {
                            individualFormFields[i].options = optionData[i];
                        }
                        setContractFields(individualFormFields);
                    });
            } catch (error) {
                console.error(error);
            }
        }
        setFormData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [contractFields]);

    return {
        contractFields,
    }
}
