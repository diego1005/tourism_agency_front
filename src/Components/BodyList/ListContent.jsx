import './ListContent.css';
import Table from '../Table/Table';
import ListContentHead from './Head/ListContentHead';

function ListContent({ ListBody }) {
    return (
        <div className="list-body">
            <ListContentHead />
            <Table ListBody={ListBody} />
        </div>
    )
}

export default ListContent