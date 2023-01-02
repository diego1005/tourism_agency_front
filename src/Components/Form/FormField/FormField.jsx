import { createElement, useEffect, useState } from 'react';
import { useContext } from "react";
import { FormHandlerContext } from "../../../Context/context";
import FormOpt from '../FormOpt/FormOpt';

export default function FormField({ tag = "input", icon = null, type = null, field, pHolder = null, label = null, options }) {

    const [optionList, setOptionList] = useState([]);
    const { inputData, inputHandler } = useContext(FormHandlerContext);

    useEffect(() => {
        if (options) {
            const optSel = <option key={"select"} >--Seleccionar--</option>;
            const optList = options.map((option, idx) =>
                <FormOpt key={idx} name={field} option={option} />
            );
            setOptionList([optSel, ...optList])
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [options])

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
                            (tag === 'select' && options)
                                ? optionList
                                : undefined
                        )
                }
            </div>
        </div>
    )
}
