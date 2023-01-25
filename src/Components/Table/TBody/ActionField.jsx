import { useContext } from "react"
import { EditContext, ViewContext } from "../../../Context/context"
import { useSetters } from "../../../Hooks/Setters/useSetters";

function ActionField({ elementList }) {

    const { setEditData } = useContext(EditContext);
    const { setView } = useContext(ViewContext);

    const { handleDelete } = useSetters();

    const handleAction = ({ target }, elementList) => {
        const btn_id = target.id;
        if (btn_id === "btn-edit") {
            setEditData(elementList);
            setView("edit-form");
        }
        if (btn_id === "btn-delete") handleDelete(elementList);
    }

    return (
        < td className="actions-field">
            <button className="btn-edit" onClick={e => handleAction(e, elementList)}>
                <i id="btn-edit" className="fa-solid fa-pen-to-square"></i>
            </button>
            <button className="btn-delete" onClick={e => handleAction(e, elementList)}>
                <i id="btn-delete" className="fa-solid fa-trash"></i>
            </button>
        </td>
    )
}

export default ActionField