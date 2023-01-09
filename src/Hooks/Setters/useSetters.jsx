import { useContext } from "react";
import { AppContext, ViewContext } from "../../Context/context";
import { deleteUser } from "../../Services/userServices";

export const useSetters = () => {

    const { userLogged } = useContext(AppContext);
    const { setView } = useContext(ViewContext);

    const { id_role } = userLogged;

    /*
    const [editData, setEditData] = useState([]);

    const handleEdit = (data) => {
        setEditData(data);
        // setView("edit-form");
    }
    */

    const handleDelete = async (data) => {
        const id = data[1]?.value;
        const id_user = data[2].value;
        data = { id_role, id_user };
        const deleteResponse = await deleteUser(id, data);
        if (deleteResponse.status === "success") setView("dashboard");

    }


    return {
        // editData,
        // handleEdit,
        handleDelete,
    }
}
