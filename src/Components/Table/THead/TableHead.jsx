import ThRow from '../../UI/ThRow/ThRow';
import './TableHead.css';
function TableHead() {

  return (
    <thead className="table-head">
      <div className='row'>
        <ThRow value={"DNI"}/>
      </div>

      <div className='row'>
        <ThRow value={"Nombre"}/>
      </div>

      <div className='row'>
        <ThRow value={"Apellido"}/>
      </div>

      <div className='row'>
        <ThRow value={"Email"}/>
      </div>

      <div className='row'>
        <ThRow value={"Fecha de Nacimiento"}/>
      </div>

      <div className='row'>
        <ThRow value={"Teléfono"}/>
      </div>
    </thead>
  )
}

export default TableHead;