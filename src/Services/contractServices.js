import { getByApi } from '../Common/Api/api';

//GET
export const getPaymentMethods = async () => {
    const data = await getByApi("common", "payment");
    return data;
}