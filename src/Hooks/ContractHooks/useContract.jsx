import { useState, useContext, useEffect } from 'react';
import { AppContext } from '../../Context/context';
import { getPaymentMethods, getStates, getGeneralContracts, getStudents } from '../../Services/contractServices';

export const useContract = () => {

    const [paymentMethods, setPaymentMethods] = useState();
    const [states, setStates] = useState();
    const [generalContracts, setGeneralContracts] = useState();
    const [students, setStudents] = useState();

    const { userLogged } = useContext(AppContext);
    const { id_role } = userLogged;

    useEffect(() => {

        const bringPayments = async () => {
            const { data } = await getPaymentMethods();
            setPaymentMethods(data);
        }

        const bringStates = async () => {
            const { data } = await getStates(id_role);
            setStates(data);
        }

        const bringGeneralContracts = async () => {
            const { data } = await getGeneralContracts(id_role);
            setGeneralContracts(data);
        }

        const bringStudents = async () => {
            const { data } = await getStudents();
            setStudents(data);
        }

        bringGeneralContracts();
        bringPayments();
        bringStates();
        bringStudents();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        students,
        generalContracts,
        paymentMethods,
        states,
    }
}
