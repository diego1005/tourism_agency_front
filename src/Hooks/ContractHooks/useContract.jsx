import { getPaymentMethods } from '../../Services/contractServices';

export const useContract = () => {

    const bringPayments = async () => {
        const { data } = await getPaymentMethods();
        return data;
    }

    return {
        bringPayments,
    }
}
