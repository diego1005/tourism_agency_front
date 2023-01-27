import TdRow from "../../UI/TdRow/TdRow";
import ActionField from "./ActionField";

function TableBody({ bodyList }) {
  const render = () => {
    if(!bodyList){
      return <tr className="row">
        <td className="no-records">No hay registros</td>
      </tr>
    }
    return bodyList.map((elementList) =>{
      return <tr className="row td-row">
          { elementList.map((element, idx) =>{
          return (idx > 2) &&
            <TdRow key={idx} value={element.value}/>
          })
        }
        <ActionField elementList={elementList}/>
      </tr>
    })
  }
  return (
  <tbody className="table-body">
    { render() }
  </tbody>
  )

}

export default TableBody;