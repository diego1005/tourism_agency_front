import { useEffect, useState } from 'react';
import './ListStudentsData.css';
import Top from '../../Components/Top/Top';
import ListContent from '../../Components/BodyList/ListContent';
import { TableContext } from '../../Context/context';
import { useGetters } from '../../Hooks/Getters/useGetters';

function ListStudentsData({ listData }) {

    const [bodyList, setBodyList] = useState();

    const { ready, list, getDataForList } = useGetters();

    const { titleView,  headList } = listData;

    useEffect(() => {
        getDataForList(titleView);
        setBodyList(list);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ready, titleView])

    return (
        <TableContext.Provider value={{ headList, bodyList }}>
            <div className='list-data'>
                <Top caption={"Listado de estudiantes"} ></Top>
                <ListContent></ListContent>
            </div>
        </TableContext.Provider>
    )
}

export default ListStudentsData;