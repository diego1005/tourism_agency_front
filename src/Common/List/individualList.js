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
    return [
        {
            "form-name": "edit-individual",
        },
        {
            "type": "text",
            "value": bodyList[0].id,
        },
        {
            "type": "text",
            "value": bodyList[0].Contract.nro_contract,
        },
        {
            "type": "date",
            "value": bodyList[0].Contract.indicated_date.split("T")[0],
        },
        {
            "type": "text",
            "value": bodyList[0].Contract.indicated_value,
        },
        {
            "type": "text",
            "value": bodyList[0].payment_method,
        },
        {
            "type": "text",
            "value": bodyList[0].StateContract.state,
        },
    ]
}