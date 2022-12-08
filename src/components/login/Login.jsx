import './Login.css';
import { UserContext } from '../../context/context'
import UserForm from '../userForms/UserForm';
import { loginFormFields } from '../../common/form/formFields';
import { useHandlerSubmit } from '../../hooks/useHandlerSubmit';
import { useHandlerInput } from '../../hooks/useHandlerInput';

export default function Login() {

    const { submitHandler } = useHandlerSubmit();
    const { inputData, inputHandler } = useHandlerInput();

    const formButton = {
        className: 'btn-login',
        value: "Iniciar Sesion"
    }

    return (
        <UserContext.Provider value={{ inputData, inputHandler, submitHandler }}>
            <div className='login-container'>
                <div className="login-icon">
                    <i className="fa-regular fa-user"></i>
                </div>
                <UserForm
                    name='login'
                    fields={loginFormFields}
                    button={formButton}
                />
            </div>
        </UserContext.Provider>
    )
}
