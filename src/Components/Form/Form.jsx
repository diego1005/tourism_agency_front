import './Form.css';
import FormButton from "./FormButton/FormButton";
import FormField from "./FormField/FormField";

export default function Form({ formName, formFields, formButton }) {
    return (
        <form name={formName} className={`form ${formName}`}>
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
    )
}
