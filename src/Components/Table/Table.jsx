import './Table.css';
import TableHead from './THead/TableHead';
import TableBody from './TBody/TableBody';
import { useContext } from 'react';
import { TableContext } from '../../Context/context';

function Table({ headList }) {

    const { bodyList } = useContext(TableContext)

    return (
        <table className='table'>
            <TableHead headList={headList} ></TableHead>
            <TableBody bodyList={bodyList} ></TableBody>
        </table>
    )
}

export default Table;