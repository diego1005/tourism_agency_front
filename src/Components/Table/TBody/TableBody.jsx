import Row from "../Row"

function TableBody({ bodyList }) {
  return (
    <tbody className="table-body">
      <tr className="row">
        {
          bodyList.map((element, idx) =>
            <Row
              key={idx}
              typeRow={element.type}
              value={element.value}
            />)
        }
      </tr>
    </tbody>
  )
}

export default TableBody