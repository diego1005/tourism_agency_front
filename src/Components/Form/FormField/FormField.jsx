import { useContext } from "react";
import { FormHandlerContext } from "../../../Context/context";

export default function FormField({ icon, type, name, pHolder }) {

    const { inputData, inputHandler } = useContext(FormHandlerContext)

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
                onChange={inputHandler}
                value={inputData.name}
            />
        </div>

    )
}
