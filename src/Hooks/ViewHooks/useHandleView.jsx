import { useContext } from "react"
// import { displayView } from "../../Common/Views/displayView";
import { AppContext, ViewContext } from "../../Context/context"

export const useHandleView = () => {

    const { userLogged, userIsLogged } = useContext(AppContext);
    const { setView } = useContext(ViewContext);

    const handleView = (e = null, view) => {
        if (e) e.preventDefault();

        if (!userLogged) {
            userIsLogged()
        } else {
            // view = (view === "LOG IN" || view === "SIGN IN") ? "userinn" : view;
            // setView(displayView(userLogged, view));
            setView(view);
        }
    }
    return {
        handleView,
    }
}
