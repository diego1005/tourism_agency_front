//INDIVIDUAL CONTRACTS
//DATA

export const individualContractFormData = {
    individualContractFormName: "individual-contract-form",
}

//FORM FIELDS

export const individualContractFormFields = [
    {
        icon: <i className="fa-solid fa-hashtag"></i>,
        type: "text",
        name: "nro_contract",
        pHolder: "Número de Contrato",
    },
    {
        icon: <i className="fa-regular fa-calendar"></i>,
        type: "date",
        name: "indicated_date",
        label: "Fecha indicada",
    },
    {
        icon: <i className="fa-solid fa-dollar-sign"></i>,
        type: "text",
        name: "indicated_value",
        pHolder: "Valor indicado",
    },
    {
        tag: "select",
        icon: <i className="fa-regular fa-credit-card"></i>,
        name: "payment_method",
        label: "Metodo de pago",
    },
    {
        tag: "select",
        icon: <i className="fa-solid fa-child"></i>,
        name: "id_user",
        label: "Nombre del Estudiante",
    },
    {
        tag: "select",
        icon: <i className="fa-solid fa-tag"></i>,
        name: "id_state_individual_contract",
        label: "Estado del Contrato",
    },
    {
        type: "checkbox",
        label: "Contrato General",
    },
    {
        tag: "select",
        icon: <i className="fa-solid fa-tag"></i>,
        name: "id_general_contract",
        label: "Selecciona",
    },
]