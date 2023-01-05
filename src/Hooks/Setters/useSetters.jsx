import { useContext, useState } from "react";
import { ViewContext } from "../../Context/context";

export const useSetters = () => {

    const [editData, setEditData] = useState([]);

    const { setView } = useContext(ViewContext);

    const handleEdit = (data) => {
        console.log(data);
        setEditData(data);
        setView("edit-form");
    }
    
    const handleDelete = (data) => {
        console.log("handleDelete");
    }

    
    return {
        editData,
        handleEdit,
        handleDelete,
    }
}
