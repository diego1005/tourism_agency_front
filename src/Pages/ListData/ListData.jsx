import { useEffect, useState } from 'react';
import './ListData.css';
import Top from '../../Components/Top/Top';
import ListContent from '../../Components/BodyList/ListContent';
import { TableContext } from '../../Context/context';
import { useGetters } from '../../Hooks/Getters/useGetters';
import { useSetters } from '../../Hooks/Setters/useSetters';

function ListData({ listData }) {

    const [bodyList, setBodyList] = useState();

    const { ready, list, getData } = useGetters();
    const { handleEdit, handleDelete } = useSetters();

    const { titleView, classIcon, caption, headList } = listData;

    useEffect(() => {
        console.log(titleView);
        getData(titleView);
        setBodyList(list);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ready, titleView])

    return (
        <TableContext.Provider value={{ headList, bodyList, handleEdit, handleDelete }}>
            <div className='list-data'>
                <Top classIcon={classIcon} caption={caption} ></Top>
                <ListContent></ListContent>
            </div>
        </TableContext.Provider>
    )
}

export default ListData