export const studentListData = {
    titleView: "students",
    classIcon: "fa-solid fa-graduation-cap",
    caption: "Buscar Estudiante",
    headList: [
        {
            "tag": "th",
            "value": "DNI",
        },
        {
            "tag": "th",
            "value": "Nombre",
        },
        {
            "tag": "th",
            "value": "Apellido",
        },
        {
            "tag": "th",
            "value": "Email",
        },
        {
            "tag": "th",
            "value": "Fecha de Nacimiento",
        },
        {
            "tag": "th",
            "value": "Telefono",
        },
        {
            "tag": "th",
            "value": "Acciones",
        },
    ]
}

export const studentBodyList = (bodyList) => {
    if (bodyList.length > 0) {
        return [
            {
                "type": "text",
                "value": bodyList[0].id,
            },
            {
                "type": "text",
                "value": bodyList[0].dni,
            },
            {
                "type": "text",
                "value": bodyList[0].User.firstname,
            },
            {
                "type": "text",
                "value": bodyList[0].User.lastname,
            },
            {
                "type": "email",
                "value": bodyList[0].User.email,
            },
            {
                "type": "date",
                "value": bodyList[0].birth_date.split("T")[0],
            },
            {
                "type": "text",
                "value": bodyList[0].phone,
            },
        ]
    } else {
        return false;
    }
}