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
                newView: "newContract",
            },
            {
                title: "Listar",
                newView: "contractList",
            },
        ]
    },
    {
        icon: <i className="fa-solid fa-person-walking-luggage"></i>,
        option: "Contratos Viajes",
        subOptions: [
            {
                title: "Nuevo",
                newView: "newTravelContract",
            },
            {
                title: "Listar",
                newView: "travelContractList",
            },
        ]
    },
    {
        icon: <i className="fa-solid fa-question"></i>,
        option: "Item 5",
    },
    {
        icon: <i className="fa-solid fa-question"></i>,
        option: "Item 6",
    },
]