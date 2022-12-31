import SearchPanel from './SearchPanel';
import ButtonPanel from './ButtonPanel';

function ListContentHead() {
    return (
        <div className='list-content-head'>
            <SearchPanel />
            <ButtonPanel />
        </div>
    )
}

export default ListContentHead