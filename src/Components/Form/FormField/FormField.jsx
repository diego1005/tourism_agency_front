import { createElement } from 'react'
import { useContext } from "react";
import { FormHandlerContext } from "../../../Context/context";

export default function FormField({ tag = "input", icon = null, type = null, field, pHolder = null, label = null }) {

    const { inputData, inputHandler } = useContext(FormHandlerContext)

    return (
        <div className="form-field-container">
            {
                label &&
                <label className='form-label'>{label}</label>
            }
            <div className="form-field">
                <div className="form-field-icon">
                    {icon}
                </div>
                {
                    createElement
                        (
                            tag,
                            {
                                className: "form-field-input",
                                type: type,
                                name: field,
                                placeholder: pHolder,
                                onChange: inputHandler,
                                value: inputData.name,
                            }
                        )
                }
            </div>
        </div>
    )
}
