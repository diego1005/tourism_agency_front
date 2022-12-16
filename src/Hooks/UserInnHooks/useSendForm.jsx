
import { useHandleView } from '../ViewHooks/useHandleView';
import { addUser, login } from '../../Services/userServices';

export const useSendForm = () => {

    const { handleView } = useHandleView();

    const registerHandler = async (data) => {
        //TODO for add user profile image ------------------
        /*let formData = new FormData();
        formData.append("url_img", file.current.files[0]);
        for (let key in data) {
            formData.append(key, data[key])
        }*/
        //TODO ----------------------------------------------
        const response = await addUser(data);
        if (response.status === "success") handleView(null, "dashboard");
        else alert(response.status);
    }

    const loginHandler = async (data) => {
        const response = await login(data);
        if (response.token) {
            localStorage.setItem("token", response.token);
            handleView(null, "dashboard");
        }
    }

    return {
        loginHandler,
        registerHandler,
    }
}
