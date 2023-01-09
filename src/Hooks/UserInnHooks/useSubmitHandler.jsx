import { useSendForm } from "./useSendForm";

export const useSubmitHandler = () => {

    const {
        loginHandler,
        registerHandler,
        destinationHandler,
        editStudentFormHandler,
        editIndividualFormHandler,
        editGeneralFormHandler, } = useSendForm();

    const viewHandlers = {
        "login-form": loginHandler,
        "student-form": registerHandler,
        "destination-form": destinationHandler,
        "edit-student": editStudentFormHandler,
        "edit-individual": editIndividualFormHandler,
        "edit-general": editGeneralFormHandler,
    }

    //Fn for handle submit form action
    const submitHandler = (e, data, { id_role }, bodyData) => {
        //Prevent default behaviour
        e.preventDefault();

        const { name } = e.target;

        const id = bodyData[1]?.value || undefined;
        const id_user = bodyData[2]?.value || undefined;
        data = { ...data, id_role, id, id_user }


        if (viewHandlers[name]) viewHandlers[name](data);

    }

    return {
        submitHandler
    }
}
