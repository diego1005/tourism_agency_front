
import { useHandleView } from '../ViewHooks/useHandleView';
import { addUser, editUser, login } from '../../Services/userServices';
import { addDestination } from '../../Services/contractServices';

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
        else console.log("error");/*alert(response.status)*/;
    }

    const loginHandler = async (data) => {
        const response = await login(data);
        if (response.token) {
            localStorage.setItem("token", response.token);
            handleView(null, "dashboard");
        }
    }

    const destinationHandler = async (data) => {
        const response = await addDestination(data);
        if (response.status === "success") handleView(null, "dashboard");
    }

    const editStudentFormHandler = async (data) => {
        const response = await editUser(data);
        if (response.status === "success") handleView(null, "students-list");
    }
    const editIndividualFormHandler = async (data) => {
        // const response = await addDestination(data);
        console.log(data);
    }
    const editGeneralFormHandler = async (data) => {
        // const response = await addDestination(data);
        console.log(data);
    }

    return {
        loginHandler,
        registerHandler,
        destinationHandler,
        editStudentFormHandler,
        editIndividualFormHandler,
        editGeneralFormHandler,
    }
}
