import { useSendForm } from "./useSendForm";

export const useSubmitHandler = () => {

    const { loginHandler, registerHandler } = useSendForm();

    //Fn for handle submit form action
    const submitHandler = (e, data, { id_role }) => {
        //Prevent default behaviour
        e.preventDefault();

        const { name } = e.target;

        data = { ...data, id_role }

        if (name === "login-form") loginHandler(data);
        if (name === "student-form") registerHandler(data);
    }

    return {
        submitHandler
    }
}
