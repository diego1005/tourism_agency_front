import { useContext, useEffect, useState } from 'react';
import { AppContext, ViewContext } from '../../Context/context';
import { individualFormFields, generalFormFields } from '../../Common/Form/contractForm';
import {
    getPaymentMethods,
    getIndStates,
    getGeneralContracts,
    getStudents,
    getGenStates,
    getDestinations
} from '../../Services/contractServices';

export const useContract = () => {

    const [contractFields, setContractFields] = useState([]);
    const [optionData, setOptionData] = useState([])

    const { userLogged } = useContext(AppContext);
    const { view } = useContext(ViewContext);

    const { id_role } = userLogged;

    const getterIndividuals = [getPaymentMethods(), getStudents(), getIndStates(id_role), getGeneralContracts(id_role)];
    const getterGenerals = [getDestinations(), getGenStates(id_role)];
    const getters = (view === "individual") ? getterIndividuals : (view === "general") ? getterGenerals : null;

    useEffect(() => {

        const setFormData = async () => {
            try {
                Promise.all(getters)
                    .then(response => {
                        const data = response.map(element => element.data);
                        setOptionData(data);
                        let i = 0;
                        if (view === "individual") {
                            // eslint-disable-next-line array-callback-return
                            individualFormFields.map(field => {
                                i = (i < 0) ? 0 : i;
                                if (field.tag === "select") {
                                    field.options = optionData[i];
                                    i++;
                                } else i--;
                            })
                            setContractFields(individualFormFields);
                        } else if (view === "general") {
                            // eslint-disable-next-line array-callback-return
                            generalFormFields.map(field => {
                                i = (i < 0) ? 0 : i;
                                if (field.tag === "select") {
                                    field.options = optionData[i];
                                    i++;
                                } else i--;
                            })
                            setContractFields(generalFormFields);
                        }
                    });
            } catch (error) {
                console.error(error);
            }
        }
        setFormData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [view, contractFields]);

    return {
        contractFields,
    }
}
