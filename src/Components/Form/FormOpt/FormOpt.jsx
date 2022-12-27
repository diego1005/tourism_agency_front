
function FormOpt({ name, option }) {

    const optionList = {
        "payment_method": option.payment,
        "id_user": "name",
        "id_state_individual_contract": option.state,
        "id_general_contract": "nro_contract",
    }

    return (
        <option
            name={optionList[name].toLowerCase()}>{optionList[name]}
        </option>
    )
}

export default FormOpt