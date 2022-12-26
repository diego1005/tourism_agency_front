import { useContext } from 'react';
import { AppContext } from '../../Context/context';
import { individualFormFields } from '../../Common/Form/contractForm';
import { getPaymentMethods, getStates, getGeneralContracts, getStudents } from '../../Services/contractServices';

export const useContract = () => {

    const { userLogged } = useContext(AppContext);
    const { id_role } = userLogged;

    const bringData = async () => {
        const { data: payments } = await getPaymentMethods();
        const { data: states } = await getStates(id_role);
        const { data: general } = await getGeneralContracts(id_role);
        const { data: students } = await getStudents();

        const optionData = [payments, states, general, students];

        individualFormFields.forEach((field, idx) =>
            field.options = optionData[idx]
        )

        return individualFormFields;

    }

    return {
        bringData,
    }
}
