import LoginForm from '../../Components/Login/LoginForm/LoginForm';
import Top from '../../Components/Top/Top';
import './Login.css';
import Separator from '../../Components/Separator/Separator';

export default function Login() {

    const classIcon = "fa-solid fa-user-slash";
    const caption = " Por favor inicia sesion";
    const styleSeparator = "separator";

    return (
        <div className='login'>
            <Top classComponent="login-head" classIcon={classIcon} caption={caption} />
            <Separator styleSeparator={styleSeparator} />
            <LoginForm />
        </div>
    )
}
