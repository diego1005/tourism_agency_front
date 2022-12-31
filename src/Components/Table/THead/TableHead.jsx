import Row from '../Row';

function TableHead({ headList }) {

  console.log(headList);

  return (
    <thead className="table-head">
      <tr className='row'>
        {
          headList.map((element, idx) =>
            <Row
              key={idx}
              typeRow={element.type}
              value={element.value}
            />)
        }
      </tr>
    </thead>
  )
}

export default TableHead