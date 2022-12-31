import './ListData.css';
import Top from '../../Components/Top/Top';
import ListContent from '../../Components/BodyList/ListContent';
import { TableContext } from '../../Context/context';

function ListData({ listData }) {

    const { classIcon, caption, headList } = listData;

    return (
        <TableContext.Provider value={{ headList/*, bodyList */}}>
            <div className='list-data'>
                <Top classIcon={classIcon} caption={caption} ></Top>
                <ListContent></ListContent>
            </div>
        </TableContext.Provider>
    )
}

export default ListData