import { useHandleView } from '../ViewHooks/useHandleView';
import { addUser, login } from '../../Services/User/userServices';

export const useSendForm = () => {

    const { handleView } = useHandleView();

    const registerForm = async (data, file) => {
        let formData = new FormData();
        formData.append("url_img", file.current.files[0]);
        for (let key in data) {
            formData.append(key, data[key])
        }
        const response = await addUser(formData);
        if (response.token) {
            localStorage.setItem("token", response.token);
            handleView("dashboard");
        }
    }

    const loginForm = async (data) => {
        const response = await login(data);
        if (response.token) {
            localStorage.setItem("token", response.token);
            handleView("dashboard");
        }
    }

    return {
        loginForm,
        registerForm,
    }
}
