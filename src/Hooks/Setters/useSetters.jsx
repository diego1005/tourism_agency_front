import { useContext, useState } from "react";
import { ViewContext } from "../../Context/context";

export const useSetters = () => {

    const [editData, setEdtData] = useState([]);

    const { setView } = useContext(ViewContext);

    const handleEdit = (data) => {
        setEdtData(data);
        console.log(editData);
        // setView("edit-form");
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
