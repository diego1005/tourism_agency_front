import { getByApi, sendByApi } from '../../common/api/api';
//SEND
export const addUser = async (body) => {
    const data = await sendByApi("user", "add", undefined, "POST", body);
    return data;
}

export const login = async (body) => {
    const data = await sendByApi("auth", "login", undefined, "POST", body);
    return data;
}

//GET
export const get = async () => {
    const data = await getByApi("user");
    return data;
}

export const getById = async (id) => {
    const data = await getByApi("user", id);
    return data;
}

//LOGOUT
export const logout = async () => {
    const { status } = await getByApi("auth", "logout");
    return status;
}