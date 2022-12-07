import './Login.css';
import UserForm from '../userForms/UserForm';
import { loginFormFields } from '../../common/formFields/formFields';

export default function Login() {

    const formButton = {
        className: 'btn-login',
        value: "Iniciar Sesion"
    }

    return (
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
    )
}
