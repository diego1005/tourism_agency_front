import Form from '../../Form/Form';
import { loginFormData, loginFormFields, loginFormButton, role } from '../../../Common/Form/userForm';
// import LoginIcon from './LoginIcon';

export default function LoginForm() {

    const { loginFormName } = loginFormData;

    return (
        <div className="login-form-container">
            {/* <LoginIcon /> */}
            <Form
                formName={loginFormName}
                formFields={loginFormFields}
                formButton={loginFormButton}
                role={role}
            />
        </div>
    )
}
