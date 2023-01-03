import { useSendForm } from "./useSendForm";

export const useSubmitHandler = () => {

    const { loginHandler, registerHandler, destinationHandler } = useSendForm();

    const viewHandlers = {
        "login-form": loginHandler,
        "student-form": registerHandler,
        "destination-form": destinationHandler,
    }

    //Fn for handle submit form action
    const submitHandler = (e, data, { id_role }) => {
        //Prevent default behaviour
        e.preventDefault();

        const { name } = e.target;

        data = { ...data, id_role }

        if (viewHandlers[name]) viewHandlers[name](data);

    }

    return {
        submitHandler
    }
}
