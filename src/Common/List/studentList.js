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

        return bodyList.map(element => {
            return [
                {
                    "form_name": "edit-student",
                    "form_field": false,
                },
                {
                    "type": "text",
                    "name": "id",
                    "value": element.id,
                    "form_field": false,
                },
                {
                    "type": "text",
                    "name": "id_user",
                    "value": element.User.id,
                    "form_field": false,
                },
                {
                    "type": "text",
                    "label": "Dni:",
                    "name": "dni",
                    "icon": <i className="fa-solid fa-id-card"></i>,
                    "value": element.dni,
                },
                {
                    "type": "text",
                    "label": "Nombre:",
                    "name": "firstname",
                    "icon": <i className="fa-solid fa-user"></i>,
                    "value": element.User.firstname,
                },
                {
                    "type": "text",
                    "label": "Apellido:",
                    "name": "lastname",
                    "icon": <i className="fa-solid fa-user"></i>,
                    "value": element.User.lastname,
                },
                {
                    "type": "email",
                    "label": "Email:",
                    "name": "email",
                    "icon": <i className="fa-solid fa-envelope"></i>,
                    "value": element.User.email,
                },
                {
                    "type": "date",
                    "label": "Fecha de Nacimiento:",
                    "name": "birth_date",
                    "icon": <i className="fa-solid fa-cake-candles"></i>,
                    "value": element.birth_date.split("T")[0],
                },
                {
                    "type": "text",
                    "label": "Teléfono:",
                    "name": "phone",
                    "icon": <i className="fa-solid fa-phone"></i>,
                    "value": element.phone,
                },
            ]
        });
    } else {
        return false;
    }
}