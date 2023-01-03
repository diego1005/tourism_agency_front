
function FormOpt({ name, option }) {

    // console.log((name === "id_state_general_contract")? option.state : "");

    const optionList = {
        "payment_method": option.payment,
        "id_user": `${option.User?.firstname} ${option.User?.lastname}`,
        "id_state_individual_contract": option.state,
        "id_general_contract": "nro_contract",
        "travel_destination": "travel",
        "id_state_general_contract": option.state,
    }

    return (
        <option name={optionList[name]?.toLowerCase()}>
            {optionList[name]}
        </option>
    )
}

export default FormOpt