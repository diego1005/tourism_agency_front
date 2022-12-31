import './Table.css';
import TableHead from './THead/TableHead';
import TableBody from './TBody/TableBody';

function Table({ listBody }) {
    return (
        <table className='table'>
            <TableHead></TableHead>
            <TableBody></TableBody>
        </table>
    )
}

export default Table