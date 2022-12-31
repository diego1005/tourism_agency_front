import './ListData.css';
import Top from '../../Components/Top/Top';
import ListContent from '../../Components/BodyList/ListContent';

function ListData({ listData }) {

    const { classIcon, caption, listBody } = listData;

    return (
        <div className='list-data'>
            <Top classIcon={classIcon} caption={caption} ></Top>
            <ListContent listBody={listBody} ></ListContent>
        </div>
    )
}

export default ListData