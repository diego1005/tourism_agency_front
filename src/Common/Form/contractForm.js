//CONTRACT FORM DATA

export const contractFormData = {
    contractFormName: "contract-form",
}

//CONTRACT FORM FIELDS

export const contractFormFields = [
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
]

//INDIVIDUAL CONTRACTS FORM FIELDS

export const individualFormFields = [
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
        tag: "select",
        icon: <i className="fa-solid fa-file-contract"></i>,
        name: "id_general_contract",
        label: "Selecciona el Contrato General Asociado",
    },
]

//GENERAL CONTRACTS FORM FIELDS

export const generalFormFields = [
    {
        type: "date",
        icon: <i className="fa-regular fa-calendar"></i>,
        name: "travel_date",
        label: "Fecha del Viaje",
    },
    {
        tag: "select",
        icon: <i className="fa-solid fa-location-dot"></i>,
        name: "travel_destination",
        label: "Destino del Viaje",
    },
    {
        tag: "select",
        icon: <i className="fa-solid fa-tag"></i>,
        name: "id_state_general_contract",
        label: "Estado del Contrato",
    },
]