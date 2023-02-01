import { useContext, useState } from "react";
import { AppContext } from "../../Context/context";
import { studentBodyList, individualBodyList, generalBodyList } from '../../Common/List/';
import { getIndividualContractByDni, getIndividualContracts, getGeneralContracts, getStudents } from '../../Services/contractServices';

export const useGetters = () => {

    const [ready, setReady] = useState(false);
    const [list, setList] = useState([]);

    const { userLogged } = useContext(AppContext);
    const { id_role } = userLogged;

    const getDataForList = async (titleView) => {
        try {
            let bodyList = [];
            if (titleView === "students") {
                const { data: students } = await getStudents();
                bodyList = studentBodyList(students);
            }
            if (titleView === "individual") {
                const { data: individuals } = await getIndividualContracts(id_role)
                bodyList = individualBodyList(individuals);
            }
            if (titleView === "general") {
                const { data: generals } = await getGeneralContracts(id_role)
                bodyList = generalBodyList(generals);
            }
            setList(bodyList);
            setReady(true);
        } catch (error) {
            console.error(error);
        }
    }

    const getIndividualContract = async (dni) => {
        try {
            let bodyList = [];
            const { data: individual } = await getIndividualContractByDni(dni);
            bodyList = individualBodyList(individual);
            setList(bodyList);
            setReady(true);
        } catch (error) {
            console.error(error);
        }
    }

    return {
        ready,
        list,
        getDataForList,
        getIndividualContract,
    }
}
