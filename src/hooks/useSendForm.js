import { useHandlerView } from '../hooks/useHandlerView'
import { addUser, login } from '../services/user/userServices';

export const useSendForm = () => {

    const { handlerView } = useHandlerView();

    const registerHandler = async (data) => {
        let formData = new FormData();
        // formData.append("url_img", file.current.files[0]);
        for (let key in data) {
            formData.append(key, data[key])
        }
        const response = await addUser(formData);
        if (response.token) {
            localStorage.setItem("token", response.token);
            handlerView("dashboard");
        }
    }

    const loginHandler = async (data) => {
        const response = await login(data);
        if (response.token) {
            localStorage.setItem("token", response.token);
            handlerView("dashboard");
        }
    }

    return {
        loginHandler,
        registerHandler,
    }
}
