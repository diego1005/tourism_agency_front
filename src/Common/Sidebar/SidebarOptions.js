export const sidebarOptions = [
    {
        icon: <i className="fa-solid fa-house"></i>,
        option: "Inicio",
    },
    {
        icon: <i className="fa-solid fa-graduation-cap"></i>,
        option: "Estudiantes",
        subOptions: [
            {
                title: "Nuevo",
                newView: "newStudent",
            },
            {
                title: "Listar",
                newView: "studentsList",
            },
        ]
    },
    {
        icon: <i className="fa-solid fa-person"></i>,
        option: "Contratos Personales",
        subOptions: [
            {
                title: "Nuevo",
                newView: "individual",
            },
            {
                title: "Listar",
                newView: "individualList",
            },
        ]
    },
    {
        icon: <i className="fa-solid fa-person-walking-luggage"></i>,
        option: "Contratos Viajes",
        subOptions: [
            {
                title: "Nuevo",
                newView: "general",
            },
            {
                title: "Listar",
                newView: "generalList",
            },
            {
                title: "Destinos",
                newView: "destinations",
            },
        ]
    },
    {
        icon: <i className="fa-solid fa-cash-register"></i>,
        option: "Caja",
    },
    {
        icon: <i className="fa-solid fa-gear"></i>,
        option: "Configuracion",
    },
]