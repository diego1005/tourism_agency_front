import { useContext } from "react";
import { TableContext } from "../../../Context/context";

function ActionField({ bodyList }) {

    const { handleEdit, handleDelete } = useContext(TableContext);

    return (
        < td className="actions-field">
            <i className="fa-solid fa-trash" onClick={() => handleDelete(bodyList)}></i>
            <i className="fa-solid fa-pen-to-square" onClick={() => handleEdit(bodyList)}></i>
        </td>
    )
}

export default ActionField