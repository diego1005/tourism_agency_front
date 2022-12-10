import LoginForm from '../../Components/Login/LoginForm/LoginForm'
import LoginHead from '../../Components/Login/LoginHead/LoginHead'
import './Login.css'

export default function Login() {


    return (
        <div className='login'>
            <LoginHead/>
            <LoginForm />
        </div>
    )
}
