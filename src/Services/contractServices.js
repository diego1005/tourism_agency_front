import { getByApi, sendByApi } from '../Common/Api/api';

//GET
//individual contracts state
export const getIndStates = async (role) => {
    const data = await getByApi("contract", "individual/state/list", undefined, role);
    return data;
}
//individual contracts
export const getIndividualContracts = async (role) => {
    const data = await getByApi("contract", "individual/list", undefined, role);
    return data;
}
export const getIndividualContractByDni = async (dni) => {
    const data = await getByApi("contract", "individual", dni);
    return data;
}
//general contracts state
export const getGenStates = async (role) => {
    const data = await getByApi("contract", "general/state/list", undefined, role);
    return data;
}
//general contracts
export const getGeneralContracts = async (role) => {
    const data = await getByApi("contract", "general/list", undefined, role);
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
//travel destinations
export const getDestinations = async () => {
    const data = await getByApi("common", "destination");
    return data;
}

//SEND
//individual contracts
export const addIndividualContract = async (body) => {
    const data = await sendByApi("contract", "individual/add", undefined, "POST", body);
    return data;
}

//general contracts
export const addGeneralContract = async (body) => {
    const data = await sendByApi("contract", "general/add", undefined, "POST", body);
    return data;
}

//travel destinations
export const addDestination = async (body) => {
    const data = await sendByApi("common", "destination/add", undefined, "POST", body);
    return data;
}