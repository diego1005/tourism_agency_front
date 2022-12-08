import { useSendForm } from "./useSendForm";

export const useHandlerSubmit = () => {

    const { loginHandler, registerHandler } = useSendForm();

    //Fn for handle submit form action
    const submitHandler = (e, data) => {
        e.preventDefault();

        const { name } = e.target;

        if (name === "register") registerHandler(data);
        if (name === "login") loginHandler(data);
    }

    return {
        submitHandler,
    }
}