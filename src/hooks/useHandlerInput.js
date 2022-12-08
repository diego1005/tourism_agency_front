import { useState } from "react"

export const useHandlerInput = () => {

    const [inputData, setInputData] = useState({})

    const inputHandler = ({ target }) => {
        const { name, value } = target;

        setInputData({
            ...inputData,
            [name]: value,
        })
    }

    return {
        inputData,
        inputHandler
    }
}
