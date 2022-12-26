import { createElement } from 'react';
import { useContext } from "react";
import { FormHandlerContext } from "../../../Context/context";
import FormOpt from '../FormOpt/FormOpt';

export default function FormField({ tag = "input", icon = null, type = null, field, pHolder = null, label = null, formData = null }) {

    const { inputData, inputHandler } = useContext(FormHandlerContext);

    const selectFields = [
        "payment_method",
        "id_state_individual_contract",
        "id_user",
        "id_general_contract"
    ];

    //crear un objeto formOption con la data necesaria para iterar las opciones de cada select

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
                            },
                            (tag === 'select' && selectFields.includes(field) && formData.length > 0)
                                ? formData.map((option, idx) =>
                                    <FormOpt key={idx} opt={option} />
                                )
                                : undefined
                        )
                }
            </div>
        </div>
    )
}
