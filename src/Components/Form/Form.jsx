import './Form.css';
import FormButton from "./FormButton/FormButton";
import FormField from "./FormField/FormField";
import { FormHandlerContext } from '../../Context/context';
import { useInputHandler } from '../../Hooks/FormHooks/useInputHandler';
import { useSubmitHandler } from '../../Hooks/UserInnHooks/useSubmitHandler';

export default function Form({ formName, formClass = null, formFields, formData, role, formButton }) {

    const { submitHandler } = useSubmitHandler();
    const { inputData, inputHandler } = useInputHandler();

    return (
        <FormHandlerContext.Provider value={{ inputData, inputHandler }}>
            <form
                name={formName}
                className={formClass ? `form ${formClass}` : "form"}
                onSubmit={e => submitHandler(e, inputData, role)}>
                {
                    formFields.map((field, idx) =>
                        <FormField
                            key={idx}
                            tag={field.tag}
                            icon={field.icon}
                            type={field.type}
                            field={field.name}
                            pHolder={field.pHolder}
                            label={field.label}
                            formData={formData}
                        />
                    )
                }
                <FormButton formButton={formButton} />
            </form>
        </FormHandlerContext.Provider>
    )
}
