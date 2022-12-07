import './UserForm.css';

export default function FormField({ icon, type, name, pHolder }) {
    return (
        <div className="input-ctr">
            <div className="icon-box">
                {icon}
            </div>
            <input
                type={type}
                name={name}
                placeholder={pHolder}
            />
        </div>
    )
}
