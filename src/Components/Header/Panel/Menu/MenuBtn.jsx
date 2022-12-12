import { useHandleView } from "../../../../Hooks/ViewHooks/useHandleView";
import { useLogout } from "../../../../Hooks/UserInnHooks/useLogout";

export default function MenuBtn({ title, newView }) {

    const { handleView } = useHandleView();
    const { logoutUser } = useLogout();

    return (
        <li>
            <button
                className='menu-btn'
                onClick={() =>
                    title === "Cerrar Sesion"
                        ? logoutUser()
                        : handleView(null, newView)
                }
            >{title}</button>
        </li>
    )
}
