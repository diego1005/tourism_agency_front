
import TdRow from "../../UI/TdRow/TdRow";
import ActionField from "./ActionField";

function TableBody({ bodyList }) {

  return (
    <tbody className="table-body">
      <tr className="row td-row">
        {
          !bodyList
            ? <td className="no-records">No hay registros</td>
            : bodyList.map((element, idx) =>
              (idx > 2) &&
              <TdRow key={idx} value={element.value}/>)
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