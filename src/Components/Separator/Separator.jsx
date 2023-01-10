import './Separator.css';

function Separator({ styleSeparator }) {
    return (
        <td className='row-separator'>
            <hr className={styleSeparator} />
        </td>
    )
}

export default Separator