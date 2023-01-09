import Row from "../Row";
import ActionField from "./ActionField";

function TableBody({ bodyList }) {

  return (
    <tbody className="table-body">
      <tr className="row">
        {
          !bodyList
            ? <td className="no-records">No hay registros</td>
            : bodyList.map((element, idx) =>
              (idx > 2) &&
              <Row
                key={idx}
                tag={element.tag}
                value={element.value}
              />)
        }
        {
          bodyList &&
          <ActionField bodyList={bodyList} />
        }
      </tr>
    </tbody >
  )
}

export default TableBody