import './ListContent.css';
import Table from '../Table/Table';
import ListContentHead from './Head/ListContentHead';
import { useContext } from 'react';
import { TableContext } from '../../Context/context';

function ListContent() {

    const { headList } = useContext(TableContext)

    return (
        <div className="list-body">
            <ListContentHead />
            <Table headList={headList} />
        </div>
    )
}

export default ListContent