//STUDENT FORM DATA

export const studentFormData = {
    studentFormName: "student-form",
}

//NEW STUDENT FORM FIELDS

export const studentFormFields = [
    {
        icon: <i className="fa-solid fa-id-card"></i>,
        type: "text",
        name: "dni",
        pHolder: "DNI",
    },
    {
        icon: <i className="fa-solid fa-user"></i>,
        type: "text",
        name: "name",
        pHolder: "Nombre",
    },
    {
        icon: <i className="fa-solid fa-user"></i>,
        type: "text",
        name: "lastname",
        pHolder: "Apellido",
    },
    {
        icon: <i className="fa-solid fa-cake-candles"></i>,
        type: "date",
        name: "birth_date",
        pHolder: "Fecha de Nacimiento",
    },
    {
        icon: <i className="fa-solid fa-phone"></i>,
        type: "text",
        name: "phone",
        pHolder: "Telefono",
    },
    {
        type: "hidden",
        name: "id_role",
        value: 2,
    }
]