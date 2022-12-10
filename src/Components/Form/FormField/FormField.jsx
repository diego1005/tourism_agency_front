
export default function FormField({ icon, type, name, pHolder }) {
    return (
        <div className="form-field">
            <div className="form-field-icon">
                {icon}
            </div>
            <input
                className="form-field-input"
                type={type}
                name={name}
                placeholder={pHolder}
            />
        </div>

    )
}
