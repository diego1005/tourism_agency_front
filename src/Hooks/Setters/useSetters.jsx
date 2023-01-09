import { useContext } from "react";
import { ViewContext } from "../../Context/context";
import { deleteUser } from "../../Services/userServices";

export const useSetters = () => {

    const { setView } = useContext(ViewContext);

    /*
    const [editData, setEditData] = useState([]);

    const handleEdit = (data) => {
        setEditData(data);
        // setView("edit-form");
    }
    */

    const handleDelete = async (data) => {
        const id = data[1].value
        const deleteResponse = await deleteUser(id);
        if (deleteResponse.status === "success") setView("dashboard");

    }


    return {
        // editData,
        // handleEdit,
        handleDelete,
    }
}
