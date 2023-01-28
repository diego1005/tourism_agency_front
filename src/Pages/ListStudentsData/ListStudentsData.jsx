import { useEffect, useState } from 'react';
import './ListStudentsData.css';
import Top from '../../Components/Top/Top';
import ListContent from '../../Components/BodyList/ListContent';
import { TableContext } from '../../Context/context';
import { useGetters } from '../../Hooks/Getters/useGetters';

function ListData({ listData }) {

    const [bodyList, setBodyList] = useState();

    const { ready, list, getData } = useGetters();

    const { titleView, caption, headList } = listData;

    useEffect(() => {
        getData(titleView);
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

export default ListData