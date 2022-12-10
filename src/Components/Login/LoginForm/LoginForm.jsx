import Form from '../../Form/Form';
import { loginFormInfo, loginFormFields, loginFormButton } from '../../../Common/Form/formData';
import LoginIcon from './LoginIcon';

export default function LoginForm() {

    const { loginFormClass } = loginFormInfo;

    return (
        <div className="login-form-container">
            <LoginIcon/>
            <Form
                formName={loginFormClass}
                formFields={loginFormFields}
                formButton={loginFormButton}
            />
        </div>
    )
}
