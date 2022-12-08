import { useContext } from 'react'
import { UserContext } from '../../context/context';
import './UserForm.css';

export default function FormField({ icon, type, name, pHolder }) {

    const { inputData, inputHandler } = useContext(UserContext);

    return (
        <div className="input-ctr">
            <div className="icon-box">
                {icon}
            </div>
            <input
                type={type}
                name={name}
                placeholder={pHolder}
                onChange={inputHandler}
                value={inputData.name}
            />
        </div>
    )
}
