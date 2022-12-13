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
                newView: "NewStudent",
            },
            {
                title: "Listar",
                newView: "StudentsList",
            },
        ]
    },
    {
        icon: <i className="fa-solid fa-person"></i>,
        option: "Contratos Personales",
        subOptions: [
            {
                title: "Nuevo",
                newView: "NewContract",
            },
            {
                title: "Listar",
                newView: "ContractList",
            },
        ]
    },
    {
        icon: <i className="fa-solid fa-person-walking-luggage"></i>,
        option: "Contratos Viajes",
        subOptions: [
            {
                title: "Nuevo",
                newView: "NewTravelContract",
            },
            {
                title: "Listar",
                newView: "TravelContractList",
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