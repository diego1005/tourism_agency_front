export const generalListData = {
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
    return [bodyList[0].Contract.nro_contract,
    bodyList[0].Contract.indicated_date.split("T")[0],
    bodyList[0].Contract.indicated_value,
    bodyList[0].travel_date.split("T")[0],
    bodyList[0].StateGeneralContract.state,
    ]
}