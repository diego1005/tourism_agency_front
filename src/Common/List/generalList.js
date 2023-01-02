export const generalListData  = {
    titleView: "general",
    classIcon: "fa-solid fa-person-walking-luggage",
    caption: "Buscar Contrato de Viaje",
    headList: [
        {
            "type": "th",
            "value": "Nro.",
        },
        {
            "type": "th",
            "value": "Fecha",
        },
        {
            "type": "th",
            "value": "Precio",
        },
        {
            "type": "th",
            "value": "Fecha de Viaje",
        },
        {
            "type": "th",
            "value": "Estado",
        },
    ]
}

export const generalBodyList = (bodyList) => {
    return [bodyList.Contract.nro_contract,
    bodyList.Contract.indicated_date,
    bodyList.Contract.indicated_value,
    bodyList.travel_date,
    bodyList.StateGeneralContract.state,
    ]
}