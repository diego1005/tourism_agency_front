import './Form.css';
import FormButton from "./FormButton/FormButton";
import FormField from "./FormField/FormField";
import { FormHandlerContext } from '../../Context/context';
import { useInputHandler } from '../../Hooks/FormHooks/useInputHandler';
import { useSubmitHandler } from '../../Hooks/UserInnHooks/useSubmitHandler';

export default function Form({ formName, formFields, formButton }) {

    const { submitHandler } = useSubmitHandler();
    const { inputData, inputHandler } = useInputHandler();

    return (
        <FormHandlerContext.Provider value={{ inputData, inputHandler }}>
            <form name={formName} className={`form ${formName}`} onSubmit={e => submitHandler(e, inputData)}>
                {
                    formFields.map((field, idx) =>
                        <FormField
                            key={idx}
                            icon={field.icon}
                            type={field.type}
                            name={field.name}
                            pHolder={field.pHolder}
                        />
                    )
                }
                <FormButton formButton={formButton} />
            </form>
        </FormHandlerContext.Provider>
    )
}
