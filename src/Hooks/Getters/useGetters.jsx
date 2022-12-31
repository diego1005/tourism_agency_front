import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../Context/context";
import { getIndividualContracts, getGeneralContracts, getStudents } from '../../Services/contractServices';

export const Getters = () => {

    const [ready, setReady] = useState(0);
    const [studentsList, setstudentsList] = useState();
    const [individualList, setIndividualList] = useState();
    const [generalList, setGeneralList] = useState();

    const { userLogged } = useContext(AppContext);
    const { id_role } = userLogged;

    useEffect(() => {
        const getData = async () => {
            const { data: students } = await getStudents();
            const { data: individuals } = await getIndividualContracts(id_role)
            const { data: generals } = await getGeneralContracts(id_role)
            setstudentsList(students);
            setIndividualList(individuals);
            setGeneralList(generals);
            setReady(1);
        }

        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ready]);

    return {
        studentsList,
        individualList,
        generalList,
    }
}
