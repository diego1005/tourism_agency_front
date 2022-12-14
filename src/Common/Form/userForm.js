//REGISTER FORM FIELDS

export const registerFormFields = [
    {
        icon: <i className="fa-solid fa-user"></i>,
        type: "text",
        name: "name",
        pHolder: "Name",
    },
    {
        icon: <i className="fa-solid fa-user"></i>,
        type: "text",
        name: "lastname",
        pHolder: "Last Name",
    },
    {
        icon: <i className="fa-solid fa-envelope"></i>,
        type: "email",
        name: "email",
        pHolder: "Email",
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
    {
        type: "hidden",
        name: "id_role",
        value: 1,
    }
]

export const formImg = {
    icon: <i className="fa-solid fa-image"></i>,
    type: "file",
    name: "file",
    ref: undefined,
}

// LOGIN FORM DATA

export const loginFormData = {
    loginFormName: "login-form",
}

// LOGIN FORM FIELDS

export const loginFormButton = {
    classBtnContainer: "btn-login-container",
    btnClass: "btn-login",
    value: "Iniciar Sesion",
}

export const loginFormFields = [
    {
        icon: <i className="fa-solid fa-envelope"></i>,
        type: "text",
        name: "username",
        pHolder: "Email",
    },
    {
        icon: <i className="fa-solid fa-lock"></i>,
        type: "password",
        name: "password",
        pHolder: "Password",
    },
]