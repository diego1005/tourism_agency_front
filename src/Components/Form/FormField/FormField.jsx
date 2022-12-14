import { useContext } from "react";
import { FormHandlerContext } from "../../../Context/context";

export default function FormField({ icon = null, type, field, pHolder = null, value = null }) {

    const { inputData, inputHandler } = useContext(FormHandlerContext)

    return (
        <div className="form-field">
            <div className="form-field-icon">
                {icon}
            </div>
            <input
                className="form-field-input"
                type={type}
                name={field}
                placeholder={pHolder}
                onChange={inputHandler}
                value={inputData.name}
            />
        </div>

    )
}
