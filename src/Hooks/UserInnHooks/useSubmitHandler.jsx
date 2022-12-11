import { useSendForm } from "./useSendForm";

export const useSubmitHandler = () => {

    const { loginHandler/*, registerHandler*/ } = useSendForm();

    //Fn for handle submit form action
    const submitHandler = (e, data) => {
        //Prevent default behaviour
        e.preventDefault();

        const { name } = e.target;

        // if (name === "register") registerHandler(data);
        if (name === "login-form") loginHandler(data);
    }

    return {
        submitHandler
    }
}
