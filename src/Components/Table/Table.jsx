import './Table.css';
import TableHead from './TableHead';
import TableBody from './TableBody';

function Table() {
    return (
        <table className='table'>
            <TableHead></TableHead>
            <TableBody></TableBody>
        </table>
    )
}

export default Table