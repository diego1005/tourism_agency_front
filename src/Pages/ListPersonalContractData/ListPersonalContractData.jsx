import { useEffect, useState } from 'react';
import './ListPersonalContractData.css';
import Top from '../../Components/Top/Top';
import ListContent from '../../Components/BodyList/ListContent';
import { TableContext } from '../../Context/context';
import { useGetters } from '../../Hooks/Getters/useGetters';

function ListPersonalContractData({ listData }) {

    const [bodyList, setBodyList] = useState();

    const { ready, list, getDataForList } = useGetters();

    const { titleView, headList } = listData;

    useEffect(() => {
        getDataForList(titleView);
        setBodyList(list);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ready, titleView])

    return (
        <TableContext.Provider value={{ headList, bodyList }}>
            <div className='list-data'>
                <Top caption={"Listado de contratos personales"} ></Top>
                <ListContent></ListContent>
            </div>
        </TableContext.Provider>
    )
}

export default ListPersonalContractData;