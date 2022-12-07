import './UserForm.css';
import FormField from './FormField';
import FormButton from './FormButton';

export default function UserForm({ name, fields, button }) {
    return (
        <form className='form' name={name}>
            <div className="form-ctr">
                {
                    fields.map((el, idx) =>
                        <FormField
                            key={idx}
                            icon={el.icon}
                            type={el.icon}
                            name={el.name}
                            pHolder={el.pHolder}
                        />
                    )
                }
            </div>
            <FormButton content={button} />
        </form>
    )
}

