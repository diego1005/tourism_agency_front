import Row from "../Row";
import ActionField from "./ActionField";

function TableBody({ bodyList }) {
  const render = () => {
    if(!bodyList){
      return <tr className="row">
        <td className="no-records">No hay registros</td>
      </tr>
    }
    return bodyList.map((elementList) =>{
      return <tr className="row">
          { elementList.map((element, idx) =>{
          return (idx > 2) &&
            <Row
              key={idx}
              tag={element.tag}
              value={element.value}
            />
          })
        }
        <ActionField elementList={elementList}/>
      </tr>
    })
  }
  return (
    <tbody className="table-body">
      { render() }
        {/* {
          !bodyList
            ? <td className="no-records">No hay registros</td>
            : bodyList.map((element, idx) =>
              (idx > 2) &&
              <Row
                key={idx}
                tag={element.tag}
                value={element.value}
              />
            )
        }
        {
          bodyList &&
          <ActionField bodyList={bodyList} />
        } */}
    </tbody >
  )
}

export default TableBody