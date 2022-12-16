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
        name: "firstname",
        pHolder: "Nombre",
    },
    {
        icon: <i className="fa-solid fa-user"></i>,
        type: "text",
        name: "lastname",
        pHolder: "Apellido",
    },
    {
        icon: <i className="fa-solid fa-envelope"></i>,
        type: "email",
        name: "email",
        pHolder: "Email",
    },
    {
        icon: <i className="fa-solid fa-cake-candles"></i>,
        type: "date",
        name: "birth_date",
        label: "Fecha de Nacimiento",
    },
    {
        icon: <i className="fa-solid fa-phone"></i>,
        type: "text",
        name: "phone",
        pHolder: "Telefono",
    },
    {
        icon: <i className="fa-solid fa-lock"></i>,
        type: "password",
        name: "password",
        pHolder: "Password",
    },
    {
        icon: <i className="fa-solid fa-lock"></i>,
        type: "password",
        name: "confirmPassword",
        pHolder: "ConfirmPassword",
    },
]

export const role = {
    id_role: 2,
}