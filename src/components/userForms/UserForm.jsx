import './UserForm.css';
import FormField from './FormField';
import FormButton from './FormButton';
import { Link } from 'react-router-dom';

export default function UserForm({ name, fields, button }) {
    return (
        <form className='form' name={name}>
            <div className="form-content">
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
                {
                    name === 'login' &&
                    <div className="remember-forgot-container">
                        <div className="remember">
                            <input name="remember" type="checkbox" />
                            <label htmlFor="remember"><b>Remember me</b></label>
                        </div>
                        <div className="forgot">
                            <Link to={"#"}>
                                <b>Forgot Password?</b>
                            </Link>
                        </div>
                    </div>
                }
            </div>
            <div className="form-btn">
                <FormButton content={button} />
            </div>
        </form>
    )
}

