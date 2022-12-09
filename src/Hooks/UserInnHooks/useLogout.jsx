import { useContext } from "react";
import { AppContext } from "../../Context/context";
import { logout } from "../../Services/User/userServices";

export const useLogout = () => {

    const { userIsLogged } = useContext(AppContext);

    const logoutUser = async () => {
        const status = await logout();
        if (status === "success") {
            localStorage.clear();
            userIsLogged();
        }
    }

    return {
        logoutUser,
    }
}
