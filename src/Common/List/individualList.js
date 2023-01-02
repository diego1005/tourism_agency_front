export const individualListData = {
    titleView: "individual",
    classIcon: "fa-solid fa-person",
    caption: "Buscar Contrato Personal",
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
            "value": "Metodo de Pago",
        },
        {
            "type": "th",
            "value": "Estado",
        },
    ]
}

export const individualBodyList = (bodyList) => {
    return [bodyList.Contract.nro_contract,
    bodyList.Contract.indicated_date,
    bodyList.Contract.indicated_value,
    bodyList.payment_method,
    bodyList.StateContract.state,
    ]
}