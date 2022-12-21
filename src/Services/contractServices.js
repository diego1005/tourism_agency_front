import { getByApi } from '../Common/Api/api';

//GET
//individual contracts state
export const getStates = async (role) => {
    const data = await getByApi("contract", "individual/state/list", undefined, role);
    return data;
}
//general contracts
export const getGeneralContracts = async (role) => {
    const data = await getByApi("contract", "general", undefined, role);
    return data;
}
//students
export const getStudents = async () => {
    const data = await getByApi("common", "student");
    return data;
}
//payment methods
export const getPaymentMethods = async () => {
    const data = await getByApi("common", "payment");
    return data;
}
