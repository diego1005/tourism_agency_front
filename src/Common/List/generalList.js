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
    if (bodyList.length > 0) {
        return [
            {
                "form_name": "edit-general",
                "form_field": false,
            },
            {
                "type": "text",
                "name": "id",
                "value": bodyList[0].id,
                "form_field": false,
            },
            {
                "type": "text",
                "name": "nro_contract",
                "icon": <i className="fa-solid fa-hashtag"></i>,
                "value": bodyList[0].Contract.nro_contract,
            },
            {
                "type": "date",
                "label": "Fecha del contrato:",
                "name": "indicated_date",
                "icon": <i className="fa-regular fa-calendar"></i>,
                "value": bodyList[0].Contract.indicated_date.split("T")[0],
            },
            {
                "type": "text",
                "label": "Valor del contrato:",
                "name": "indicated_value",
                "icon": <i className="fa-solid fa-dollar-sign"></i>,
                "value": bodyList[0].Contract.indicated_value,
            },
            {
                "type": "date",
                "label": "Fecha del viaje:",
                "name": "travel_date",
                "icon": <i className="fa-regular fa-calendar"></i>,
                "value": bodyList[0].travel_date.split("T")[0],
            },
            {
                "type": "text",
                "label": "Estado del contrato:",
                "name": "id_state_general_contract",
                "icon": <i className="fa-solid fa-tag"></i>,
                "value": bodyList[0].StateGeneralContract.state,
            },
        ]
    } else {
        return false;
    }
}