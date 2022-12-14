import LoginForm from '../../Components/Login/LoginForm/LoginForm';
import Top from '../../Components/Top/Top';
import './Login.css';

export default function Login() {

    const classIcon = "fa-solid fa-right-to-bracket";
    const caption = " Por favor inicia sesion";

    return (
        <div className='login'>
            <Top classComponent="login-head" classIcon={classIcon} caption={caption} />
            <LoginForm />
        </div>
    )
}
