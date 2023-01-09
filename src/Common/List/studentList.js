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
                "form_name": "edit-student",
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
                "label": "Dni:",
                "name": "dni",
                "icon": <i className="fa-solid fa-id-card"></i>,
                "value": bodyList[0].dni,
            },
            {
                "type": "text",
                "label": "Nombre:",
                "name": "firstname",
                "icon": <i className="fa-solid fa-user"></i>,
                "value": bodyList[0].User.firstname,
            },
            {
                "type": "text",
                "label": "Apellido:",
                "name": "lastname",
                "icon": <i className="fa-solid fa-user"></i>,
                "value": bodyList[0].User.lastname,
            },
            {
                "type": "email",
                "label": "Email:",
                "name": "email",
                "icon": <i className="fa-solid fa-envelope"></i>,
                "value": bodyList[0].User.email,
            },
            {
                "type": "date",
                "label": "Fecha de Nacimiento:",
                "name": "birth_date",
                "icon": <i className="fa-solid fa-cake-candles"></i>,
                "value": bodyList[0].birth_date.split("T")[0],
            },
            {
                "type": "text",
                "label": "Teléfono:",
                "name": "phone",
                "icon": <i className="fa-solid fa-phone"></i>,
                "value": bodyList[0].phone,
            },
        ]
    } else {
        return false;
    }
}