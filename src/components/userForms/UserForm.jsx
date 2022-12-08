import { useContext } from 'react'
import "./UserForm.css";
import FormField from "./FormField";
import FormButton from "./FormButton";
import Remember from "./Remember";
import Forgot from "./Forgot";
import { UserContext } from '../../context/context';

export default function UserForm({ name, fields, button }) {

    const { inputData, submitHandler } = useContext(UserContext);

    return (
        <form className="form" name={name} onSubmit={e => submitHandler(e, inputData)}>
            <div className="form-content">
                <div className="form-ctr">
                    {fields.map((el, idx) => (
                        <FormField
                            key={idx}
                            icon={el.icon}
                            type={el.icon}
                            name={el.name}
                            pHolder={el.pHolder}
                        />
                    ))}
                </div>
                {name === "login" && (
                    <div className="remember-forgot-container">
                        <Remember />
                        <Forgot />
                    </div>
                )}
            </div>
            <div className="form-btn">
                <FormButton content={button} />
            </div>
        </form>
    );
}
