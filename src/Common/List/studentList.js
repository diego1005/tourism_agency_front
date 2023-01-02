export const studentListData = {
    titleView: "students",
    classIcon: "fa-solid fa-graduation-cap",
    caption: "Buscar Estudiante",
    headList: [
        {
            "type": "th",
            "value": "DNI",
        },
        {
            "type": "th",
            "value": "Nombre",
        },
        {
            "type": "th",
            "value": "Apellido",
        },
        {
            "type": "th",
            "value": "Email",
        },
        {
            "type": "th",
            "value": "Fecha de Nacimiento",
        },
        {
            "type": "th",
            "value": "Telefono",
        },
    ]
}

export const studentBodyList = (bodyList) => {
    return [bodyList[0].dni,
    bodyList[0].User.firstname,
    bodyList[0].User.lastname,
    bodyList[0].User.email,
    bodyList[0].birth_date.split("T")[0],
    bodyList[0].phone,
    ]
}