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
    console.log(bodyList);
    return [bodyList[0].Contract.nro_contract,
    bodyList[0].Contract.indicated_date.split("T")[0],
    bodyList[0].Contract.indicated_value,
    bodyList[0].payment_method,
    bodyList[0].StateContract.state,
    ]
}